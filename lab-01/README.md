
# Lab 1: Node.js and Express Server

## Student Details

- **Name:** B. Hasya Reddy
- **Registration Number:** 252U1R9019
- **Section:** CSE-GEN-AI 2A
- **Course:** Backend Development Fundamentals
- **Lab Number:** 01

## Live Deployment

**Status:** Successfully deployed on Render.

**Live URL:** https://backend-development-fundamentals-lab-01-c1tq.onrender.com/

[Open Live Server](https://backend-development-fundamentals-lab-01-c1tq.onrender.com/)

## Objective

To create a basic HTTP server using Node.js and develop an Express server with multiple routes, JSON responses, date and time information, and 404 error handling.

## Technologies Used

- Node.js
- Express.js
- JavaScript
- npm
- Git and GitHub
- Render

## Project Structure

```text
lab-01/
├── app.js
├── server.js
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

## Features

1. Creates a basic HTTP server using Node.js.
2. Displays a welcome message on the Express home route.
3. Returns student details in JSON format.
4. Returns the current date and time.
5. Handles unknown routes with a 404 status code.
6. Deploys the Express application using Render.

## Installation and Setup

### Prerequisites

- Node.js and npm
- Git
- Visual Studio Code or another code editor

### 1. Clone the Repository

```bash
git clone https://github.com/hasyareddy00-cloud/backend-development-fundamentals-lab-01.git
cd backend-development-fundamentals-lab-01
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Basic Node.js HTTP Server

```bash
node server.js
```

Open `http://localhost:3000` in your browser. The server responds with `Hello`.

Stop the server by pressing `Ctrl + C` before starting the Express server.

### 4. Run the Express Server

```bash
npm start
```

The Express server runs on port 3000 locally. Open the endpoints below to test the responses.

**Environment variables:** No manually configured environment variables are required.

## API Endpoints

| HTTP Method | Endpoint | Description | Status |
|---|---|---|---|
| GET | `/` | Displays a welcome message | 200 OK |
| GET | `/about` | Returns student details in JSON | 200 OK |
| GET | `/time` | Returns the current date and time | 200 OK |
| GET | `/anything` | Returns an error for an unknown route | 404 Not Found |

## Screenshots

### 1. Home Route

![Home Route](./screenshots/home.png)

### 2. About Route

![About Route](./screenshots/about.png)

### 3. Time Route

![Time Route](./screenshots/time.png)

### 4. 404 Error Response

![404 Error Response](./screenshots/404.png)

## Problems Faced and Solutions

- **Port conflict:** Both servers use port 3000 locally, so the first server must be stopped before starting the second.
- **Unknown routes:** Express middleware returns a 404 response for unconfigured routes.
- **Deployment configuration:** The application uses `process.env.PORT || 3000` to support Render and local execution.
- **Endpoint testing:** All four routes were tested using a browser.

## Learning Outcomes

- Understood the fundamentals of Node.js and Express.js.
- Created a server using Node.js's built-in HTTP module.
- Practiced creating GET routes using Express.js.
- Learned to return text and JSON responses.
- Used `new Date()` to return the current date and time.
- Understood HTTP status codes 200 and 404.
- Practiced version control using Git and GitHub.
- Learned how to deploy a Node.js application using Render.

## Viva Questions and Answers

### 1. What is the difference between `package.json` and `node_modules`?

- `package.json` stores project information, scripts, and dependency declarations.
- `node_modules` contains the installed packages required by the application.

### 2. What does `app.listen()` do?

It starts the Express server and makes it listen for incoming requests on a specified port.

### 3. What are request and response?

- **Request:** Information sent from a client to a server.
- **Response:** Data and status information sent from a server to a client.

### 4. What is Express.js?

Express.js is a web framework for Node.js that simplifies server creation and route handling.

### 5. What is HTTP status code 404?

It indicates that the requested route or resource was not found.

### 6. Why do we use `process.env.PORT || 3000`?

It uses the port provided by the hosting platform or defaults to port 3000 when running locally.

## GitHub Repository

[View Lab 1 Repository](https://github.com/hasyareddy00-cloud/backend-development-fundamentals-lab-01)

## Deployment Notes

- **Platform:** Render
- **Status:** Successfully deployed
- **Build Command:** `npm install`
- **Start Command:** `npm start`
- **Root Directory:** Repository root
- **Environment Variables:** No manually configured variables required

## Submission Checklist

- [x] Student details included.
- [x] Node.js HTTP server created.
- [x] Express routes implemented.
- [x] 404 error handling implemented.
- [x] All four screenshots included.
- [x] Live deployment URL added.
- [x] Code pushed to GitHub.
- [x] `node_modules` excluded from Git.
- [x] `.env` excluded from Git.
