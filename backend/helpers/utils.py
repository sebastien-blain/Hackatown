def contains_and_not_null(fields, data):
    for field in fields:
        if field not in data:
            return False
        if data[field] is None:
            return False
    return True


def contains_and_not_empty(fields, data):
    for field in fields:
        if field not in data:
            return False
        if data[field] is None or data[field] == '':
            return False
    return True
