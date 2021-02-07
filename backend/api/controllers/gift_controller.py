from flask import Blueprint, request

from helpers.decorators import contains_and_not_null
from api.services.gift_service import Service as GiftService
from helpers.response import response

gift_service = GiftService()

gift_routes = Blueprint('gifts_routes', __name__)


@gift_routes.route('/', methods=['POST'])
def get_gifts():
    data = request.get_json()
    print(data)
    return gift_service.get_gifts(data['price'], data['types'], data['tags'])


@gift_routes.route('/like', methods=['POST'])
def like_gift():
    data = request.get_json()
    return gift_service.like_gift(data['id'], data['liked'])


@gift_routes.route('/like', methods=['GET'])
def get_liked_gift():
    return gift_service.get_liked_gifts()


@gift_routes.route('/add', methods=['POST'])
def add_tags():
    data = request.get_json()
    print(data)
    x = gift_service.add_tags(data['id'], data['tags'])
    return response(200, x)
