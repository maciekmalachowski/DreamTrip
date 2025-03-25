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
    # inputs = {
    #     'city': 'Gdansk',
    #     'date': str(datetime.now().year),
    #     'date_range': '3',
    #     'budget': '100 euro',
    #     'group_type': 'solo traveler'
    # }
    
    try:
        result = TripAgents().crew().kickoff(inputs=inputs)
        # print(result)
    except Exception as e:
        raise Exception(f"An error occurred while running the crew: {e}")

def test():
    """
    Test the crew execution and returns the results.
    """
    inputs = {
        'city': 'Naples',
        'date': str(datetime.now().year),
        'date_range': '7',
        'budget': '1000 euro',
        'group_type': 'solo traveler'
    }
    try:
        TripAgents().crew().test(n_iterations=int(sys.argv[1]), openai_model_name=sys.argv[2], inputs=inputs)

    except Exception as e:
        raise Exception(f"An error occurred while testing the crew: {e}")