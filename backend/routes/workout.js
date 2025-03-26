const express = require('express');
const router = express.Router();
// Get all workouts
router.get('/', (req, res) => { 
    res.json({ messg: "Get all workouts" });
});
// get a single workout
router.get('/:id', (req, res) => {
    res.json({ messg: "Get a single workout" });
});

//post a workout
router.post('/', (req, res) => {
    res.json({ messg: "Post a new  workout" });
});
//delete a workout
router.delete('/:id', (req, res) => {
    res.json({ messg: "Delete a workout" });
});
//update a workout
router.patch('/:id', (req, res) => { 
    res.json({ messg: "Update a workout" });
});
module.exports = router;