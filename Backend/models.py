from  __main__ import db

class Patient(db.Model):
    id = db.Column(db.Integer, primary_key=True, unique=True)
    username = db.Column(db.String(20), unique=True)
    name = db.Column(db.String(20),nullable=False)
    familly_name = db.Column(db.String(20),nullable=False)
    email = db.Column(db.String(120), unique=True)
    password = db.Column(db.String(20))
    gender = db.Column(db.String(10))
    birthday = db.Column(db.Date,nullable=False)
    image_file = db.Column(db.Text,nullable=False)

    def __init__(self, username,name,familly_name, email, password,gender,birthday,image_file):
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
    name = db.Column(db.String(20),nullable=False)
    familly_name = db.Column(db.String(20),nullable=False)
    email = db.Column(db.String(120), unique=True)
    password = db.Column(db.String(20))
    gender = db.Column(db.String(10))
    birthday = db.Column(db.Date)
    image_file = db.Column(db.Text, nullable=True)
    cv = db.Column(db.LargeBinary, nullable=True)
    def __init__(self, username, email, password,gender,birthday,image_file,cv):
        self.username = username
        self.email = email
        self.image_file = image_file
        self.password = password
        self.gender = gender
        self.birthday = birthday
        self.cv = cv

class MedicalFile(db.Model):
    id = db.Column(db.Integer, primary_key=True, unique=True)
    patient_id = db.Column(db.Integer,nullable=False)
    file_content = db.Column(db.LargeBinary)
    def __init__(self,patient_id,file_content):
        self.patient_id = patient_id
        self.file_content = file_content

