
const express = require("express");

const app = express();

// Home route
app.get("/", (req, res) => {
    res.status(200).send("Welcome to Express!");
});

// About route
app.get("/about", (req, res) => {
    res.status(200).json({
        name: "B. Hasya Reddy",
        section: "CSE-GEN-AI 2A",
        rollNumber: "304"
    });
});

// Time route
app.get("/time", (req, res) => {
    res.status(200).json({
        currentTime: new Date()
    });
});

// 404 route for unknown URLs
app.use((req, res) => {
    res.status(404).json({
        error: "Route not found"
    });
});

// Start the server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Express server running on port ${PORT}`);
});
