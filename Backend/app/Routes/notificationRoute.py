from flask import jsonify,Blueprint,request
from ..models import Notification
from ..create_app import db
import datetime 

notificationRoute = Blueprint('notificationRoute', __name__,url_prefix='/notification')


# get all notifications for user ggg
# done
@notificationRoute.route('/user_notifications/<int:user_id>/<string:user_type>', methods=['GET'])
def get_user_notifications(user_id, user_type):
    return Notification.query.filter_by(recipient_id=user_id, recipient_type=user_type).all()

# change that the user read the function
# done
@notificationRoute.route('/read/<int:id>', methods=['GET'])
def mark_notification_as_read(id):
    notification = Notification.query.get(id)
    if notification:
        notification.read = True
        db.session.commit()
        return jsonify({'message':"read"})
    return jsonify({'err':"there is an error"})

# delete a notification
@notificationRoute.route('/delete_notification/<int:notification_id>', methods=['DELETE'])
def delete_notification(notification_id):
    notification = Notification.query.get(notification_id).first()
    if notification:
        db.session.delete(notification)
        db.session.commit()
        return jsonify({'message':"deleted"})
    return jsonify({'err':"do not exist"})

# get all notification for one user
# done
@notificationRoute.route('/getall/<int:id>/<string:user_type>', methods=['GET'])
def get_notifications(id,user_type):
    notifications = Notification.query.filter_by(recipient_id = id, recipient_type=user_type).all()
    notification_list = [
        {
        'id': notification.id,
        'message': notification.content, 
        'timestamp': notification.timestamp, 
        'read': notification.read
        } 
        for notification in notifications]
    return jsonify(notification_list)

# create
# done
@notificationRoute.route('/add', methods=['POST'])
def add_notification():
    data = request.form
    new_notification = Notification(
        recipient_type = data['recipient_type'] ,
        recipient_id = data['recipient_id'] ,
        content = data['content'] ,
        timestamp = datetime.datetime.now(),
        read =False
    )
    if not new_notification.recipient_type :
        return jsonify({"err":"recipient_type required"})
    elif not new_notification.recipient_id:
        return jsonify({"err":"recipient required"})
    elif not new_notification.content:
        return jsonify({"err":"content required"})
    else :
        db.session.add(new_notification)
        db.session.commit()
        return jsonify({'message':'added success'})
    
# unread notifications
# done
@notificationRoute.route('/unread/<int:user_id>/<string:user_type>', methods=['GET'])
def count_unread_notifications(user_id, user_type):
    number = Notification.query.filter_by(recipient_id=user_id, recipient_type=user_type, read=False).count()
    return jsonify(number)
