from flask import Flask, request, jsonify
from pymongo import MongoClient
from bson.objectid import ObjectId

app = Flask(__name__)

# Replace the connection string with your MongoDB connection string
client = MongoClient("mongodb://localhost:27017/")
db = client["sign"]
collection = db["users"]

@app.route('/add_document', methods=['POST'])
def add_document():
    # Get the JSON data from the request
    data = request.json

    # Insert the document into the collection
    result = collection.insert_one(data)

    # Return the inserted document's ID
    return jsonify({"inserted_id": str(result.inserted_id)})


@app.route('/search', methods=['POST'])
def search():
    title =request.args.get("title")



    user=collection.find_one({"title":title})

    if user:
        return jsonify({"message":"user found"}), 200
    else:
        return jsonify({"message":"user not found"})




if __name__ == "__main__":
    app.run(debug=True)



