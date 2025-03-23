require("dotenv").config();

const express = require("express");
const app = express(); // Create express app

const PORT = process.env.PORT;

// Middleware to log request method and path
app.use((req, res, next) => {
  console.log(`Method: ${req.method}, Path: ${req.path}`); 
  next();
});

// Define the root route
app.get("/", (req, res) => {
  res.json({ mssg: "Welcome to MERN Stack" });
});

// Listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
