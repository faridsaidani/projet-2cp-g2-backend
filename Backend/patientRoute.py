from app import db,bcrypt
from flask import Blueprint, request, session,jsonify
from PatientModel import Patient,patientSchema


patientRoute = Blueprint('patientRoute', __name__)

@patientRoute.route('/register', methods=['POST'])
# @patientRoute.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    hashed_password = bcrypt.generate_password_hash(data['password']).decode('utf-8')
    new_patient = Patient(
        username=data['username'],
        email=data['email'],
        password=hashed_password,
        image_file=data['image_file']
    )
    print(new_patient.email)
    if '@' not in new_patient.email or '.' not in new_patient.email:
        return jsonify({'error': 'Invalid email address'})

    # Check if email or username already exists in the database
    if Patient.query.filter(Patient.email == new_patient.email).first() is not None:
        existing_patient = Patient.query.filter(Patient.email == new_patient.email).first()
        print(existing_patient.email if existing_patient else None)
        print(data['email'])
        email = data['email'].strip()
        print(email)

        
        return jsonify({'error': 'Email already exists'})

    if Patient.query.filter(Patient.username == new_patient.username).first() is not None:
        return jsonify({'error': 'Username already exists'})
    
    # If email and username are unique, add the new patient to the database
    db.session.add(new_patient)
    print(new_patient.email)
    db.session.commit()
    return jsonify({'message': 'success'})

@patientRoute.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

## if he didn't write either password or email
    if not email or not password:
        return jsonify({'error': 'Email and password are required'})

    patient = Patient.query.filter_by(email=email).first()

    if patient and bcrypt.check_password_hash(patient.password, password):
        # If the email and password match, store the patient's name and email in the session
        session['patient_name'] = patient.username
        return jsonify({'message': 'Login successful'})
    else:
        # If the email or password is incorrect, return an error message
        return jsonify({'error': 'Invalid email or password'})

@patientRoute.route('/logout')
def logout():
    # Clear the patient_name session variable to indicate logout
    session.pop('patient_name', None)
    return jsonify({'message': 'Logout successful'})
