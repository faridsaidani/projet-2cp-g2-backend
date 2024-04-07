
from ..create_app import db,bcrypt
from flask import Blueprint, request, jsonify, session
from ..models  import Patient, MedicalFile
from validate_email import validate_email
import base64

# the functions for patient
# register log_in log_out update delete get_one get_all

patientRoute = Blueprint('patientRoute', __name__,url_prefix='/patient')

@patientRoute.route('/register', methods= ['POST'])
def register():
    data = request.form
    hashed_password = bcrypt.generate_password_hash(data['password']).decode('utf-8')
    if 'image_file' not in request.files:
        image_file = open('../default.jpg', 'rb')
    else:
        image_file = request.files['image_file']
 
    encoded_image = base64.b64encode(image_file.read()).decode('utf-8')
    medical_file = request.files['medical_file']
    file_m = medical_file.read()

        # ### the new patient
    new_patient = Patient(
            username = data['username'],
            email = data['email'],
            birthday = data['birthday'],
            gender = data['gender'],
            password = hashed_password,
            image_file = encoded_image,
            name = data['name'],
            familly_name = data['familly_name'],
            therapist_id = None
        )
    
    if not new_patient.email:
        return jsonify({'error':'email required'})
    elif not new_patient.username :
        return jsonify({'error':'username required'})
    elif not new_patient.password:
        return jsonify({'error':'password required'})
    elif not validate_email(new_patient.email):
        return jsonify({'error': 'Invalid email address'})
    elif Patient.query.filter(Patient.email == new_patient.email).first() is not None:
        return jsonify({'error': 'Email already exists'})
    elif Patient.query.filter(Patient.username == new_patient.username).first() is not None:
        return jsonify({'error': 'Username already exists'})
    elif new_patient.gender.upper() not in ['MALE','FEMALE']:
        return jsonify({"error":"choose male or female"})
    else:
        # created 
        db.session.add(new_patient)
        db.session.commit()
        ### the medical file
        p_id = new_patient.id
        new_medical_file = MedicalFile(
            patient_id = p_id ,
            file_content = file_m
        )
        db.session.add(new_medical_file)
        db.session.commit()
        
    return jsonify({'message': 'success'})


############# Authentication decorator ###############################
def login_required(func):
    def wrapper(*args, **kwargs):
        # Check if the patient_id session variable is set after the user logged in
        if 'patient_id' not in session:
            return jsonify({'error': 'Unauthorized'}), 401  # Return 401 Unauthorized status code
        return func(*args, **kwargs)

    return wrapper


@patientRoute.route('/login', methods=['POST'])
def login():
    data = request.form

    # Check if 'email' and 'password' keys exist in the JSON payload
    if 'email' not in data or 'password' not in data:
        return jsonify({'error': 'Email and password are required'}), 400

    email = data['email']
    password = data['password']

    # Query the database for the patient with the given email
    patient = Patient.query.filter_by(email=email).first()
    
    if patient is not None:
        # Verify the password
        ###### have a problem with bcrypt library type oerror : runtime error   #######
        if bcrypt.check_password_hash(patient.password, password):
        
            # If the password is correct, store the patient's username in the session
            session['patient_username'] = patient.username
            session['patient_id'] = patient.id
            return jsonify({'message': 'Login successful'})
        return jsonify({'error': 'Invalid email or password'}), 401
    
    
    
    

    # If the email or password is incorrect, return an error message
    


@patientRoute.route('/logout', methods=['POST'])
@login_required
def logout():
    # Clear the patient_username li rah f session to indicate logout
    session.pop('patient_username', None)
    session.pop('patient_id', None)
    return jsonify({'message': 'Logout successful'}) 

@patientRoute.route('/update/<int:id>',methods=['PUT'])
def update(id):
    patient_to_update = Patient.query.get(id)
    info = request.form
    if 'image_file' in request.files:
        image_file = request.files['image_file']
        encoded_image = base64.b64encode(image_file.read()).decode('utf-8')
    else :
        encoded_image = False
    if 'medical_file' not in request.files:
        medical_file = False
    else:
        medical_file = True
    new_info = Patient(
        username = info['username'],
        email = info['email'],
        password = info['password'],
        name = info['name'],
        familly_name = info['familly_name'],
        birthday = info['birthday'],
        gender = info['gender'],
        image_file = encoded_image,
        therapist_id = info['therapist_id']
    )
    print(new_info)
    if new_info.username:
        if Patient.query.filter(Patient.username == new_info.username ).first() :
            return jsonify({'error':'usename already exist'})
        else:
            patient_to_update.username = new_info.username
    if new_info.email:
        if Patient.query.filter(Patient.username == new_info.email).first():
            return jsonify({'error':'email already exist'})
        elif not validate_email(new_info.email):
            return jsonify({'error':'invalid email'})
        else:
            patient_to_update.email = new_info.email
    if new_info.password:
        hashed_password = bcrypt.generate_password_hash(new_info.password).decode('utf-8')
        patient_to_update.password = hashed_password
    if new_info.name:
        patient_to_update.name = new_info.name
    if new_info.familly_name:
        patient_to_update.family_name = new_info.familly_name
    if new_info.image_file:
        image_file = request.files['image_file']
        encoded_image = base64.b64encode(image_file.read()).decode('utf-8')
        patient_to_update.image_file = encoded_image
    if medical_file :
       new_content = request.files['medical_file'].read()
       mf_to_update =  MedicalFile.query.filter(MedicalFile.patient_id == id).first()
       mf_to_update.file_content = new_content
    if new_info.birthday:
       patient_to_update.birthday = new_info.birthday
    if new_info.therapist_id:
       patient_to_update.therapist_id = new_info.therapist_id
     
    
    db.session.commit()
    return jsonify({"message":"updated"})
 
@patientRoute.route('/delete/<int:id>',methods=['DELETE'])
def delete(id):
    found_patient = Patient.query.filter(Patient.id == id).first()
    if found_patient :
        db.session.delete(found_patient)
        db.session.commit()
        delete_medical_file(id)
        return jsonify({"message":"deleted"})
    else :
        return jsonify({'err':'this user do not exist'})



#use this function to delete mf after delete the patient
def delete_medical_file(id):
    # id1 patient_id
        found_medical_file = MedicalFile.query.filter(MedicalFile.patient_id == id).first()
        if found_medical_file : 
            db.session.delete(found_medical_file)
            db.session.commit()
            return 0
        

@patientRoute.route('/deleteimg/<int:id>',methods=['DELETE'])
# in case we want to dalate image 
# in the same time replace it with default one
def delete_image_file(id):
    # id patient_id
        found_patient = MedicalFile.query.filter(MedicalFile.patient_id == id).first()
        if found_patient :
            image_file = open('../default.jpg', 'rb')
            encoded_image = base64.b64encode(image_file.read()).decode('utf-8')
            found_patient.image_file = encoded_image
            db.session.delete(found_patient)
            db.session.commit()
            return jsonify({"message":"delete image success"})

