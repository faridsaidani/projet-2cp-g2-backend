from .create_app  import db


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
    therapist_id = db.Column(db.Integer, db.ForeignKey('Therapist.id'), default = None)  # add_this
    # relations appointment 
    appointments = db.relationship('Appointment', backref='patient')
    def __init__(self, username, name, familly_name, email, password, gender, birthday, image_file):
        self.username = username
        self.email = email
        self.name = name
        self.familly_name = familly_name
        self.image_file = image_file
        self.password = password
        self.gender = gender
        self.birthday = birthday


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
    therapist_id = db.Column(db.Integer, db.ForeignKey('Therapist.id'), nullable=False)
    patient_id =  db.Column(db.Integer,db.ForeignKey('patient.id'),nullable=False)
    def __init__(self, name, date, therapist_id, patient_id):
       self.name = name
       self.date = date
       self.therapist_id = therapist_id
       self.patient_id = patient_id