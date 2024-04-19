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
        return jsonify({'message':'created'})
    
#update
# write it here
@appointmentRoute.route('/update/<int:id>', methods=['PUT'])
def update_appointment(id):
    appointment = Appointment.query.get(id)
    if appointment:
        data = request.form
        
        # Update name if provided
        if "name" in data:
            appointment.name = data["name"]

        # Update date if provided
        if "date" in data:
            new_date = data["date"]
            existing_appointment = Appointment.query.filter_by(date=new_date).first()
            if existing_appointment:
                return jsonify({'error': 'An appointment already exists at this date'}), 400
            else:
                appointment.date = new_date

        # Update therapist ID if provided
        if "therapist_id" in data:
            appointment.therapist_id = data["therapist_id"]

        # Update patient ID if provided
        if "patient_id" in data:
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
    
@appointmentRoute.route('/get_all', methods=['GET'])
def get_all_appointments():
    appointments = Appointment.query.all()
    appointments_list = []
    for appointment in appointments:
        appointment_info = {
            'id': appointment.id,
            'name': appointment.name,
            'date': appointment.date,
            'therapist_id':appointment.therapist_id,
            'patient_id':appointment.patient_id
        }
        appointments_list.append(appointment_info)
    return jsonify({'appointments': appointments_list})

@appointmentRoute.route('get/<int:id>', methods=['GET'])
def get_appointment(id):
    appointment = Appointment.query.get(id)
    if appointment:
        appointment_info = {
            'id': appointment.id,
            'name': appointment.name,
            'date': appointment.date,
            'therapist_id':appointment.therapist_id,
            'patient_id':appointment.patient_id
        }
        return jsonify({'appointment': appointment_info})
    else:
        return jsonify({'error': 'Appointment not found'}), 404
    
 
@appointmentRoute.route('/search', methods=['GET'])
def search_appointments():
    # Get query parameters from the request
    name = request.args.get('name')
    date = request.args.get('date')
    
    # Build the query based on the provided parameters
    query = Appointment.query
    if name:
        query = query.filter(Appointment.name.ilike(f'%{name}%'))
    if date:
        query = query.filter(Appointment.date.ilike(f'%{date}%'))

  
    # Execute the query and retrieve matching appointments
    appointments = query.all()
    
    # Convert patients to JSON format
    appointment_list = []
    for appointment in appointments:
        appointment_info = {
            'id': appointment.id,
            'name': appointment.name,
            'date': appointment.date,
            'therapist_id':appointment.therapist_id,
            'patient_id':appointment.patient_id
        }

        appointment_list.append(appointment_info)
    
    # Return the list of matchingappointments as JSON response
    return jsonify({'appointments': appointment_list})
