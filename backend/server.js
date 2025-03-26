require("dotenv").config();
const express = require("express");
const workoutRoutes = require("./routes/workout");

//Express app
const app = express();

// Middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(`Method: ${req.method}, Path: ${req.path}`);
  next();
});

// Import routes
app.use("/api/workouts", workoutRoutes);

// Listen on port

app.listen(process.env.PORT, () => {
  console.log("Server is running on port", process.env.PORT);
});
