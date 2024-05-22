const express = require("express");
const Workout = require("../models/WorkoutModel");

const {
  createWorkout,
  getWorkouts,
  getWorkout,
  updateWorkout,
  deleteWorkout,
} = require("../controllers/workoutController");

const router = express.Router();

// GET all workouts
router.get("/", getWorkouts);

// GET a single workout
router.get("/:id", getWorkout);

// POST a new workout
router.post("/", createWorkout);

router.delete("/:id", deleteWorkout);

router.patch("/:id", updateWorkout);
module.exports = router;
