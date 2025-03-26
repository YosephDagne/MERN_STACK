require("dotenv").config();
const express = require("express");

// Create express app
const app = express();

// Middleware 
app.use((req, res, next) => {
  console.log(`Method: ${req.method}, Path: ${req.path}`); 
  next(); 
});

// Define the root route
app.get("/", (req, res) => {
  res.json({ mssg: "Welcome to MERN Stack" });
});
//listen on port
app.listen(process.env.PORT, () => {
  console.log("Server listening on port", process.env.PORT);
});
