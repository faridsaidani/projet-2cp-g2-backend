from ..create_app import db
from flask import Blueprint,request,jsonify,session
from ..models  import Event

callenderRoute = Blueprint('callenderRoute', __name__,url_prefix='/callender')




@callenderRoute.route('/events/<int:therapist_id>/add', methods=['POST'])
def create_event(therapist_id):
    data = request.json

    title = data.get('title')
    therapist_id = therapist_id
    start_date = data.get('start_date')
    end_date = data.get('end_date')
    
    if not title or not start_date or not end_date or not therapist_id:
        return jsonify({'error': 'required fields'})
    
    new_event = Event(title=title, start_date=start_date, end_date=end_date,therapist_id= therapist_id)
    db.session.add(new_event)
    db.session.commit()
    
    return jsonify({'message': 'Event created successfully', 'event_id': new_event.id}), 201

@callenderRoute.route('/api/therapists/<int:therapist_id>/events/<int:event_id>', methods=['PUT'])
def update_event_for_therapist(therapist_id, event_id):

    event = Event.query.get(event_id)
    
    if event.therapist_id != therapist_id:
        return jsonify({'error': 'Event does not belong to this therapist'})
    
    data = request.json
    title = data.get('title', event.title)
    start_date = data.get('start_date', event.start_date)
    end_date = data.get('end_date', event.end_date)
    
    event.title = title
    event.start_date = start_date
    event.end_date = end_date
    
    db.session.commit()
    
    return jsonify({'message': 'Event updated'})

@callenderRoute.route('/therapist/<int:therapist_id>/events', methods=['GET'])
def get_events_for_therapist(therapist_id):
    events = Event.query.filter_by(therapist_id=therapist_id).all()
    event_list = [{'id': event.id, 'title': event.title, 'start_date': event.start_date, 'end_date': event.end_date} for event in events]
    return jsonify(event_list)


@callenderRoute.route('/events/delete/<int:event_id>', methods=['DELETE'])
def delete_event(event_id):
    event = Event.query.get_or_404(event_id)
    if not event :
        return jsonify({'err': 'do not exist'})
    db.session.delete(event)
    db.session.commit()
    
    return jsonify({'message': 'deleted'})

# hhh


