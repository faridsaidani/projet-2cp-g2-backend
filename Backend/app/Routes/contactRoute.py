from flask import Blueprint,jsonify,request
from validate_email import validate_email
from flask_mail import Mail, Message
from ..create_app import mail
contactRoute = Blueprint('contactRoute',__name__,url_prefix='/contactUs')

@contactRoute.route('/send',methods=['POST'])
def send_email():
    data = request.form
    sender = data['sender']
    if not validate_email(sender):
      return jsonify({'err':'this is not an email'})
    recipient = 'admin@gmail.com'
    message = data['message']
    fullname = data['fullname']
    msg = Message('Subject',fullname=fullname, sender='from@example.com', recipients=[recipient])
    msg.body = message
    mail.send(msg)
    return jsonify({"message":"done"})

# contaccccccct