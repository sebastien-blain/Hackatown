from flask import Blueprint, request

from helpers.decorators import contains_and_not_null
from api.services.user_service import Service as UserService
from helpers.response import response

user_service = UserService()

user_routes = Blueprint('user_routes', __name__)


@user_routes.route('/create', methods=['POST'])
@contains_and_not_null(['fname', 'lname'])
def create_new_user():
    auth = request.authorization
    data = request.get_json()
    if auth is None or auth.username is None or auth.password is None:
        return response(401, 'Missing Authentication')
    return user_service.create_new_user(auth.username, auth.password, data)


@user_routes.route('/login', methods=['POST'])
def login_user():
    auth = request.authorization
    if auth is None or auth.username is None or auth.password is None:
        return response(401, 'Missing Authentication')
    return user_service.login_user(auth.username, auth.password)


