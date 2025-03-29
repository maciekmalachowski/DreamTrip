#!/usr/bin/env python
import sys
import warnings
from datetime import datetime
from app.src.app.crew import TripAgents

warnings.filterwarnings("ignore", category=SyntaxWarning, module="pysbd")

def run(inputs):
    """
    Run the crew.
    """
    try:
        result = TripAgents().crew().kickoff(inputs=inputs)
        return {"response": result.raw}
    except Exception as e:
        raise Exception(f"An error occurred while running the crew: {e}")

def test():
    """
    Test the crew execution and returns the results.
    """
    inputs = {
        'destination': 'Naples',
        'startDate': str(datetime.now().year),
        'endDate': str(datetime.now().year),
        'dateRange': '7',
        'budget': '1000 euro',
        'travelerType': 'solo traveler'
    }
    
    try:
        TripAgents().crew().test(n_iterations=int(sys.argv[1]), openai_model_name=sys.argv[2], inputs=inputs)

    except Exception as e:
        raise Exception(f"An error occurred while testing the crew: {e}")