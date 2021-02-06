import sys
from time import strftime, gmtime
from config import config

LOG_LEVEL_MAP = {
    'ERROR': 1,
    'WARNING': 2,
    'INFO': 3,
    'DEBUG': 4,
    'PERF': 5
}


class Logger:
    @staticmethod
    def log(message, level, route=None, method=None, res_code=None):

        if LOG_LEVEL_MAP[config['log_level']] < LOG_LEVEL_MAP[level]:
            return

        entry = {
            'date': strftime("%Y-%m-%d %H:%M:%S %z", gmtime()),
            'level': level,
            'message': message,
            'route': route,
            'method': method,
            'res_code': res_code
        }

        log = "[{date}] [{level}] [{method} {res_code}] [{route}] {message}".format(**entry)

        sys.stdout.write(log + '\n')


    @staticmethod
    def error(message, route=None, method=None, res_code=None):
        Logger.log(message=message, level='ERROR', route=route, method=method, res_code=res_code)

    @staticmethod
    def warning(message, route=None, method=None, res_code=None):
        Logger.log(message=message, level='WARNING', route=route, method=method, res_code=res_code)

    @staticmethod
    def info(message, route=None, method=None, res_code=None):
        Logger.log(message=message, level='INFO', route=route, method=method, res_code=res_code)

    @staticmethod
    def debug(message, route=None, method=None, res_code=None):
        Logger.log(message=message, level='DEBUG', route=route, method=method, res_code=res_code)

    @staticmethod
    def perf(message, route=None, method=None, res_code=None):
        Logger.log(message=message, level='PERF', route=route, method=method, res_code=res_code)
