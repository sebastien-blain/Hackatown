import functools
from flask import request
from helpers.response import response


def contains_and_not_null(fields):
    def decorator(f):
        @functools.wraps(f)
        def wrapper(*args, **kwargs):
            body = request.get_json()
            for field in fields:
                if field not in body:
                    return response(400, "Field '{}' is missing".format(field))
                if body[field] is None or body[field] == '':
                    return response(400, "Field '{}' is empty".format(field))
            return f(*args, **kwargs)
        return wrapper
    return decorator
