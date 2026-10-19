# Backend Development Fundamentals — Lab 01

## Student Details
- **Name:** B.Hasya Reddyy
- **Section:** GEN AI-2A

## Project Description
This project demonstrates the fundamentals of Node.js and Express.js by creating a basic HTTP server and a web server with multiple routes.

## Technologies Used
- Node.js
- Express.js
- JavaScript

## Project Structure
```text
lab-01/
├── server.js
├── app.js
├── package.json
├── package-lock.json
├── .gitignore
└── screenshots/
```

## Features
1. Basic Node.js HTTP server running on port 3000.
2. Home route (`/`) displays a welcome message.
3. About route (`/about`) returns student details in JSON.
4. Time route (`/time`) returns the current date and time.
5. Unknown routes return a 404 error in JSON.

## How to Run

Install dependencies:

```bash
npm install
```

Run the Node.js server:

```bash
node server.js
```

Stop it with `Ctrl + C`, then run the Express server:

```bash
node app.js
```

Open `http://localhost:3000` in your browser to test the routes.

## Learning Outcomes
- Understanding Node.js HTTP servers.
- Creating routes using Express.js.
- Sending text and JSON responses.
- Handling invalid routes using HTTP status code 404.
