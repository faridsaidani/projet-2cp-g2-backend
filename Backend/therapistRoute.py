from __main__ import db,bcrypt
from flask import Blueprint, request, jsonify, session
from models import Therapist
from validate_email import validate_email

# the functions for therapist
# register log_in log_out update delete get_one get_all

therapistRoute = Blueprint('therapistRoute', __name__,url_prefix='/therapist')


