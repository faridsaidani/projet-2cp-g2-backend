from ..create_app import db
from flask import Blueprint,request,jsonify,session
from ..models  import Appointment

appointmentRoute = Blueprint('appointmentRoute', __name__,url_prefix='/appointment')

#add
# write it here

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
                return jsonify({'error': 'An appointment already exists at this date'}), 400
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
