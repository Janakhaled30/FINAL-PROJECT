from flask import Flask, request, jsonify
from pymongo import MongoClient
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# MongoDB connection
client = MongoClient('mongodb+srv://manar414:manar695847@cluster0.u21vs.mongodb.net/?retryWrites=true&w=majority&tlsAllowInvalidCertificates=true')
db = client['mydatabase']
collection = db['Places']

# ////////////////////////////////////////////////////
@app.route("/Family", methods=["POST"])
def filter():
    # Get data from frontend    
    kids = request.args.get("kids")
    # outdoor=request.args.get("indoor_outdoor")
    # Search from the data in the database
    places = list(collection.find({ "kids": kids}))

    # Removing ObjectId and returning the data
    if places:
        for place in places:
            place.pop('_id', None)
        return jsonify(places), 200
    else:
        return "not found"


#///////////////////////////////////////////
@app.route("/cafe", methods=['GET'])
def get_cafe():
    # Gather all data
    data = list(collection.find({"cafe_restaurant":"true"}))

    # Removing ObjectId and returning the data
    if data:
        for info in data:
            info.pop('_id', None)
        return jsonify(data), 200
    else:
        return "data not found"
#///////////////////////////////////////////
@app.route("/sports", methods=['GET'])
def get_sports():
    # Gather all data
    data = list(collection.find({"sports":"true"}))

    # Removing ObjectId and returning the data
    if data:
        for info in data:
            info.pop('_id', None)
        return jsonify(data), 200
    else:
        return "data not found"
#///////////////////////////////////////////
@app.route("/working_spaces", methods=['GET'])
def get_working_spaces():
    # Gather all data
    data = list(collection.find({"working_space":"true"}))


    # Removing ObjectId and returning the data
    if data:
        for info in data:
            info.pop('_id', None)
        return jsonify(data), 200
    else:
        return "data not found"
# ////////////////////////////////////////////////////
@app.route("/weather", methods=["POST"])
def weather_DEF():
    # Get data from frontend
    weatherVar = request.args.get("weather")

    # Create a query to search in two fields at once
    query = {"weather": {"$in": ["All", weatherVar]}}

    # Search using the query in the database
    places = list(collection.find(query))

    # Removing ObjectId and returning the data
    if places:
        for place in places:
            place.pop('_id', None)
        return jsonify(places), 200
    else:
        return "not found"

# //////////////////////////////////////////////////
@app.route("/gem", methods=["POST"])
def gem():
    # Get data from frontend
    GEM = request.args.get("hidden_gem")
    
    # Search from the data in the database
    hidden = list(collection.find({"hidden_gem": GEM}))

    # Removing ObjectId and returning the data
    if hidden:
        for place in hidden:
            place.pop('_id', None)
        return jsonify(hidden), 200
    else:
        return "not found"

# ///////////////////////////////////////////////
@app.route("/history", methods=["POST"])
def history():
    # Get data from frontend
    PAST = request.args.get("historical")

    # Search from the data in the database
    present = list(collection.find({"historical": PAST}))

    # Removing ObjectId and returning the data
    if present:
        for time in present:
            time.pop('_id', None)
        return jsonify(present), 200
    else:
        return "not found"

# ///////////////////////////////////////////////////
@app.route("/name", methods=["POST"])
def name():
    # Get data from frontend
    name = request.args.get("name")

    # Search from the data in the database
    place_name = list(collection.find({"name": name}))

    # Removing ObjectId and returning the data
    if place_name:
        for NAME in place_name:
            NAME.pop('_id', None)
        return jsonify(place_name), 200
    else:
        return "not found"

# ///////////////////////////////////////////////////////////
@app.route("/get_data", methods=['GET'])
def get():
    # Gather all data
    data = list(collection.find({}))

    # Removing ObjectId and returning the data
    if data:
        for info in data:
            info.pop('_id', None)
        return jsonify(data), 200
    else:
        return "data not found"

# ///////////////////////////////////////////////
@app.route('/sign_up', methods=['POST'])
def add_document():
    # Get the JSON data from the request
    data = request.json

    # Insert the document into the collection
    result = collection.insert_one(data)

    if result:
        return jsonify({"message": "signed in"}), 200
    else:
        return jsonify({"message": "info is incomplete"})

# /////////////////////////////////////////////////////////////
@app.route('/log_in', methods=['POST'])
def search():
    # Get data from frontend
    title = request.args.get("title")

    # Search from the data in the database
    user = collection.find_one({"title": title})

    # Returning data as JSON
    if user:
        return jsonify({"message": "user found"}), 200
    else:
        return jsonify({"message": "user not found"})

if __name__ == "__main__":
    app.run(debug=True)
