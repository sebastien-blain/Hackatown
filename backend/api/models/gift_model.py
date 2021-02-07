from mongoengine import *
from helpers.mongo.mongo_helper import mongo_to_dict


class Gift(DynamicDocument):
    id = IntField(required=True, unique=True)
    Name = StringField(required=True)
    Type = StringField()
    Description = StringField()
    Image = StringField()
    Price = DecimalField()
    Link = StringField()
    tags = ListField(StringField())
    Liked = BooleanField()

    meta = {
        'collection': 'gifts',
    }

    def save(self, *args, **kwargs):
        return super(Gift, self).save(*args, **kwargs)

    @staticmethod
    def get_gifts_by_all(max_price, types, tags):
        gifts = Gift.objects(Price__lte=max_price, Type__in=types)
        return gifts

    @staticmethod
    def get_gifts_by_tags_null(max_price, types):
        gifts = Gift.objects(Price__lte=max_price, Type__in=types)
        return gifts

    @staticmethod
    def get_gifts_by_types_null(max_price, tags):
        gifts = Gift.objects(Price__lte=max_price, tags__in=tags)
        return gifts

    @staticmethod
    def get_gifts_by_price(max_price):
        gifts = Gift.objects(Price__lte=max_price)
        return gifts

    @staticmethod
    def update_gift(id, tags):
        Gift.objects(id=id).update(set__tags=tags)

    @staticmethod
    def get_liked_gifts():
        gifts = Gift.objects(Liked=True)
        return gifts

    @staticmethod
    def like_gift(id, liked):
        return Gift.objects(id=id).update(set__Liked=liked)

    def to_dict(self):
        return mongo_to_dict(self, [])
