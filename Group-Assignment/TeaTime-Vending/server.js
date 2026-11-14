

const express = require("express");
const db = require("./database/db");

const machineRoutes = require("./routes/machineRoutes");
const operatorRoutes = require("./routes/operatorRoutes");
const assignmentRoutes = require("./routes/assignmentRoutes");
const auditRoutes = require("./routes/auditRoutes");

const app = express();

// Middleware
app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.status(200).send("Welcome to TeaTime Vending API!");
});

// API routes
app.use("/machines", machineRoutes);
app.use("/operators", operatorRoutes);
app.use("/assignments", assignmentRoutes);
app.use("/audit", auditRoutes);

// Handle undefined routes
app.use((req, res) => {
    res.status(404).json({
        message: "Route not found"
    });
});

// Server configuration
const PORT = process.env.PORT || 3000;

// Start server
app.listen(PORT, () => {
    console.log(`TeaTime Vending API running on port ${PORT}`);
});
