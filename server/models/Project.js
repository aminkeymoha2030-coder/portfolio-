const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  techStack: [String], // e.g., ["React", "Node.js", "Cisco"]
  link: String,
  imageUrl: String,
});

module.exports = mongoose.model('Project', ProjectSchema);