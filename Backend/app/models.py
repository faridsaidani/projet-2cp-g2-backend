from .create_app  import db
from datetime import datetime 


class Patient(db.Model):
    id = db.Column(db.Integer, primary_key=True, unique=True)
    username = db.Column(db.String(20), unique=True)
    name = db.Column(db.String(20), nullable=False)
    familly_name = db.Column(db.String(20), nullable=False)
    email = db.Column(db.String(120), unique=True)
    password = db.Column(db.Text ,nullable=False)  # Hashed Password
    gender = db.Column(db.String(10))
    birthday = db.Column(db.Date, nullable=False)
    image_file = db.Column(db.Text, nullable=False)
    therapist_id = db.Column(db.Integer, db.ForeignKey('therapist.id'), default = None)  # add_this
    # relations appointment 
    appointments = db.relationship('Appointment', backref='patient')
    def __init__(self, username, name, familly_name, email, password, gender, birthday, image_file,therapist_id):
        self.username = username
        self.email = email
        self.name = name
        self.familly_name = familly_name
        self.image_file = image_file
        self.password = password
        self.gender = gender
        self.birthday = birthday
        self.therapist_id = therapist_id



class Therapist(db.Model):
    id = db.Column(db.Integer, primary_key=True, unique=True)
    username = db.Column(db.String(20), unique=True)
    name = db.Column(db.String(20), nullable=False)
    familly_name = db.Column(db.String(20), nullable=False)
    email = db.Column(db.String(120), unique=True)
    password = db.Column(db.Text ,nullable=False)  # Hashed Password
    gender = db.Column(db.String(10))
    birthday = db.Column(db.Date)
    image_file = db.Column(db.Text, nullable=True)
    cv = db.Column(db.LargeBinary, nullable=True)
    selected = db.Column(db.Boolean,default=False)
    # relations appointment and patient
    appointments = db.relationship('Appointment', backref='therpist')
    patients = db.relationship('Patient', backref='therpist')

    def __init__(self, username, email, name, familly_name, password, gender, birthday, image_file,cv,selected):
        self.username = username
        self.name = name
        self.familly_name = familly_name
        self.email = email
        self.image_file = image_file
        self.password = password
        self.gender = gender
        self.birthday = birthday
        self.image_file = image_file
        self.cv = cv
        self.selected = selected


class MedicalFile(db.Model):
    id = db.Column(db.Integer, primary_key=True, unique=True)
    patient_id = db.Column(db.Integer, nullable=False)
    file_content = db.Column(db.LargeBinary)

    def __init__(self, patient_id, file_content):
        self.patient_id = patient_id
        self.file_content = file_content

class Appointment(db.Model):
    id = db.Column(db.Integer, primary_key=True, unique=True)
    name = db.Column(db.String(100),nullable=False)
    date = db.Column(db.Date)
    therapist_id = db.Column(db.Integer, db.ForeignKey('therapist.id'), nullable=False)
    patient_id =  db.Column(db.Integer,db.ForeignKey('patient.id'),nullable=False)
    def __init__(self, name, date, therapist_id, patient_id):
       self.name = name
       self.date = date
       self.therapist_id = therapist_id
       self.patient_id = patient_id

# models that we need it for the chat 
class Conversation(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    patient_id = db.Column(db.Integer, db.ForeignKey('patient.id'), nullable=False)
    therapist_id = db.Column(db.Integer, db.ForeignKey('therapist.id'), nullable=False)
    messages = db.relationship('Message', backref='conversation')
    def __init__(self, patient_id, therapist_id):
        self.patient_id = patient_id
        self.therapist_id = therapist_id



class Message(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    sender_type = db.Column(db.String(20), nullable=False)  # 'therapist' or 'patient'
    sender_id = db.Column(db.Integer, nullable=False)
    recipient_type = db.Column(db.String(20), nullable=False)
    recipient_id = db.Column(db.Integer, nullable=False)
    Conversation_id = db.Column(db.Integer, db.ForeignKey('conversation.id'), default = None) 
    content = db.Column(db.Text, nullable=False)
    time = db.Column(db.DateTime, nullable=False)
    def __init__(self, sender_type, sender_id,recipient_type,content,time):
        self.sender_type = sender_type
        self.sender_id = sender_id
        self.recipient_type = recipient_type
        self.content = content
        self.time = time

# the callender
# class Callender(db.Model):
#     id = db.Column(db.Integer,primary_key=True)
#     Therapist_id = db.Column(db.Integer)
#     def __init__(self,therapist_id):
#         self.therapist_id = therapist_id

class Event(db.Model):
    id = db.Column(db.Integer,primary_key=True)
    therapist_id = db.Column(db.Integer)
    patient_id = db.Column(db.Integer)
    title = db.Column(db.String(100), nullable=False)
    start_date = db.Column(db.DateTime, nullable=False)
    end_date = db.Column(db.DateTime, nullable=False)
    def __init__(self,therapist_id,patient_id,title,start_date,end_date):
        self.therapist_id = therapist_id
        self.patient_id = patient_id
        self.title = title
        self.start_date = start_date
        self.end_date = end_date

# notifications

class Notification(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    # therapist table and patient table are not the same
    recipient_type = db.Column(db.String(20),nullable=False)
    recipient_id = db.Column(db.Integer)
    message = db.Column(db.String(255))
    timestamp = db.Column(db.DateTime, default=datetime.utcnow())
    read = db.Column(db.Boolean, default=False)

    def __init__(self, recipient_id, message,timestamp,read,recipient_type):
        self.recipient_id = recipient_id
        self.recipient_type = recipient_type
        self.message = message
        self.timestamp = timestamp
        self.read = read

class Blog(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    content = db.Column(db.String(1000), nullable=False)
    date = db.Column(db.Date, nullable=False)
    def __init__(self, name, content,date):
        self.name = name
        self.content = content
        self.date = date

# id username email password 
class Admin(db.Model):
    id = db.Column(db.Integer, primary_key=True, unique=True)
    username = db.Column(db.String(20), unique=True)
    email = db.Column(db.String(120),unique=True,nullable=False)
    password = db.Column(db.Text,nullable=False)
    image_file = db.Column(db.Text, nullable=False)
    name = db.Column(db.String(20),nullable=False)
    familly_name = db.Column(db.String(20),nullable=False)
    gender = db.Column(db.String(20),nullable=False)

    def __init__(self, username,email,password,image_file,name,familly_name,gender):
        self.username = username
        self.email = email
        self.password = password
        self.image_file = image_file
        self.name = name
        self.familly_name = familly_name
        self.gender = gender



