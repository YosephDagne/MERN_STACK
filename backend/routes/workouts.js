const express = require("express");
const router = express.Router();
const Workout = require("../models/workoutModels.js");
// Get all workouts
router.get("/", (req, res) => {
  res.json({ messg: "Get all workouts" });
});
// get a single workout
router.get("/:id", (req, res) => {
  res.json({ messg: "Get a single workout" });
});

//post a new  workout
router.post("/", async (req, res) => {
  const { title, repetitions, load } = req.body;
  try {
    const workout = await Workout.create({ title, repetitions, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({error: error.message });
  }
});
//delete a workout
router.delete("/:id", (req, res) => {
  res.json({ messg: "Delete a workout" });
});
//update a workout
router.patch("/:id", (req, res) => {
  res.json({ messg: "Update a workout" });
});
module.exports = router;
