from mongoengine import connect
from config import config

mongo_config = config['database']

db_connection = connect(db=mongo_config['db_name'], host=mongo_config['uri'])
