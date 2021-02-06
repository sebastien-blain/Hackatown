import datetime
from mongoengine import *
from helpers.mongo.mongo_helper import mongo_to_dict

unique_fields = ['email']


class User(DynamicDocument):
    userId = StringField(required=True, unique=True)

    fname = StringField(required=True)
    lname = StringField(required=True)
    email = EmailField(required=True, unique=True)
    password = StringField(required=True)
    dateCreated = DateTimeField(default=datetime.datetime.utcnow())
    lastUpdated = DateTimeField(default=datetime.datetime.utcnow())
    meta = {
        'collection': 'users',
    }

    def save(self, *args, **kwargs):
        self.lastUpdated = datetime.datetime.utcnow()
        return super(User, self).save(*args, **kwargs)

    @staticmethod
    def get_user_from_user_id(user_id):
        existing = User.objects(userId=user_id).first()
        return existing

    @staticmethod
    def find_user_by(**payload):
        query = dict()
        for field in unique_fields:
            query[field] = payload[field]

        return User.objects(**query).first()

    @staticmethod
    def find_all_users_by(**payload):
        query = dict()
        for field in payload:
            query[field] = payload[field]
        existing = User.objects(**query)
        return existing

    def to_dict(self):
        return mongo_to_dict(self, [])
