<p align="center">
    <img src="frontend/public/logo.png" align="center" width="20%">
</p>
<p align="center"><h1 align="center">DREAMTRIP</h1></p>
<p align="center">
	<em>Crafting Your Perfect Journey, Seamlessly.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/maciekmalachowski/DreamTrip?style=for-the-badge&logo=opensourceinitiative&logoColor=white&color=008236" alt="license">
	<img src="https://img.shields.io/github/last-commit/maciekmalachowski/DreamTrip?style=for-the-badge&logo=git&logoColor=white&color=008236" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/maciekmalachowski/DreamTrip?style=for-the-badge&color=008236" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/maciekmalachowski/DreamTrip?style=for-the-badge&color=008236" alt="repo-language-count">
</p>
<p align="center">Built with the tools and technologies:</p>
<p align="center">
	<img src="https://img.shields.io/badge/ChatGPT-74aa9c?style=for-the-badge&logo=openai&logoColor=white" alt="Openai">
	<img src="https://img.shields.io/badge/Python-3776AB.svg?style=for-the-badge&logo=Python&logoColor=white" alt="Python">
	<img src="https://img.shields.io/badge/Flask-000000.svg?style=for-the-badge&logo=Flask&logoColor=white" alt="Flask">
  <br>
	<img src="https://img.shields.io/badge/React-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white" alt="TypeScript">
	<img src="https://img.shields.io/badge/Tailwind%20CSS-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind">
</p>
<br>


## 🔗 Table of Contents

