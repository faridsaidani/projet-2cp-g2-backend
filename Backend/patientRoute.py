from __main__ import db,bcrypt
from flask import Blueprint, request, jsonify
from PatientModel import Patient
from validate_email import validate_email

patientRoute = Blueprint('patientRoute', __name__)

@patientRoute.route('/register', methods=['POST'])
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

