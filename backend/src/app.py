from flask import Flask, jsonify, send_from_directory
from data import loadData


app = Flask(__name__)

# Serve the Angular website as static assets
@app.route('/')
def serve_angular():
    return send_from_directory('../web/frontend', 'index.html')

# Serve other static assets
@app.route('/<path:filename>')
def serve_static(filename):
    return send_from_directory('../web/frontend', filename)


@app.route('/data', methods=['GET'])
def get_data():
    return jsonify(loadData())

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
