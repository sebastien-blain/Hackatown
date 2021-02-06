from flask import jsonify, make_response


def response(status_code, msg=None):
    if status_code == 200:
        msg = msg if msg is not None else ''
    elif status_code == 400:
        msg = msg if msg is not None else 'Bad Request'
    elif status_code == 401:
        msg = msg if msg is not None else 'Unauthorized'
    elif status_code == 403:
        msg = msg if msg is not None else 'Forbidden'
    elif status_code == 404:
        msg = msg if msg is not None else 'Not Found'
    elif status_code == 409:
        msg = msg if msg is not None else 'Conflict'
    elif status_code == 500:
        msg = msg if msg is not None else 'Internal Server Error'
    elif status_code == 501:
        msg = msg if msg is not None else 'Not Implemented'
    else:
        msg = msg if msg is not None else ''
    return make_response(jsonify(msg), status_code)
