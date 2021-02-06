from flask import Flask
from flask_cors import CORS
from middlewares.error_handler import ErrorHandler
from middlewares.logger_handler import add_logger
from helpers.mongo.mongo_setup import db_connection
from api.controllers.user_controller import user_routes
from config import config


def create_app(application_name: str, middlewares=None):
    app = Flask(application_name, instance_relative_config=False)

    CORS(app)

    if middlewares is None:
        middlewares = [ErrorHandler.add_error_handler, add_logger]

    for middleware in middlewares:
        middleware(app)

    app.url_map.strict_slashes = False

    app.register_blueprint(user_routes, url_prefix='/users')

    @app.route('/')
    def root():
        return 'SUPREME GIFT FINDER IS ON!!'

    root()
    return app


if __name__ == '__main__':
    app = create_app('hackatown')
    app.run(debug=config['debug'], host=config['host'])
