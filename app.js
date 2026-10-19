
const express = require("express");

const app = express();

// Home route
app.get("/", (req, res) => {
    res.send("Welcome to Express!");
});

// About route
app.get("/about", (req, res) => {
    res.json({
        name: "B.Hasya Reddyy",
        section: "CSE-GEN-AI 2A",
        rollNumber: "304"
    });
});

// Time route
app.get("/time", (req, res) => {
    res.json({
        currentTime: new Date()
    });
});

// 404 route - handles unknown URLs
app.use((req, res) => {
    res.status(404).json({
        error: "Route not found"
    });
});

// Start the server
app.listen(3000, () => {
    console.log("Express server running at http://localhost:3000");
});
