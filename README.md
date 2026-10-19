# Lab 1: Node.js and Express server

## Student Details

- **Name:** B. Hasya Reddy
- **Registration Number:** 252U1R9019
- **Section:** CSE-GEN-AI 2A
- **Course:** Backend Development Fundamentals
- **Lab Number:** 01

## Live Link

**Status:** Not deployed yet.

The Express server has not been deployed to a public hosting service yet.

## Objective

To set up a Node.js project and build a small web server, first using the built-in `http` module and then using Express.js.

## Technologies Used

- Node.js
- Express.js
- JavaScript
- npm
- Git and GitHub

## Project Structure

```text
lab-01/
├── server.js
├── app.js
├── package.json
├── package-lock.json
├── .gitignore
├── README.md
└── screenshots/
    ├── home.png
    ├── about.png
    ├── time.png
    └── 404.png
```

## Installation and Setup

### Prerequisites

- Node.js and npm installed
- Git installed for version control

### 1. Install Dependencies

Open a terminal in the `lab-01` directory and run:

```bash
npm install
```

### 2. Run the Basic Node.js HTTP Server

```bash
node server.js
```

Open `http://localhost:3000` in your browser. The server returns `Hello`.

Stop the server by pressing `Ctrl + C` before starting the Express server.

### 3. Run the Express Server

```bash
node app.js
```

The Express server runs on port 3000. Open the endpoints below in your browser to test the responses.

**Environment variables:** None required for this lab.

## Endpoints

| HTTP Method | Path | Description | Expected Status |
|---|---|---|---|
| GET | `/` | Returns a welcome message. | 200 OK |
| GET | `/about` | Returns student details in JSON format. | 200 OK |
| GET | `/time` | Returns the current date and time. | 200 OK |
| GET | `/unknown` | Returns a JSON error for an unknown route. | 404 Not Found |

Any path that is not configured should return a 404 response.

## Screenshots

### 1. Home Route

![Home Route](./screenshots/home.png)

### 2. About Route

![About Route](./screenshots/about.png)

### 3. Time Route

![Time Route](./screenshots/time.png)

### 4. 404 Error Response

![404 Error](./screenshots/404.png)

## Problems Faced and Solutions

- **Port conflict:** Both servers use port 3000, so one server must be stopped before starting the other.
- **Unknown routes:** A fallback Express middleware returns a 404 status code for unconfigured routes.
- **Endpoint testing:** Each endpoint was opened in the browser to check its response.

## Learning Outcomes

- Understood the fundamentals of Node.js and Express.js.
- Learned to create a server using Node.js's built-in HTTP module.
- Practiced configuring GET routes using Express.js.
- Learned to send text and JSON responses.
- Used `new Date()` to return the current date and time.
- Understood HTTP status codes, including 200 and 404.
- Practiced version control using Git and GitHub.

## Viva Questions and Answers

### 1. What is the difference between `package.json` and `node_modules`?

- `package.json` stores project information, scripts, and dependency declarations.
- `node_modules` contains the installed packages required by the project.

### 2. What does `app.listen()` do?

It starts the Express server and makes it listen for incoming requests on the specified port.

### 3. What do request and response represent?

- **Request:** Information sent by the client to the server.
- **Response:** Data and status information sent by the server to the client.

### 4. What is Express.js?

Express.js is a web framework for Node.js that simplifies server creation and route handling.

### 5. What is HTTP status code 404?

It indicates that the requested resource or route was not found.

## GitHub Repository

[Lab 1 — Backend Development Fundamentals](https://github.com/hasyareddy00-cloud/backend-development-fundamentals-lab-01)

## Deployment Notes

The project has not been deployed yet. Deployment to a public hosting service such as Render or Railway is pending.

If deployment cannot be completed, document the reason and include Postman screenshots for every endpoint, as required by the lab instructions.

## Submission Checklist

- [ ] Verify that all four screenshots appear in this README.
- [ ] Verify that the repository is public or accessible to the faculty.
- [ ] Add a live deployment URL after deployment, or document why deployment was not possible.
- [ ] Ensure `node_modules` and `.env` are not committed.
- [ ] Commit and push all final changes to GitHub.