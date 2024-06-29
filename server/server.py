import os

from flask import Flask, jsonify, request
from flask_cors import CORS

import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore


app = Flask(__name__)
CORS(app)
CURR_DIR = os.path.dirname(os.path.realpath(__file__))
cred = credentials.Certificate(str(CURR_DIR)+'\\..\\credentials.json')
firebase_admin.initialize_app(cred)

db = firestore.client()

@app.route('/add_user', methods=['POST'])
def add_user():
    try:
        data = request.get_json()
        
        full_name = data['fullName']
        age = data['age']
        email = data['email']
        password = data['pass']
        is_driver = data['isDriver']
        driving_xp = data['drivingXp']
        license_image = data['licenseImage']
        vehicle_type = data['vehicleType']
        vehicle_number = data['vehicleNumber']
        
        # Add user data to Firestore
        user_ref = db.collection('users').document(email)
        user_ref.set({
            'fullName': full_name,
            'age': age,
            'email': email,
            'pass': password,
            'isDriver': is_driver,
            'drivingXp': driving_xp,
            'licenseImage': license_image,
            'vehicleType': vehicle_type,
            'vehicleNumber': vehicle_number
        })
        
        return jsonify({'status': 'success', 'message': 'User added successfully'}), 201
    
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 500
        
        

if __name__ == "__main__":
    app.run(debug=True)