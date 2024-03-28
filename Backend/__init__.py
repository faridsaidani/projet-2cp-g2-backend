from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from config import Config

app = Flask(__name__)
app.config.from_object(Config)

db = SQLAlchemy(app)
bcrypt = Bcrypt(app)

from Routes.patientRoute import patientRoute
from Routes.therapistRoute import therapistRoute

with app.app_context():
    db.create_all()

app.register_blueprint(patientRoute)
app.register_blueprint(therapistRoute)

@app.route('/', methods=['GET'])
def home():
    return jsonify({"hello": "world"})

if __name__ == "__main__":
    app.run(debug=True)
