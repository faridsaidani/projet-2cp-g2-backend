from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from config import Config
from flask_socketio import SocketIO
from flask_mail import Mail

db = SQLAlchemy()
bcrypt = Bcrypt()
socketio = SocketIO()  # SocketIO instance

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    bcrypt.init_app(app)
    socketio.init_app(app)  # Initialize SocketIO with the Flask app
   # Mail.init_app(app)

    from .Routes.appointmentRoute import appointmentRoute
    from .Routes.patientRoute import patientRoute
    from .Routes.blogsRoute import blogsRoute
    #from .Routes.callenderRoute import callenderRoute
    from .Routes.therapistRoute import therapistRoute
    #from .Routes.messageRoute import messageRoute
    #from .Routes.notificationRoute import notificationRoute
    from .Routes.adminRoute import adminRoute
    #from .Routes.contactRoute import contactRoute
    from .Routes.video_calls import video_call_route

    with app.app_context():
        db.create_all()

    app.register_blueprint(patientRoute)
    app.register_blueprint(therapistRoute)
    app.register_blueprint(appointmentRoute)
   # app.register_blueprint(notificationRoute)
    app.register_blueprint(blogsRoute)
    #app.register_blueprint(callenderRoute)
    #app.register_blueprint(messageRoute)
    app.register_blueprint(adminRoute)
    #app.register_blueprint(contactRoute)
    app.register_blueprint(video_call_route)  # Register video_call_route
    # ^ Don't forget to register your video_call_route blueprint here

    @app.route('/', methods=['GET'])
    def home():
        return jsonify({"hello": "world"})

    return app