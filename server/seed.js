const mongoose = require('mongoose');
const Project = require('./models/Project'); // Adjust path if needed
require('dotenv').config();

const projects = [
  {
    title: "MERN Stack Portfolio",
    description: "A professional full-stack portfolio website built with React, Node.js, and Tailwind CSS to showcase my ICT projects.",
    techStack: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
    link: "https://github.com/yourusername/portfolio-"
  },
  {
    title: "Network Infrastructure Design",
    description: "Designed and simulated a complex campus network using Cisco Packet Tracer, focusing on VLANs and OSPF routing.",
    techStack: ["Cisco Packet Tracer", "Networking", "Routing & Switching"],
    link: "#"
  },
  {
    title: "ICT Academic Evaluator",
    description: "A tool or documentation set focused on analyzing Data Communication and Object-Oriented Programming principles.",
    techStack: ["C++", "Data Communication", "Information Systems"],
    link: "#"
  }
];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("Connected to MongoDB...");
    await Project.deleteMany({}); // Clears old data
    await Project.insertMany(projects);
    console.log("Database Seeded Successfully!");
    process.exit();
  })
  .catch(err => {
    console.error("Error seeding database:", err);
    process.exit(1);
  });