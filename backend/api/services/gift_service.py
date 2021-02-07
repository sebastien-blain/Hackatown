import uuid
from werkzeug.security import generate_password_hash
from api.models.gift_model import Gift
from helpers.response import response


class Service:
    def add_tags(self, id, tags):
        Gift.update_gift(id, tags)

    def get_gifts(self, price, types, tags):

        if types == [] and tags == []:
            gifts = Gift.get_gifts_by_price(price)
        elif not types:
            gifts = Gift.get_gifts_by_types_null(price, tags)
        elif not tags:
            gifts = Gift.get_gifts_by_tags_null(price, types)
        else:
            gifts = Gift.get_gifts_by_all(price, types, tags)

        gifts_list = [gift.to_dict() for gift in gifts]

        res = {'num': len(gifts_list), 'gifts': gifts_list}
        return response(200, res)

    def like_gift(self, id, liked):
        return response(200, Gift.like_gift(id, liked))

    def get_liked_gifts(self):
        gifts = Gift.get_liked_gifts()
        gifts_list = [gift.to_dict() for gift in gifts]
        res = {'num': len(gifts_list), 'gifts': gifts_list}
        return response(200, res)
