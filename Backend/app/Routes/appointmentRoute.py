from ..create_app import db
from flask import Blueprint, request, jsonify
from ..models  import Appointment


appointmentRoute = Blueprint('appointmentRoute', __name__,url_prefix='/appointment')

#add
# write it here
appointmentRoute.route('/add',methods = ['POST'])
def add():
    data = request.form
    new_appointment = Appointment(
        name = data["name"] ,
        date = data["date"] ,
        therapist_id= data["therapist_id"] ,
        patient_id= data["patient_ud"],
    )
    if not data["name"] :
        return jsonify({'err':'name required'})
    elif not data["date"] :
        return jsonify({'err':'date required'})
    elif not data["therapist_id"] :
        return jsonify({'err':'therapist_id required'})
    elif not data["patient_id"] :
        return jsonify({'err':'patient_id required'})
    else:
        db.session.add(new_appointment)
        db.session.commit()
        return jsonify({'emessage':'created'})
    
#update
# write it here

#delete
# write it here
appointmentRoute.route('/delete/<int:id>',methods = ['DELETE'])
def delete(id):
    found_appointment = Appointment.query.filter(Appointment.id == id).first()
    if found_appointment :
        db.session.delete(found_appointment)
        return jsonify({"message":"deleted"})
    else :
        return jsonify({"err":"appointment do not exist"})
