from ..create_app import db,bcrypt
import base64
from flask import Blueprint,request,jsonify,session
from ..models  import Admin,Appointment,Therapist,Patient
from validate_email import validate_email

# done with tests
adminRoute = Blueprint('adminRoute', __name__,url_prefix='/admin')

# all the function for admin

# add admin
# done
@adminRoute.route('/add',methods = ['POST'])
def add():
    data = request.form
    # password
    hashed_password = bcrypt.generate_password_hash(data['password']).decode('utf-8')
    # image file
    if 'image_file' not in request.files:
        image_file = open('../default.jpg', 'rb')
    else:
        image_file = request.files['image_file']
 
    file = base64.b64encode(image_file.read()).decode('utf-8')
    new_admin = Admin(
        username=data["username"],
        email=data["email"],
        password= hashed_password,
        name=data["name"],
        familly_name=data["familly_name"],
        image_file= file,
        gender=data["gender"]
    )
    if not new_admin.email:
        return jsonify({'error':'email required'})
    elif not new_admin.username :
        return jsonify({'error':'username required'})
    elif not new_admin.password:
        return jsonify({'error':'password required'})
    elif not validate_email(new_admin.email):
        return jsonify({'error': 'Invalid email address'})
    elif Admin.query.filter(Admin.email == new_admin.email).first() is not None:
        return jsonify({'error': 'Email already exists'})
    elif Admin.query.filter(Admin.username == new_admin.username).first() is not None:
        return jsonify({'error': 'Username already exists'})
    elif new_admin.gender.upper() not in ['MALE','FEMALE']:
        return jsonify({"error":"choose male or female"})
    else:
        # created 
        db.session.add(new_admin)
        db.session.commit()
        return jsonify({'message': 'success'})


# delete admin
# done
@adminRoute.route('/delete/<int:id>',methods=['DELETE'])
def delete(id):
    found_patient = Admin.query.filter(Admin.id == id).first()
    if found_patient :
        db.session.delete(found_patient)
        db.session.commit()
        return jsonify({"message":"deleted"})
    else :
        return jsonify({'err':'this admin do not exist'})

# update admin
# password 
# done
@adminRoute.route('/update/<int:id>',methods=['PUT'])
def update(id):
    admin_to_update = Admin.query.get(id)
    info = request.form
    new_password = info['password']
    hashed_password = bcrypt.generate_password_hash(new_password).decode('utf-8')
    db.session.commit()
    return jsonify({"message":"updated"})

############# Authentication decorator ###############################
def login_required(func):
    def wrapper(*args, **kwargs):
        # Check if the patient_id session variable is set after the user logged in
        if 'patient_id' not in session:
            return jsonify({'error': 'Unauthorized'}), 401  # Return 401 Unauthorized status code
        return func(*args, **kwargs)

    return wrapper

# login
# done
@adminRoute.route('/login', methods=['POST'])
def login():
    data = request.form
    if 'email' not in data or 'password' not in data:
        return jsonify({'error': 'Email and password are required'})

    email = data['email']
    password = data['password']

    # Query the database for the patient with the given email
    patient = Admin.query.filter_by(email=email).first()
    
    if patient is not None:
        if bcrypt.check_password_hash(patient.password, password):
            session['admin_username'] = patient.username
            session['admin_id'] = patient.id
            return jsonify({'message': 'Login'})
        return jsonify({'error': 'wrong'})

# logout
@adminRoute.route('/logout', methods=['POST'])
@login_required
def logout():
    # Clear the patient_username li rah f session to indicate logout
    session.pop('admin_username', None)
    session.pop('admin_id', None)
    return jsonify({'message': 'Logout successful'}) 

# total_users
# done
@adminRoute.route('/total/users', methods=['GET'])
def count():
    num_patients = Patient.query.count()
    return jsonify(num_patients)
# total patients
# done
@adminRoute.route('/total/patients', methods=['GET'])
def count_patients():
    num_patients = Patient.query.count()
    num_therapists = Therapist.query.count()
    num_users = num_patients + num_therapists
    return jsonify(num_users)

# total therapists
# done
@adminRoute.route('/total/therapists', methods=['GET'])
def count_therapists():
    num_therapists = Therapist.query.count()
    return jsonify(num_therapists) 

# total appointments
# done
@adminRoute.route('/total/appointments', methods=['GET'])
def count_appointment():
    num_appointments = Appointment.query.count()
    return jsonify(num_appointments) 

# total pending
# done
@adminRoute.route('/total/pending', methods=['GET'])
def count_pending():
    pending = Therapist.query.filter_by(selected=False).count()
    return jsonify(pending)

# pending list
@adminRoute.route('/list/pending', methods=['GET'])
def get_pending_list():
    pending_list = Therapist.query.filter_by(selected=False)
    return pending_list

# admin list
@adminRoute.route('/list/admin', methods=['GET'])
def get_the_list():
    admin_list = Admin.query.all()
    return admin_list
# patient list 
@adminRoute.route('/list/patient', methods=['GET'])
def get_patient_list():
    patient_list = Admin.query.all()
    return patient_list

# therapist list 
    # approved or no
    # date of inscription
    # cv and certificates
    # email name familly name
@adminRoute.route('/list/therapist', methods=['GET'])
def get_admin_list():
    therapist_list = Therapist.query.all()
    return therapist_list

# approve a tharapist
@adminRoute.route('/approve/<int:id>')
def approve(id):
    found_therapist = Therapist.query.filter_by(id=id)
    found_therapist.selected = True
    db.session.commit()
    return jsonify({"message":"therapist approved"})
