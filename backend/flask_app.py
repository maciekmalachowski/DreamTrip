import re
from flask import Flask, request, jsonify
from flask_cors import CORS
from app.src.app.main import run  # Import run function

app = Flask(__name__)
CORS(app)

def parse_itinerary(result_text):
    """
    Converts raw itinerary text into structured JSON.
    Dynamically extracts destination, traveler type, budget, and total cost.
    """
    days = []
    total_cost = 0
    destination = None
    budget = None
    traveler_type = None

    lines = result_text.split("\n")
    print(lines)
    current_day = None

    for line in lines:
        if "**" in line and "Itinerary for" in line:  # Extract header info
            match = re.search(r"\*\*(.*?) Itinerary for (.*?) with a \$(\d+) Budget\*\*", line)
            if match:
                traveler_type = match.group(1).strip()
                destination = match.group(2).strip()
                budget = int(match.group(3))

        elif line.startswith("**Day"):  # Identify new day
            if current_day:
                days.append(current_day)  # Save previous day

            day_number = int(line.split(" ")[1].replace(":", ""))
            current_day = {"day": day_number, "activities": []}
        
        elif line.startswith("- "):  # Activity line
            current_day["activities"].append(line[2:])

        elif "Total Cost:" in line:  # Extract total trip cost
            cost_match = re.search(r"Total Cost:\s*\$(\d+)", line)
            if cost_match:
                total_cost = int(cost_match.group(1))

    if current_day:
        days.append(current_day)  # Add last day

    return {
        "destination": destination,
        "travelerType": traveler_type,
        "budget": budget,
        "totalCost": total_cost,
        "days": days,
    }

@app.route('/plan-trip', methods=['POST', 'GET'])
def plan_trip():
    """
    Flask endpoint to generate a trip itinerary.
    """
    inputs = request.get_json()

    try:
        raw_result = run(inputs)  # Call run() function to get text result
        structured_result = parse_itinerary(raw_result)  # Convert text to JSON
        return jsonify(structured_result)  # Return JSON response
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
