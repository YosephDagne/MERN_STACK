const Workout = require("../models/workoutModels.js");
const mongoose = require("mongoose");

// Get all workouts
const getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({}).sort({ createdAt: -1 });
    res.status(200).json(workouts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single workout
const getWorkout = async (req, res) => {
  const { id } = req.params;

  // Check if the ID is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: `No workout with id: ${id}` });
  }

  try {
    const workout = await Workout.findById(id);
    if (!workout) {
      return res
        .status(404)
        .json({ message: `Workout with id ${id} not found` });
    }
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: "Invalid workout ID" });
  }
};

// Create a new workout
const createWorkout = async (req, res) => {
  const { title, repetitions, load } = req.body;

  try {
    const workout = await Workout.create({ title, repetitions, load });
    res.status(201).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  try {
    const workout = await Workout.findByIdAndDelete(id);
    if (!workout) {
      return res
        .status(404)
        .json({ message: `Workout with id ${id} not found` });
    }
    res.status(200).json({ message: "Workout deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: "Invalid workout ID" });
  }
};

// Update a workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;

  try {
    const workout = await Workout.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!workout) {
      return res
        .status(404)
        .json({ message: `Workout with id ${id} not found` });
    }
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: "Invalid workout ID" });
  }
};

module.exports = {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
};
