from flask import Blueprint,jsonify,request,session
from __main__ import db,bcrypt
from models import Therapist
from validate_email import validate_email
from functools import wraps

therapistRoute = Blueprint("therapistRoute",__name__,url_prefix='/therapist')

@therapistRoute.route('/register',methods=['POST'])
def register():
    data = request.get_json()
    password = data["password"]
    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
    # username email password image_file file
    new_therapist = Therapist(
        username = data["username"],
        email = data["email"],
        password = hashed_password,
        image_file = data["image_file"]
        )
    if not new_therapist.email:
        return jsonify({'error':'no email'})
    elif not new_therapist.username :
        return jsonify({'error':'no username'})
    elif not new_therapist.password:
        return jsonify({'error':'no password'})
    elif not validate_email(new_therapist.email):
        return jsonify({'error': 'Invalid email address'})

    elif Therapist.query.filter(Therapist.email == new_therapist.email).first() is not None:
        return jsonify({'error': 'Email already exists'})

    elif Therapist.query.filter(Therapist.username == Therapist.username).first() is not None:
        return jsonify({'error': 'Username already exists'})
    else:
        db.session.add(new_therapist)
        db.session.commit()
    return jsonify({'message': 'success'})

@therapistRoute.route('/login')
def login():
    data = request.get_json()

    therapist = Therapist.query.filtredby(email=data.get("email"))
    if therapist and bcrypt.check_password_hash(therapist.password,data.get("password")):
        session['logged_in'] = True
        session['therapist_id'] = therapist.therapist_id
        return jsonify({"message":"logged in"})
    elif not therapist:
        jsonify({"error":"no such email"})
    else:
        jsonify({"error":"wrong password "})

def login_required(f):
    @wraps(f)
    def decorated_function(*args,**kwargs):
        if 'logged_in' not in session :
            return jsonify({"error":"you are not logged in"})
        return f(*args,**kwargs)
    return decorated_function
        
    
@therapistRoute.route('/logout',methods = ['POST'])
@login_required
def logout():
    session.pop('logged_in',None)
    session.pop('therapist_id',None)
    return jsonify({"message":"logged out"})
    
