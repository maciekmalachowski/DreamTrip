from crewai import Agent, Crew, Process, Task
from crewai.project import CrewBase, agent, crew, task
from crewai_tools import SerperDevTool

@CrewBase
class TripAgents():
    """Trip crew"""

    agents_config = 'config/agents.yaml'
    tasks_config = 'config/tasks.yaml'

    @agent
    def weather_researcher(self) -> Agent:
        return Agent(
            config=self.agents_config['weather_researcher'],
            verbose=False,
            tools=[
            SerperDevTool(),
            ]
        )
    
    @agent
    def local_expert(self) -> Agent:
        return Agent(
            config=self.agents_config['local_expert'],
            verbose=False,
            tools=[
            SerperDevTool(),
            ]
        )

    @agent
    def travel_planner(self) -> Agent:
        return Agent(
            config=self.agents_config['travel_planner'],
            verbose=False,
            tools=[
            SerperDevTool(),
            ]
        )

    @task
    def weather_researcher_task(self) -> Task:
        return Task(
            config=self.tasks_config['weather_researcher_task'],
        )

    @task
    def local_expert_task(self) -> Task:
        return Task(
            config=self.tasks_config['local_expert_task'],
        )
    
    @task
    def travel_planner_task(self) -> Task:
        return Task(
            config=self.tasks_config['travel_planner_task'],
        )

    @crew
    def crew(self) -> Crew:
        """Creates the App crew"""

        return Crew(
            agents=self.agents, # Automatically created by the @agent decorator
            tasks=self.tasks, # Automatically created by the @task decorator
            process=Process.sequential,
            verbose=False,
        )
