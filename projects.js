/**
 * NORA AI Launchpad Backend
 * API routes for managing projects on the NORA AI Launchpad platform.
 */

const express = require("express");
const Project = require("../models/Project");
const router = express.Router();

// Get all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json({ success: true, projects });
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ success: false, message: "Failed to fetch projects" });
  }
});

// Create a new project
router.post("/", async (req, res) => {
  try {
    const { name, description, goal, startDate, endDate } = req.body;
    const project = new Project({ name, description, goal, startDate, endDate });
    await project.save();
    res.status(201).json({ success: true, project });
  } catch (error) {
    console.error("Error creating project:", error);
    res.status(500).json({ success: false, message: "Failed to create project" });
  }
});

module.exports = router;