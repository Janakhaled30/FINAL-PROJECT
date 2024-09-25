from flask import Flask, request, jsonify
from pymongo import MongoClient
from flask_cors import CORS

app = Flask(__name__)
CORS(app)



client = MongoClient('mongodb+srv://manar414:manar695847@cluster0.u21vs.mongodb.net/?retryWrites=true&w=majority&tlsAllowInvalidCertificates=true')

db = client['mydatabase']
collection = db['Places']



@app.route ("/Family", methods=["POST"])
def filter():
    
    kids=request.args.get("kids")
    outdoor=request.args.get("outdoor")



    places=list(collection.find({"kids":kids}))


    if places:
       for place in places:
             place.pop('_id',None)
       return jsonify(places),200
    else:
        return("not found")






@app.route("/weather",methods=["POST"])
def weather_FN():
    weatherVar=request.args.get("weather")
    query={"weather":{"$in":["All",weatherVar]}}


    places=list(collection.find(query))



    if places:
       for place in places:
             place.pop('_id',None)
       return jsonify(places),200
    else:
        return("not found")





@app.route("/gem" , methods= ["POST"])
def gem():
    GEM=request.args.get("hidden_gem")
    
    
    hidden=list(collection.find({"hidden_gem":GEM}))



    if hidden:
       for place in hidden:
             place.pop('_id',None)
       return jsonify(hidden),200
    else:
        return("not found")  



@app.route('/sign up', methods=['POST'])
def add_document():
    # Get the JSON data from the request
    data = request.json

    # Insert the document into the collection
    result = collection.insert_one(data)

    # Return the inserted document's ID
    return jsonify({"inserted_id": str(result.inserted_id)})


@app.route('/log_in', methods=['POST'])
def search():
    title =request.args.get("title")



    user=collection.find_one({"title":title})

    if user:
        return jsonify({"message":"user found"}), 200
    else:
        return jsonify({"message":"user not found"})



if __name__ == "_main_":
    app.run(debug=True)
