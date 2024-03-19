from app import db,ma

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
class patientSchema(ma.Schema):
    class Meta:
        fields = ('id','username','email','image_file','password')