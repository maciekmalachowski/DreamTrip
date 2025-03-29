from flask import Flask, request, jsonify
from flask_cors import CORS
from app.src.app.main import run  # Import run function

app = Flask(__name__)
CORS(app)

@app.route('/plan-trip', methods=['POST'])
def plan_trip():
    """
    Flask endpoint to generate a trip itinerary.
    """
    inputs = request.get_json()
    try:
        result = run(inputs)  # Call run() function to get text result
        return jsonify(result)  # Return JSON response
    except Exception as e:
        return jsonify({"error": str(e)}), 500
