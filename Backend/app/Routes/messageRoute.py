from flask import request,jsonify,Blueprint
from ..create_app import db,socketio
from ..models import Message,Conversation
from flask_socketio import emit
from datetime import datetime
messageRoute = Blueprint('messageRoute',__name__,url_prefix='/messages')
#  the functions for this route 
#  send_ message
# start conversation 
#  
@socketio.on('message')
def handle_message(data):
    new_message = Message(
        sender_type=data['sender_type'],
        sender_id=data['sender_id'],
        recipient_type=data['recipient_type'],
        recipient_id=data['recipient_id'],
        content=data['content']
    )
    db.session.add(new_message)
    db.session.commit()
    emit('message', {
        'sender_type': data['sender_type'],
        'sender_id': data['sender_id'],
        'recipient_type': data['recipient_type'],
        'recipient_id': data['recipient_id'],
        'content': data['content'],
        'time': new_message.time
    }, broadcast=True)

@messageRoute.route('/start_conversation', methods=['POST'])
def start_conversation():
    data = request.form
    patient_id = data['patient_id']
    therapist_id = data['therapist_id']
    conversation = Conversation.query.filter_by(patient_id=patient_id, therapist_id=therapist_id).first()

    if conversation:
        return jsonify({'err': 'this conversation alrready exist'})
    else:
        new_conversation = Conversation(patient_id=patient_id, therapist_id=therapist_id)
        db.session.add(new_conversation)
        db.session.commit()
        return jsonify({'message': "new conversation added"})

@messageRoute.route('/send', methods=['POST'])
def send_message():
    data = request.form
    conversation_id = data['conversation_id']
    sender_id = data['sender_id']
    sender_type = data['sender_type']
    recipient_type = data['recipient_type']
    recipient_id = data['recipient_id']
    content = data['content']
    time = data['time']
    new_message = Message(conversation_id=conversation_id, sender_id=sender_id, content=content,sender_type=sender_type,recipient_type=recipient_type,recipient_id=recipient_id,time=time)
    db.session.add(new_message)
    db.session.commit()
    # return jsonify({'message_id': new_message.id})
    return jsonify({'message':"good job"})
# use this function later 
def get_messages_for_conversation(therapist_id, patient_id):
    conversation = Conversation.query.filter_by(therapist_id=therapist_id, patient_id=patient_id).first()
    if conversation:
        return Message.query.filter_by(conversation_id=conversation.id).all()
    else:
        return []
    
# get messages for one conversation
@messageRoute.route('/conversation/messages/<int:therapist_id>/<int:patient_id>', methods=['GET'])
def get_messages_for_conversation_route(therapist_id, patient_id):
    messages = get_messages_for_conversation(therapist_id, patient_id)
    message_list = []
    for message in messages:
        message_list.append({
            'id': message.id,
            'sender_type': message.sender_type,
            'sender_id': message.sender_id,
            'recipient_type': message.recipient_type,
            'recipient_id': message.recipient_id,
            'content': message.content,
            'time': message.time.strftime("%Y-%m-%d %H:%M:%S")
        })
    return jsonify(message_list)



