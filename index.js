/**
 * NuroAI Launchpad Backend
 * Handles the core backend functionality for the NuroAI Launchpad platform.
 */

require("dotenv").config();
const express = require("express");
const { connectToDatabase } = require("./utils/database");
const projectRoutes = require("./routes/projects");
const userRoutes = require("./routes/users");

const app = express();
app.use(express.json());

// Connect to the database
connectToDatabase();

// API Routes
app.use("/api/projects", projectRoutes);
app.use("/api/users", userRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`NuroAI Launchpad Backend running on port ${PORT}`);
});