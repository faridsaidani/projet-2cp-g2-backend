from __main__ import db,bcrypt
from flask import Blueprint, request, jsonify, session
from models import Therapist
from validate_email import validate_email

# the functions for therapist
# register log_in log_out update delete get_one get_all

therapistRoute = Blueprint('therapistRoute', __name__,url_prefix='/therapist')






@therapistRoute.route('/update/<int:id>',methods=['PUT'])
def update(id):
    therapist_to_update = Therapist.query.get(id)
    info = request.form
    if 'image_file' in request.files:
        image_file = request.files['image_file']
        encoded_image = base64.b64encode(image_file.read()).decode('utf-8')
    else :
        encoded_image = False
    if 'cv' not in request.files:
        cv = False
    else:
        medical_file = True
    new_info = Therapist(
        username = info['username'],
        email = info['email'],
        password = info['password'],
        name = info['name'],
        familly_name = info['familly_name'],
        birthday = info['birthday'],
        gender = info['gender'],
        image_file = encoded_image
    )
    if new_info.username:
        if Therapist.query.filter(Therapist.username == new_info.username ).first() :
            return jsonify({'error':'usename already exist'})
        else:
            therapist_to_update.username = new_info.username
    if new_info.email:
        if Therapist.query.filter(Therapist.username == new_info.email).first():
            return jsonify({'error':'email already exist'})
        elif not validate_email(new_info.email):
            return jsonify({'error':'invalid email'})
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
    if cv :
       therapist_to_update.cv = new_info.cv
    if new_info.birthday:
       therapist_to_update.birthday = new_info.birthday
    
    
    db.session.commit()
    return jsonify({"message":"updated"})
 
@therapistRoute.route('/delete/<int:id>',methods=['DELETE'])
def delete(id):
    found_therapist = Therapist.query.filter(Therapist.id == id).first()
    if found_therapist :
        db.session.delete(found_therapist)
        db.session.commit()
        return jsonify({"message":"deleted"})
    else :
        return jsonify({'err':'this therapist do not exist'})

@therapistRoute.route('/deleteimg/<int:id>',methods=['DELETE'])
# in case we want to dalate image 
# in the same time replace it with default one
def delete_image_file(id):
    # id patient_id
        found_therapist = Therapist.query.filter(Therapist.id == id).first()
        if found_therapist :
            image_file = open('default.jpg', 'rb')
            encoded_image = base64.b64encode(image_file.read()).decode('utf-8')
            found_therapist.image_file = encoded_image
            # db.session.delete(found_therapist)
            db.session.commit()
            return jsonify({"message":"delete image success"})
