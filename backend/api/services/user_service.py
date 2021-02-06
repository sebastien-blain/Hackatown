import uuid
from werkzeug.security import generate_password_hash
from api.models.user_model import User
from helpers.response import response


class Service:
    def parse_user_sensitive_data(self, user):
        return {
            'fname': user['fname'] if 'fname' in user else None,
            'lname': user['lname'] if 'lname' in user else None,
            'email': user['email'] if 'email' in user else None,
        }

    def persist_user_to_mongo(self, user):
        try:
            user.save()
            return True
        except RuntimeError:
            return False

    def delete_user_from_mongo(self, user):
        try:
            user.delete()
            return True
        except RuntimeError:
            return False

    def create_new_user(self, email, password, data):
        user = User.find_user_by(email=email)
        if user:
            return response(409, 'User already exist')

        hashed_password = generate_password_hash(password, method='sha256')
        new_user = User(
            userId=str(uuid.uuid4()),
            fname=data['fname'],
            lname=data['lname'],
            email=email,
            password=hashed_password,
        )
        if self.persist_user_to_mongo(new_user):
            return response(200, 'User has been created')
        return response(500, 'User could not be created')

    def login_user(self, email, password):
        user = User.find_user_by(email=email)
        if user is None:
            return response(404, 'User not found')