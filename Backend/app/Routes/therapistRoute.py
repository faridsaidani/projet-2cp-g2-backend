from ..create_app import db, bcrypt
from flask import Blueprint, request, jsonify, session
from ..models import Therapist
from validate_email import validate_email
import base64
import binascii

# the functions for therapist
# register log_in log_out update delete get_one get_all
therapistRoute = Blueprint('therapistRoute', __name__, url_prefix='/therapist')


@therapistRoute.route('/register', methods=['POST'])
def register():
    data = request.form
    hashed_password = bcrypt.generate_password_hash(data['password']).decode('utf-8')
    
    if 'consent' not in data or data['consent'] != 'true':
        return jsonify({"error": "Consent to save information is required"})
    
    if 'image_file' not in request.files:
        print("the default one")
        image_file = open('../default.jpg', 'rb')
    else:
        image_file = request.files['image_file']

    encoded_file = base64.b64encode(image_file.read()).decode('utf-8')
    ### both cv and certicate are required :
    if 'cv' in request.files and 'certificate' in request.files:
        cv_file = request.files['cv'].read()
        certificate_file = request.files['certificate'].read()
    else:
        return jsonify({"err": "both CV and certificate required"})
    new_therapist = Therapist(
        username=data['username'],
        name=data['name'],
        familly_name=data['familly_name'],
        email=data['email'],
        password=hashed_password,
        gender=data['gender'],
        birthday=data['birthday'],
        image_file=encoded_file,
        cv=cv_file,
        certificate=certificate_file,
        selected=False  # Newly registered therapists are not approved by default
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
    else:
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
    data = request.form

    # Check if 'email' and 'password' keys exist in the JSON payload
    if 'email' not in data or 'password' not in data:
        return jsonify({'error': 'Email and password are required'}), 400

    email = data['email']
    password = data['password']

    # Query the database for the Therapist with the given email
    therapist = Therapist.query.filter_by(email=email).first()

    if therapist is not None:
        # Verify the password
        if bcrypt.check_password_hash(therapist.password, password):
            # verify if the therapist is really approved by the admin
            if therapist.selected:
                # If approved, store the therapist's ID in the session
                session['therapist_id'] = therapist.id
                return jsonify({'message': 'Login successful'})
            else:
                return jsonify({'error': 'Therapist not approved by admin'}), 401

    # If the email or password is incorrect, return an error message
    return jsonify({'error': 'Invalid email or password'}), 401


@therapistRoute.route('/logout', methods=['POST'])
@login_required
def logout():
    # Clear the Therapist_username li rah f session to indicate logout
    session.pop('Therapist_username', None)
    session.pop('Therapist_id', None)
    return jsonify({'message': 'Logout successful'})


@therapistRoute.route('/update/<int:id>', methods=['PUT'])
def update(id):
    therapist_to_update = Therapist.query.get(id)
    info = request.form
    if 'image_file' in request.files:
        image_file = request.files['image_file']
        encoded_image = base64.b64encode(image_file.read()).decode('utf-8')
    else:
        encoded_image = False
    if 'cv' not in request.files:
        cv = False
    else:
        cv = True
        
    if 'certificate' not in request.files:
        certificate = False
    else:
        certificate = True
    new_info = Therapist(
        username = info['username'],
        email = info['email'],
        password = info['password'],
        name = info['name'],
        familly_name = info['familly_name'],
        birthday = info['birthday'],
        gender = info['gender'],
        image_file = encoded_image,
        cv = cv,
        selected = True
    )
    if new_info.username:
        if Therapist.query.filter(Therapist.username == new_info.username).first():
            return jsonify({'error': 'usename already exist'})
        else:
            therapist_to_update.username = new_info.username
    if new_info.email:
        if Therapist.query.filter(Therapist.username == new_info.email).first():
            return jsonify({'error': 'email already exist'})
        elif not validate_email(new_info.email):
            return jsonify({'error': 'invalid email'})
        else:
            therapist_to_update.email = new_info.email
    if new_info.password:
        hashed_password = bcrypt.generate_password_hash(new_info.password).decode('utf-8')
        therapist_to_update.password = hashed_password
    if new_info.name:
        therapist_to_update.name = new_info.name
    if new_info.familly_name:
        therapist_to_update.family_name = new_info.familly_name
    if new_info.image_file:
        image_file = request.files['image_file']
        encoded_image = base64.b64encode(image_file.read()).decode('utf-8')
        therapist_to_update.image_file = encoded_image
    if cv:
        therapist_to_update.cv = new_info.cv
    if certificate:
        therapist_to_update.certificate = new_info.certificate
    if new_info.birthday:
       therapist_to_update.birthday = new_info.birthday
    
    
    db.session.commit()
    return jsonify({"message": "updated"})


@therapistRoute.route('/delete/<int:id>', methods=['DELETE'])
def delete(id):
    found_therapist = Therapist.query.filter(Therapist.id == id).first()
    if found_therapist:
        db.session.delete(found_therapist)
        db.session.commit()
        return jsonify({"message": "deleted"})
    else:
        return jsonify({'err': 'this therapist do not exist'})


@therapistRoute.route('/deleteimg/<int:id>', methods=['DELETE'])
# in case we want to dalate image
# in the same time replace it with default one
def delete_image_file(id):
    # id patient_id
    found_therapist = Therapist.query.filter(Therapist.id == id).first()
    if found_therapist:
        image_file = open('../default.jpg', 'rb')
        encoded_image = base64.b64encode(image_file.read()).decode('utf-8')
        found_therapist.image_file = encoded_image
        # db.session.delete(found_therapist)
        db.session.commit()
        return jsonify({"message": "delete image success"})
 
@login_required
@therapistRoute.route('/get_all', methods=['GET'])
def get_all_therapists():
    therapists = Therapist.query.all()
    therapist_list = []
    for therapist in therapists:
        try:
            cv_decoded = base64.b64decode(therapist.cv).decode('utf-8')
        except (binascii.Error, UnicodeDecodeError):
            cv_decoded = "Unable to decode CV"
        try:
            certificate_decoded = base64.b64decode(therapist.certificate).decode('utf-8')
        except (binascii.Error, UnicodeDecodeError):
            certificate_decoded = "Unable to decode certificate"
        therapist_info = {
            'id': therapist.id,
            'username': therapist.username,
            'name': therapist.name,
            'familly_name': therapist.familly_name,
            'email': therapist.email,
            'gender': therapist.gender,
            'birthday': therapist.birthday,
            'image_file': therapist.image_file,
            'cv':cv_decoded,
            'certificate':certificate_decoded,
            'selected': therapist.selected
        }
        therapist_list.append(therapist_info)
    return jsonify({'therapists': therapist_list})


@login_required
@therapistRoute.route('get/<int:id>', methods=['GET'])
def get_therapist(id):
    therapist = Therapist.query.get(id)
    if therapist:
        try:
            cv_decoded = base64.b64decode(therapist.cv).decode('utf-8')
        except (binascii.Error, UnicodeDecodeError):
            cv_decoded = "Unable to decode CV"
        try:
            certificate_decoded = base64.b64decode(therapist.certificate).decode('utf-8')
        except (binascii.Error, UnicodeDecodeError):
            certificate_decoded = "Unable to decode certificate"
        therapist_info = {
            'id': therapist.id,
            'username': therapist.username,
            'name': therapist.name,
            'familly_name': therapist.familly_name,
            'email': therapist.email,
            'gender': therapist.gender,
            'birthday': therapist.birthday,
            'image_file': therapist.image_file,
            'cv': cv_decoded,
            'certificate':certificate_decoded,
            'selected': therapist.selected
        }
        return jsonify({'therapist': therapist_info})
    else:
        return jsonify({'error': 'Therapist not found'}), 404


### here data not like post in the body of request but in the query parameters in the url 
@login_required
@therapistRoute.route('/search', methods=['GET'])
def search_therapists():
    # Get query parameters from the request
    name = request.args.get('name')
    familly_name = request.args.get('familly_name')
    
    # Build the query based on the provided parameters
    query = Therapist.query
    if name:
        query = query.filter(Therapist.name.ilike(f'%{name}%'))
    if familly_name:
        query = query.filter(Therapist.familly_name.ilike(f'%{familly_name}%'))
  
    # Execute the query and retrieve matching therapists
    therapists = query.all()
    
    # Convert therapists to JSON format
    therapist_list = []
    for therapist in therapists:
        try:
            cv_decoded = base64.b64decode(therapist.cv).decode('utf-8')
        except (binascii.Error, UnicodeDecodeError):
            cv_decoded = "Unable to decode CV"
        try:
            certificate_decoded = base64.b64decode(therapist.certificate).decode('utf-8')
        except (binascii.Error, UnicodeDecodeError):
            certificate_decoded = "Unable to decode certificate"
        therapist_info = {
            'id': therapist.id,
            'username': therapist.username,
            'name': therapist.name,
            'familly_name': therapist.familly_name,
            'email': therapist.email,
            'gender': therapist.gender,
            'birthday': therapist.birthday,
            'image_file': therapist.image_file,
            'cv': cv_decoded,
            'certificate':certificate_decoded,
            'selected': therapist.selected
        }
        therapist_list.append(therapist_info)
    
    # Return the list of matching therapists as JSON response
    return jsonify({'therapists': therapist_list})