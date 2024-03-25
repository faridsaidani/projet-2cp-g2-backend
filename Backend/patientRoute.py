from __main__ import db, bcrypt
from flask import Blueprint, request, jsonify, session
from PatientModel import Patient

patientRoute = Blueprint('patientRoute', __name__)


@patientRoute.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    new_patient = Patient(
        username=data['username'],
        email=data['email'],
        password=data['password'],
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
    data = request.get_json()

    # Check if 'email' and 'password' keys exist in the JSON payload
    if 'email' not in data or 'password' not in data:
        return jsonify({'error': 'Email and password are required'}), 400

    email = data['email']
    password = data['password']

    # Query the database for the patient with the given email
    patient = Patient.query.filter_by(email=email, password=password).first()

    if patient is not None:
        # Verify the password

        # If the password is correct, store the patient's username in the session
        session['patient_username'] = patient.username
        session['patient_id'] = patient.id
        return jsonify({'message': 'Login successful'})

    # If the email or password is incorrect, return an error message
    return jsonify({'error': 'Invalid email or password'}), 401


@patientRoute.route('/logout', methods=['POST'])
@login_required
def logout():
    # Clear the patient_username li rah f session to indicate logout
    session.pop('patient_username', None)
    session.pop('patient_id', None)
    return jsonify({'message': 'Logout successful'})