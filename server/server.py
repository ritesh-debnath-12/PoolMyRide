import os
from flask import Flask, jsonify, request
from flask_cors import CORS

import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

app = Flask(__name__)
CORS(app)
CURR_DIR = os.path.dirname(os.path.realpath(__file__))
cred = credentials.Certificate(str(CURR_DIR) + '\\..\\credentials.json')
firebase_admin.initialize_app(cred)

db = firestore.client()

@app.route('/add_user', methods=['POST'])
def add_user():
    try:
        app.logger.info("Processing information...")
        data = request.get_json()
        app.logger.info("Data: {}".format(data))
        full_name = (data['fullName'] if data['fullName'] else "Guest")
        age = (data['age'] if data['age'] else 0)
        email = (data['email'] if data['email'] else "guest@mail")
        password = (data['pass'] if data['pass'] else "guest")
        driving_xp = (data['drivingXp'] if data['drivingXp'] else 0)
        license_number = (data['licenseNumber'] if data['licenseNumber'] else 0)
        if(driving_xp and license_number):
            is_driver = "True"
        else:
            is_driver = "False"
        vehicle_type = (data['vehicleType'] if data['vehicleType'] else "2-wheeler")
        vehicle_number = (data['vehicleNumber'] if data['vehicleNumber'] else 0)
        
        # Add user data to Firestore
        user_ref = db.collection('users').document(email)
        user_ref.set({
            'fullName': full_name,
            'age': age,
            'email': email,
            'pass': password,
            'isDriver': is_driver,
            'drivingXp': driving_xp,
            'licenseNumber': license_number,
            'vehicleType': vehicle_type,
            'vehicleNumber': vehicle_number
        })
        
        return jsonify({'status': 'success', 'message': 'User added successfully'}), 201
    
    except Exception as e:
        app.logger.error("Error: {}".format(str(e)))
        return jsonify({'status': 'error', 'message': str(e)}), 500
        
        

if __name__ == "__main__":
    app.run(debug=True)