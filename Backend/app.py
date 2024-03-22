from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_bcrypt import Bcrypt
import os
app = Flask(__name__)
app.secret_key = os.urandom(20)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:''@localhost/mydb'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)
bcrypt = Bcrypt(app)
from patientRoute import patientRoute
from therapistRoute import therapistRoute

with app.app_context():
    db.create_all()

app.register_blueprint(patientRoute)
app.register_blueprint(therapistRoute)

@app.route('/', methods=['GET'])
def home():
    return jsonify({"hello": "world"})

if __name__ == "__main__":
    app.run(debug=True)