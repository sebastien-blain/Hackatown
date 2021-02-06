from flask import request
from helpers.logger import Logger

info_status_list = [200, 201, 202, 203, 204, 205, 206, 207, 208, 226, 308]


def add_logger(app):
    @app.after_request
    def hook_after_request(response):
        route = request.path

        logging_method = Logger.error if response.status_code not in info_status_list else Logger.info
        Logger.debug(request)
        try:
            req_body = request.get_json()
        except Exception:
            req_body = 'No JSON in request'
        res_body = response.get_data().decode('utf-8').rstrip()
        logging_method(
            message='\nRequest: {}\nResponse: {}'.format(req_body, res_body),
            route=route,
            method=request.method,
            res_code=response.status_code
        )
        return response
