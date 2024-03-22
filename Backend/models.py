from  __main__ import db

class Patient(db.Model):
    id = db.Column(db.Integer, primary_key=True, unique=True)
    username = db.Column(db.String(20), unique=True)
    image_file = db.Column(db.String(20), default='default.jpg', nullable=False)
    email = db.Column(db.String(120), unique=True)
    password = db.Column(db.String(20))

    def __init__(self, username, email, image_file, password):
        self.username = username
        self.email = email
        self.image_file = image_file
        self.password = password

class Therapist(db.Model):
    therapist_id = db.Column(db.Integer,primary_key=True,nullable=False)
    username = db.Column(db.String(20),unique=True,nullable=False)
    email = db.Column(db.String(20),unique=True,nullable=False)
    image_file = db.Column(db.String(120),default= 'default.jpg',nullable=False)
    password = db.Column(db.String(20))
    # file_name = db.Column(db.String(50))
    # data = db.Column(db.LargeBinary)