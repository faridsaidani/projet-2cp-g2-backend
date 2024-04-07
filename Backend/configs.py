import os

class Config:
    # Define your configuration settings here
    SECRET_KEY = os.urandom(20)
    SQLALCHEMY_DATABASE_URI = 'mysql://root:''@localhost/mydb'
    SQLALCHEMY_TRACK_MODIFICATIONS = False