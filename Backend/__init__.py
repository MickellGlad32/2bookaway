import os
from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy


def create_app(test_config=None):
    # create and configure the app here
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='dev',
        DATABASE=os.path.join(app.instance_path, 'bookaway.psql'),
    )
    
    if test_config is None:
        # load instance of config, file if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
        
    try:
        # make sure the instance folder exists
        os.makedirs(app.instance_path)
    except OSError:
        pass

    # app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://scott:tiger@localhost/mydatabase'
    # app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    # db = SQLAlchemy()


    @app.route("/")
    def my_index():
        return jsonify(['Hello, World'])






if __name__ == "__main__":
    app.run(debug=True)