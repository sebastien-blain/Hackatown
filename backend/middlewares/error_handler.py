import traceback
from helpers.logger import Logger


class ErrorHandler():
    @staticmethod
    def get_error_number(string):
        try:
            return int(string[:3])
        except:
            return 500

    @staticmethod
    def add_error_handler(app) -> None:
        @app.errorhandler(Exception)
        def handle_error(e: Exception):
            error_number = ErrorHandler.get_error_number(str(e))
            error_message = str(e)
            if type(e).__name__ == 'ValidationError':
                error_number = 400
            Logger.error(
                message={
                    'type': type(e).__name__,
                    'message': error_message,
                    'traceback': traceback.format_exc()
                }
            )
            return {
                       'error': {
                           'code': error_number,
                           'type': type(e).__name__,
                           'description': error_message,
                       }
                   }, error_number
