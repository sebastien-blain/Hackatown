import os

defaults = {
    'app_name': os.getenv('APP_NAME', 'hackatown'),
    'log_level': os.getenv('LOG_LEVEL', 'PERF'),
    'debug': os.getenv('DEBUG', 'True'),
    'host': os.getenv('HOST', '127.0.0.1'),
    'secret_key': os.getenv('SECRET_KEY', 'Real Secret Key'),
    'database': {
        'db_name': os.getenv('MONGO_NAME', 'hackatown'),
        'uri': os.getenv('MONGO_URI', 'mongodb+srv://admin:admin@hackatown.rxpdo.mongodb.net/hackatown?retryWrites=true&w=majority'),
    }
}

config = defaults
