from __main__ import db, bcrypt
from flask import Blueprint, request, jsonify, session
from models import Therapist
from validate_email import validate_email
import base64

# the functions for therapist
# register log_in log_out update delete get_one get_all
therapistRoute = Blueprint('therapistRoute', __name__, url_prefix='/therapist')


@therapistRoute.route('/register', methods=['POST'])
def register():
    data = request.form
    hashed_password = bcrypt.generate_password_hash(data['password'])
    image_file = request.files['image_file']
    image_content = image_file.read()
    encoded_file = base64.b64decode(image_content)

    new_therapist = Therapist(
        username=data['username'],
        name=data['name'],
        familly_name=data['familly_name'],
        email=data['email'],
        password=hashed_password,
        gender=data['gender'],
        birthday=data['birthday'],
        image_file=encoded_file
        # here cv
    )
    if not new_therapist.email:
        return jsonify({'error': 'no email'})
    elif not new_therapist.username:
        return jsonify({'error': 'no username'})
    elif not new_therapist.password:
        return jsonify({'error': 'no password'})
    elif not validate_email(new_therapist.email):
        return jsonify({'error': 'Invalid email address'})

    elif Therapist.query.filter(Therapist.email == new_therapist.email).first() is not None:
        return jsonify({'error': 'Email already exists'})

    elif Therapist.query.filter(Therapist.username == new_therapist.username).first() is not None:
        return jsonify({'error': 'Username already exists'})

    db.session.add(new_therapist)
    db.session.commit()
    return jsonify({'message': 'success'})


############# Authentication decorator ###############################
def login_required(func):
    def wrapper(*args, **kwargs):
        # Check if the Therapist_id session variable is set after the user logged in
        if 'Therapist_id' not in session:
            return jsonify({'error': 'Unauthorized'}), 401  # Return 401 Unauthorized status code
        return func(*args, **kwargs)

    return wrapper


@therapistRoute.route('/login', methods=['POST'])
def login():
    data = request.get_json()

    # Check if 'email' and 'password' keys exist in the JSON payload
    if 'email' not in data or 'password' not in data:
        return jsonify({'error': 'Email and password are required'}), 400

    email = data['email']
    password = data['password']

    # Query the database for the Therapist with the given email
    therapist = Therapist.query.filter_by(email=email, password=password).first()

    if Therapist is not None:
        # Verify the password
        if bcrypt.check_password_hash(therapist.password, password):
            # If the password is correct, store the Therapist's username in the session
            session['Therapist_username'] = Therapist.username
            session['Therapist_id'] = Therapist.id
            return jsonify({'message': 'Login successful'})

    # If the email or password is incorrect, return an error message
    return jsonify({'error': 'Invalid email or password'}), 401


@therapistRoute.route('/logout', methods=['POST'])
@login_required
def logout():
    # Clear the Therapist_username li rah f session to indicate logout
    session.pop('Therapist_username', None)
    session.pop('Therapist_id', None)
    return jsonify({'message': 'Logout successful'})