- [📍 Overview](#-overview)
- [👾 Features](#-features)
- [📁 Project Structure](#-project-structure)
  - [📂 Project Index](#-project-index)
- [🚀 Getting Started](#-getting-started)
  - [☑️ Prerequisites](#-prerequisites)
  - [⚙️ Installation](#-installation)
  - [🤖 Usage](#🤖-usage)
- [🔰 Contributing](#-contributing)
- [🎗 License](#-license)

---

## 📍 Overview

**DreamTrip** is an AI-powered travel planning application that leverages a multi-agent architecture to generate personalized travel itineraries. It combines insights from weather analysis, local expertise, and logistical planning to deliver curated trips based on your preferences. The system uses a React + TypeScript frontend, and a Python backend powered by Flask and [CrewAI](https://github.com/joaomdmoura/crewAI).

---

## 👾 Features

| Feature | Description |
| ------: | ----------- |
| 🧠 **AI-Driven Itineraries** | DreamTrip uses the **OpenAI GPT-4o model** to generate highly personalized and context-aware travel plans. By analyzing input like destination, travel dates, budget, and traveler type, the AI delivers comprehensive, human-like trip suggestions. |
| 👥 **Multi-Agent Architecture** | Powered by the **CrewAI** library, the backend organizes logic into modular agents like `WeatherResearcher`, `LocalExpert`, and `TravelPlanner`. These agents collaborate autonomously to generate itineraries in a structured and efficient way. |
| 🧰 **Modern Tech Stack** | - **Frontend**: Built using **React**, styled with **Tailwind CSS**, and bundled with **Vite** for rapid development and hot module reloading. <br> - **Backend**: Implemented with **Flask**, which handles HTTP requests and coordinates the AI-driven planning workflow. |
| 🔗 **API Integration** | The frontend communicates with the backend via **Axios**, enabling seamless POST requests to trigger AI-driven itinerary creation and return formatted results. |
| 🔤 **Type-Safe Codebase** | The project uses **TypeScript** throughout the frontend for strict type-checking, better tooling, and improved maintainability of component-based architecture. |
| 🔄 **Responsive Interaction** | Form-based user input is collected via custom React components, passed to the backend, and dynamically rendered with Markdown formatting for clarity and rich display. |
| 🧩 **Modularity & Scalability** | The project’s architecture separates backend agents, tasks, and config files from the frontend UI components, allowing each part to scale independently and be tested in isolation. |

---

## 📁 Project Structure

```sh
└── DreamTrip/
    ├── LICENSE
    ├── README.md
    ├── backend
    │   ├── app
    │   │   ├── .gitignore
    │   │   ├── README.md
    │   │   ├── knowledge
    │   │   │   └── user_preference.txt
    │   │   ├── pyproject.toml
    │   │   ├── src
    │   │   │   └── app
    │   │   │       ├── __init__.py
    │   │   │       ├── config
    │   │   │       │   ├── tasks.yaml
    │   │   │       │   └── agents.yaml
    │   │   │       ├── crew.py
    │   │   │       ├── main.py
    │   │   │       └── tools
    │   │   └── uv.lock
    │   └── flask_app.py
    └── frontend
        ├── .gitignore
        ├── README.md
        ├── eslint.config.js
        ├── index.html
        ├── package-lock.json
        ├── package.json
        ├── postcss.config.js
        ├── public
        │   └── compass.png
        ├── src
        │   ├── App.css
        │   ├── App.tsx
        │   ├── components
        │   │   ├── Header.tsx
        │   │   ├── ItineraryResults.tsx
        │   │   ├── LoadingIndicator.tsx
        │   │   └── TravelForm.tsx
        │   ├── index.css
        │   ├── main.tsx
        │   ├── services
        │   │   └── api.ts
        │   └── vite-env.d.ts
        ├── tailwind.config.js
        ├── tsconfig.app.json
        ├── tsconfig.json
        ├── tsconfig.node.json
        └── vite.config.ts
```


### 📂 Project Index
<details open>
	<summary><b><code>DREAMTRIP/</code></b></summary>
	<details> <!-- __root__ Submodule -->
		<summary><b>__root__</b></summary>
		<blockquote>
			<table>
			</table>
		</blockquote>
	</details>
	<details> <!-- backend Submodule -->
		<summary><b>backend</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/maciekmalachowski/DreamTrip/blob/master/backend/flask_app.py'>flask_app.py</a></b></td>
				<td>- Backend/flask_app.py serves as the interface for the application, enabling the creation of trip itineraries through a Flask-based web service<br>- It defines an endpoint that processes POST requests to generate and return trip plans, handling exceptions by returning error messages in JSON format.</td>
			</tr>
			</table>
			<details>
				<summary><b>app</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/maciekmalachowski/DreamTrip/blob/master/backend/app/pyproject.toml'>pyproject.toml</a></b></td>
						<td>- Defines the configuration for the AI-powered travel planner application, specifying metadata such as the project name, version, and description<br>- It sets Python version requirements, lists dependencies necessary for the project, and outlines scripts for various operations like running, training, and testing the application<br>- Additionally, it configures the build system and integrates with the crewai tool for enhanced functionality.</td>
					</tr>
					</table>
					<details>
						<summary><b>knowledge</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/maciekmalachowski/DreamTrip/blob/master/backend/app/knowledge/user_preference.txt'>user_preference.txt</a></b></td>
								<td>- Stores and manages user-specific preferences and profile details, crucial for personalizing user experience within the application<br>- Located in the backend, it supports functionalities related to user settings and preferences, enhancing the system's ability to tailor services and recommendations based on individual user profiles and interests, particularly in the AI and technology domain.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>src</b></summary>
						<blockquote>
							<details>
								<summary><b>app</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/maciekmalachowski/DreamTrip/blob/master/backend/app/src/app/main.py'>main.py</a></b></td>
										<td>- Main.py serves as the operational core for initiating and testing the functionality of the TripAgents crew module within the backend architecture<br>- It facilitates the execution of travel planning processes, handling inputs to generate trip details and managing exceptions during the operation<br>- Additionally, it provides a testing framework to validate the crew's performance under specified conditions.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/maciekmalachowski/DreamTrip/blob/master/backend/app/src/app/crew.py'>crew.py</a></b></td>
										<td>- Defines and configures a set of agents and tasks within the TripAgents class to facilitate the operations of a travel planning application<br>- It establishes agents such as weather researcher, local expert, and travel planner, each equipped with specific tools and tasks, orchestrated in a sequential process to optimize trip planning activities.</td>
									</tr>
									</table>
									<details>
										<summary><b>config</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/maciekmalachowski/DreamTrip/blob/master/backend/app/src/app/config/tasks.yaml'>tasks.yaml</a></b></td>
												<td>- Defines task configurations for a travel planning application, specifying roles such as a weather researcher, local expert, and travel planner<br>- Each role is responsible for generating detailed, actionable outputs like weather reports, attraction recommendations, and comprehensive travel itineraries, enhancing the user's travel experience by providing tailored information based on specific inputs like destination, date range, and budget.</td>
											</tr>
											<tr>
												<td><b><a href='https://github.com/maciekmalachowski/DreamTrip/blob/master/backend/app/src/app/config/agents.yaml'>agents.yaml</a></b></td>
												<td>- Defines roles and objectives for three specialized agents within the application: a weather researcher providing detailed meteorological insights, a local expert offering tailored travel and cultural advice, and a travel planner designing personalized itineraries<br>- Each agent's role is crucial in delivering comprehensive, context-specific services to users, enhancing the overall functionality of the travel planning platform.</td>
											</tr>
											</table>
										</blockquote>
									</details>
								</blockquote>
							</details>
						</blockquote>
					</details>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<details> <!-- frontend Submodule -->
		<summary><b>frontend</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/maciekmalachowski/DreamTrip/blob/master/frontend/postcss.config.js'>postcss.config.js</a></b></td>
				<td>- Configures PostCSS to integrate Tailwind CSS and Autoprefixer into the frontend development workflow<br>- This setup enhances CSS management by automatically adding vendor prefixes and utilizing utility-first classes, ensuring style consistency and compatibility across different browsers within the project's frontend architecture.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/maciekmalachowski/DreamTrip/blob/master/frontend/tsconfig.node.json'>tsconfig.node.json</a></b></td>
				<td>- Configures TypeScript compiler options for the frontend's Node.js environment, focusing on strict type-checking and module resolution tailored for bundling<br>- It enhances code quality and maintainability by enforcing rules against unused variables, parameters, and unchecked import side effects, specifically including settings for the Vite configuration.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/maciekmalachowski/DreamTrip/blob/master/frontend/package-lock.json'>package-lock.json</a></b></td>
				<td>- The file `frontend/package-lock.json` serves a critical role in the management and consistency of dependencies within the frontend module of the project<br>- This file locks down the exact versions of the npm packages that the project depends on, ensuring that all environments use the same versions, thereby avoiding discrepancies and potential bugs related to version mismatches.

The dependencies listed in the file, such as React, Axios, and Tailwind CSS via Vite, indicate that the frontend is built using React and styled with Tailwind CSS, with Axios used for making HTTP requests<br>- This setup suggests a modern, interactive web application that likely relies on API calls for dynamic content.

Overall, this file is essential for maintaining the stability and reliability of the frontend's build process, contributing to the robust architecture of the entire codebase by ensuring that all developers and deployment environments operate with a consistent set of dependencies.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/maciekmalachowski/DreamTrip/blob/master/frontend/tsconfig.json'>tsconfig.json</a></b></td>
				<td>- Manages TypeScript configuration settings for the frontend module by referencing specific configurations for both application and node environments<br>- It ensures that the appropriate TypeScript settings are applied depending on the context in which the code is executed, thereby supporting modular development and maintenance within the project's architecture.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/maciekmalachowski/DreamTrip/blob/master/frontend/tailwind.config.js'>tailwind.config.js</a></b></td>
				<td>- Configures Tailwind CSS for the frontend, specifying which HTML and JavaScript files should utilize Tailwind's utility classes<br>- It sets up the basic theming structure, allowing for future extensions, and currently does not integrate any additional plugins<br>- This configuration is crucial for maintaining consistent styling across the frontend components of the application.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/maciekmalachowski/DreamTrip/blob/master/frontend/tsconfig.app.json'>tsconfig.app.json</a></b></td>
				<td>- Configures TypeScript compiler options for the frontend application, targeting modern JavaScript features and optimizing for React development<br>- It enforces strict type-checking and linting rules to maintain code quality, while excluding code generation to streamline the build process<br>- The configuration specifically includes the project's source directory for TypeScript compilation.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/maciekmalachowski/DreamTrip/blob/master/frontend/package.json'>package.json</a></b></td>
				<td>- Serves as the configuration backbone for the frontend module of the project, defining dependencies and scripts essential for development, building, and testing<br>- It supports the React framework integration with tools like Vite for efficient bundling and TailwindCSS for styling, ensuring a streamlined development environment and robust build processes for the frontend architecture.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/maciekmalachowski/DreamTrip/blob/master/frontend/vite.config.ts'>vite.config.ts</a></b></td>
				<td>- Configures the Vite build tool for the frontend application, specifically integrating React support through plugins<br>- It sets up the development environment to efficiently handle React components, enhancing the project's build performance and developer experience<br>- This configuration is crucial for streamlining the development process within the broader architecture of the web application.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/maciekmalachowski/DreamTrip/blob/master/frontend/index.html'>index.html</a></b></td>
				<td>- Serves as the entry point for the DreamTrip web application, initializing the user interface<br>- It sets up the HTML structure, incorporates essential metadata, links the favicon, and ensures responsiveness across devices<br>- The document also connects the main TypeScript application logic from `/src/main.tsx` to facilitate dynamic content rendering within the web environment.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/maciekmalachowski/DreamTrip/blob/master/frontend/eslint.config.js'>eslint.config.js</a></b></td>
				<td>- Configures ESLint for the frontend, integrating TypeScript and React specific rules to ensure code quality and consistency<br>- It sets up linting for TypeScript files, incorporates global browser settings, and applies recommended configurations for React hooks and component export practices<br>- This setup helps maintain clean and efficient code across the frontend development environment.</td>
			</tr>
			</table>
			<details>
				<summary><b>src</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/maciekmalachowski/DreamTrip/blob/master/frontend/src/main.tsx'>main.tsx</a></b></td>
						<td>- Initializes the React application by setting up the root component within a strict mode context<br>- It imports essential styles and the main App component, then mounts it to the DOM<br>- This setup ensures a robust, error-checked environment for the application's user interface, serving as the entry point for the frontend architecture.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/maciekmalachowski/DreamTrip/blob/master/frontend/src/index.css'>index.css</a></b></td>
						<td>- Integrates Tailwind CSS into the frontend architecture, establishing foundational styles, component-level designs, and utility classes for responsive layout management<br>- It also introduces custom animations and sets a global font and background color, ensuring a consistent visual experience across the web application<br>- This CSS file is pivotal for the aesthetic and functional styling of the user interface.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/maciekmalachowski/DreamTrip/blob/master/frontend/src/App.css'>App.css</a></b></td>
						<td>- Frontend/src/App.css is responsible for defining the visual style and layout of the user interface in the application<br>- It ensures a consistent and appealing aesthetic across different components and pages, enhancing user experience and interaction<br>- This CSS file plays a crucial role in maintaining the design integrity throughout the frontend architecture.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/maciekmalachowski/DreamTrip/blob/master/frontend/src/App.tsx'>App.tsx</a></b></td>
						<td>- App.tsx serves as the primary user interface component in the frontend architecture, managing the travel planning process<br>- It integrates user inputs through TravelForm, displays loading states, handles API interactions for trip planning, and presents results or errors via ItineraryResults and dynamic messages, enhancing user experience and interaction efficiency.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/maciekmalachowski/DreamTrip/blob/master/frontend/src/vite-env.d.ts'>vite-env.d.ts</a></b></td>
						<td>- Enables seamless integration of Vite tooling within the project's frontend development environment<br>- By referencing Vite's client types, it ensures that TypeScript can correctly recognize and utilize Vite-specific features, enhancing the development experience with improved tool support and configuration capabilities in the context of the broader codebase architecture.</td>
					</tr>
					</table>
					<details>
						<summary><b>components</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/maciekmalachowski/DreamTrip/blob/master/frontend/src/components/ItineraryResults.tsx'>ItineraryResults.tsx</a></b></td>
								<td>- ItineraryResults.tsx serves as a dynamic component within the frontend architecture, rendering personalized travel itineraries<br>- It displays key travel details such as destination, traveler type, and budget, and formats the itinerary content using Markdown for enhanced readability and presentation<br>- This component updates only when a new itinerary is received, ensuring data consistency.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/maciekmalachowski/DreamTrip/blob/master/frontend/src/components/Header.tsx'>Header.tsx</a></b></td>
								<td>- Provides the visual and interactive front-end component for the application's main header<br>- It integrates branding elements like the logo and tagline, and features a visually appealing design with dynamic backgrounds and responsive layout adjustments<br>- This component sets the tone for user engagement and outlines the core functionality of the AI-powered travel planner.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/maciekmalachowski/DreamTrip/blob/master/frontend/src/components/LoadingIndicator.tsx'>LoadingIndicator.tsx</a></b></td>
								<td>- Provides a visual feedback mechanism through a LoadingIndicator component, essential for enhancing user experience during asynchronous operations<br>- It displays a spinning animation and messages to inform users that their personalized travel itinerary is being generated, ensuring clarity and engagement while the backend processes are completed<br>- This component is a critical part of the frontend's interactive elements.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/maciekmalachowski/DreamTrip/blob/master/frontend/src/components/TravelForm.tsx'>TravelForm.tsx</a></b></td>
								<td>- TravelForm.tsx serves as a user interface component within the frontend architecture, enabling users to input and submit travel-related data such as dates, destination, traveler type, and budget<br>- It facilitates dynamic interaction through form elements, ensuring users can plan and customize their travel itinerary effectively.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>services</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/maciekmalachowski/DreamTrip/blob/master/frontend/src/services/api.ts'>api.ts</a></b></td>
								<td>- Manages communication with the backend server for trip planning functionalities in the application<br>- It utilizes Axios to handle HTTP requests, specifically to post trip details such as destination, dates, and budget, and processes responses or errors accordingly to facilitate user interactions with trip planning features.</td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
		</blockquote>
	</details>
</details>

---
## 🚀 Getting Started

### ☑️ Prerequisites

Before you begin, ensure your development environment includes:

- **Node.js** (v18+ recommended)
- **npm** or **pnpm**
- **Python** (3.10+ recommended)
- Optional: `uv` or `poetry` for Python dependency management

---

### ⚙️ Installation

#### 1. Clone the repository
```sh
git clone https://github.com/maciekmalachowski/DreamTrip
```

#### 2. Navigate to the project directory:
```sh
cd DreamTrip
```

#### 3. Install Backend Dependencies:
```sh
cd backend
pip install -r requirements.txt
```
#### 4. Create a `.env` file in the *backend/* folder with the following **API** keys:
```sh
MODEL=gpt-4o
SERPER_API_KEY=your_api_key_here
OPENAI_API_KEY=your_api_key_here
```


#### 5. Go back and navigate to `frontend` and install the project dependencies:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
npm install
```

---


### 🤖 Usage

**Run Backend:**

Navigate to the backend folder and start the Flask server:
```sh
cd backend
flask --app flask_app.py run
```

Backend will run on `http://localhost:5000` with *Flask-CORS* enabled to match requests from the frontend.

**Run Frontend:**

Open a new terminal window and start the frontend:
```sh
cd frontend
npm run dev
```

Frontend will run on `http://localhost:5173`.

---

## 🔧 API Endpoints

| Method | Endpoint        | Description                                                         |
|--------|-----------------|---------------------------------------------------------------------|
| POST   | `/plan-trip`    | Accepts user input (destination, dates, traveler type, budget) and returns a personalized AI-generated travel itinerary. |


---

## 🔰 Contributing

<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/maciekmalachowski/DreamTrip
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/maciekmalachowski/DreamTrip/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=maciekmalachowski/DreamTrip">
   </a>
</p>
</details>

---

## 🎗 License

This project is protected under the [MIT](https://github.com/maciekmalachowski/DreamTrip/blob/main/LICENSE) License.

---
