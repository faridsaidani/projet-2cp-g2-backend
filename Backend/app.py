from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_bcrypt import Bcrypt
app = Flask(__name__)
app.config['SECRET_KEY'] = 'acadb627f8500d3147db05e290ddb21b'
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:''@localhost/mydb'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)
bcrypt = Bcrypt(app)
from patientRoute import patientRoute
with app.app_context():
    db.create_all()

app.register_blueprint(patientRoute)

@app.route('/', methods=['GET'])
def home():
    return jsonify({"hello": "world"})

if __name__ == "__main__":
    app.run(debug=True)