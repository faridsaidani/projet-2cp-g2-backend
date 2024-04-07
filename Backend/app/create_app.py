from flask import Flask,jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from configs import Config

db = SQLAlchemy()
bcrypt = Bcrypt()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    bcrypt.init_app(app)

    from .Routes.appointmentRoute import appointmentRoute
    from .Routes.patientRoute import patientRoute
    from .Routes.therapistRoute import therapistRoute
    

    with app.app_context():
        db.create_all()

    app.register_blueprint(patientRoute)
    app.register_blueprint(therapistRoute)
    app.register_blueprint(appointmentRoute)

    @app.route('/', methods=['GET'])
    def home():
        return jsonify({"hello": "world"})

    return app