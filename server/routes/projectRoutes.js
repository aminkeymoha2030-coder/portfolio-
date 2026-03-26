const express = require('express');
const router = express.Router();
const Project = require('../models/Project'); // This uses the Schema we discussed

// GET all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ message: "Error fetching projects", error: err });
  }
});

module.exports = router;