from ..create_app import db
from flask import Blueprint,request,jsonify,session
from ..models  import Appointment


appointmentRoute = Blueprint('appointmentRoute', __name__,url_prefix='/appointment')

#add
# write it here
@appointmentRoute.route('/add',methods = ['POST'])
def add():
    data = request.form
    new_appointment = Appointment(
        name = data["name"] ,
        date = data["date"] ,
        therapist_id= data["therapist_id"] ,
        patient_id= data["patient_id"],
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
        return jsonify({'message':'created'})
    
#update
# write it here
@appointmentRoute.route('/update/<int:id>', methods=['PUT'])
def update_appointment(id):
    appointment = Appointment.query.get(id)
    if appointment:
        data = request.form
        # Check if the provided name conflicts with existing appointments
        
        if "name" in data and data["name"] != appointment.name:
            existing_appointment = Appointment.query.filter_by(name=data["name"]).first()
            if existing_appointment:
                return jsonify({'error': 'An appointment with this name already exists'}), 400
            else:
                appointment.name = data["name"]

        # Check if the provided date conflicts with existing appointments
        if "date" in data:
            new_date = data["date"]
            existing_appointment = Appointment.query.filter_by(date=new_date).first()
            if existing_appointment:
                return jsonify({'error': 'An appointment already exists at this date'})
            else:
                appointment.date = new_date

        # Update therapist ID and patient ID
        appointment.therapist_id = data["therapist_id"]
        appointment.patient_id = data["patient_id"]

        db.session.commit()
        return jsonify({'message': 'Appointment updated successfully'})
    else:
        return jsonify({'error': 'Appointment not found'}), 404
#delete
# write it here
@appointmentRoute.route('/delete/<int:id>',methods = ['DELETE'])
def delete(id):
    found_appointment = Appointment.query.filter(Appointment.id == id).first()
    if found_appointment :
        db.session.delete(found_appointment)
        db.session.commit()
        return jsonify({"message":"deleted"})
    else :
        return jsonify({"err":"appointment do not exist"})
