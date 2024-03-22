from __main__ import db,bcrypt
from flask import Blueprint, request, jsonify, session
from PatientModel import Patient
from validate_email import validate_email

patientRoute = Blueprint('patientRoute', __name__)

@patientRoute.route('/register', methods= ['POST'])

def register():
    data = request.get_json()
    hashed_password = bcrypt.generate_password_hash(data['password']).decode('utf-8')
    new_patient = Patient(
        username=data['username'],
        email=data['email'],
        password=hashed_password,
        image_file=data['image_file']
    )

    if not validate_email(new_patient.email):
        return jsonify({'error': 'Invalid email address'})

    if Patient.query.filter(Patient.email == new_patient.email).first() is not None:
        return jsonify({'error': 'Email already exists'})

    if Patient.query.filter(Patient.username == new_patient.username).first() is not None:
        return jsonify({'error': 'Username already exists'})
    else:
        db.session.add(new_patient)
        print(new_patient.email)
        db.session.commit()
    return jsonify({'message': 'success'})

#########
 # Authentication decorator
def login_required(func):
    def wrapper(*args, **kwargs):
        # Check if the patient_username session variable is set after the user logged in
        if 'patient_username' not in session:
            return jsonify({'error': 'Unauthorized'}), 401  # Return 401 Unauthorized status code
        return func(*args, **kwargs)
    return wrapper
@patientRoute.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({'error': 'Email and password are required'})

    patient = Patient.query.filter_by(email=email).first()

    if patient and bcrypt.check_password_hash(patient.password, password):
        # If the email and password match, store the patient's username in the session
        session['patient_username'] = patient.username
        return jsonify({'message': 'Login successful'})
    else:
        # If the email or password is incorrect, return an error message
        return jsonify({'error': 'Invalid email or password'})

def logout():
    # Clear the patient_username li rah f session to indicate logout
    session.pop('patient_username', None)
    return jsonify({'message': 'Logout successful'})