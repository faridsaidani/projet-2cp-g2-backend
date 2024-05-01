from flask import Blueprint, request, jsonify
from flask_socketio import emit
from ..models import VideoCall
from ..create_app import db



video_call_route = Blueprint('video_call_route', __name__)
 
@video_call_route.route('/start_call', methods=['POST'])
def start_call():
    data = request.form
    session_id = data['session_id']
    therapist_id = data['therapist_id']
    patient_id = data['patient_id']
    if session_id and therapist_id and patient_id:
        # Create a new VideoCall record in the database
        new_call = VideoCall(session_id=session_id, therapist_id=therapist_id, patient_id=patient_id)
        db.session.add(new_call)
        db.session.commit()
        return jsonify({'message': 'Session created', 'session_id': session_id})
    else: 
        return jsonify({'error': 'Session ID not provided'}), 400


@video_call_route.route('/join_call', methods=['POST'])
def join_call():
    data = request.form
    session_id = data['session_id']
    if session_id:
        emit('session_joined', {'session_id': session_id}, broadcast=True)
        return jsonify({'message': 'Joined session', 'session_id': session_id})
    else:
        return jsonify({'error': 'Session ID not provided'}), 400
    
    
@video_call_route.route('/end_call', methods=['POST'])
def end_call():
    data = request.form
    session_id = data['session_id']
    if session_id:
        emit('session_ended', {'session_id': session_id}, broadcast=True)
        # Update the VideoCall record in the database to mark the session as completed
        video_call = VideoCall.query.filter_by(session_id=session_id).first()
        if video_call:
            video_call.completed = True
            db.session.commit()
            return jsonify({'message': 'Session ended', 'session_id': session_id})
        else:
            return jsonify({'error': 'Session ID not found'}), 404
    else:
        return jsonify({'error': 'Session ID not provided'}), 400
    
#The therapist initiates the video call session by calling the start_call route, which generates a new session_id.
#The therapist then shares the session_id with the patient.
#The patient uses the join_call route, providing the session_id received from the therapist,
# to join the same video call session.