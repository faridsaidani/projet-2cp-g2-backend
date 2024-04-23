from flask import Blueprint, request, jsonify
from flask_socketio import emit
from ..create_app import socketio
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


@socketio.on('join_call')  # Define WebSocket route for joining a call
def join_call(data):
    session_id = data.get('session_id')
    if session_id:
        emit('session_joined', {'session_id': session_id}, broadcast=True)
    else:
        emit('error', {'message': 'Session ID not provided'})
    
    
@socketio.on('end_call')  # Define WebSocket route for ending a call
def end_call(data):
    session_id = data.get('session_id')
    if session_id:
        emit('session_ended', {'session_id': session_id}, room=session_id)  # Broadcast the event to the specific room (session)
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
    
    
# test socket tool