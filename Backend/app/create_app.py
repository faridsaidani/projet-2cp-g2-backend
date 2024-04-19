from flask import Flask,jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from configs import Config
from flask_socketio import SocketIO
from flask_mail import Mail
import asyncio

db = SQLAlchemy()
bcrypt = Bcrypt()
socketio = SocketIO()
mail = Mail()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    bcrypt.init_app(app)
    # socketio.init_app(app)
    mail.init_app(app)

    from .Routes.appointmentRoute import appointmentRoute
    from .Routes.patientRoute import patientRoute
    from .Routes.blogsRoute import blogsRoute
    from .Routes.callenderRoute import callenderRoute
    from .Routes.therapistRoute import therapistRoute
    from .Routes.messageRoute import messageRoute
    from .Routes.notificationRoute import notificationRoute
    from .Routes.adminRoute import adminRoute
    from .Routes.contactRoute import contactRoute
    

    with app.app_context():
        db.create_all()

    app.register_blueprint(patientRoute)
    app.register_blueprint(therapistRoute)
    app.register_blueprint(appointmentRoute)
    app.register_blueprint(notificationRoute)
    app.register_blueprint(blogsRoute)
    app.register_blueprint(callenderRoute)
    app.register_blueprint(messageRoute)
    app.register_blueprint(adminRoute)
    app.register_blueprint(contactRoute)

    @app.route('/', methods=['GET'])
    def home():
        return jsonify({"hello": "world"})

    return app