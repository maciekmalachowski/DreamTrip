from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow requests from React frontend

@app.route('/plan-trip', methods=['POST'])
def plan_trip():
    data = request.json  # Receive JSON data from React
    city = data.get("city")
    start_date = data.get("start_date")
    end_date = data.get("end_date")
    traveler_type = data.get("traveler_type")
    budget = data.get("budget")

    # Mock AI-generated travel plan
    trip_plan = {
        "destination": city,
        "start_date": start_date,
        "end_date": end_date,
        "traveler_type": traveler_type,
        "budget": budget,
        "itinerary": ["Day 1: Explore city center", "Day 2: Visit historical sites", "..."]
    }
    return jsonify(trip_plan)

if __name__ == '__main__':
    app.run(debug=True)
