from pymongo import MongoClient
client = MongoClient('mongodb+srv://manar414:manar695847@cluster0.u21vs.mongodb.net/?retryWrites=true&w=majority&tlsAllowInvalidCertificates=true')
# client = MongoClient('mongodb+srv://manar414:manar695847@cluster0.u21vs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

db = client['mydatabase']
collection = db['mycollection']

document = {"name": "Hana", "city": "alexandria"}
inserted_document = collection.insert_one(document)

print(f"mInserted Document ID: {inserted_document.inserted_id}")
client.close()