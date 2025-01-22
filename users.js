/**
 * NORA AI Launchpad Backend
 * API routes for managing users on the NORA AI Launchpad platform.
 */

const express = require("express");
const User = require("../models/User");
const router = express.Router();

// Register a user
router.post("/register", async (req, res) => {
  try {
    const { walletAddress } = req.body;
    let user = await User.findOne({ walletAddress });

    if (!user) {
      user = new User({ walletAddress });
      await user.save();
    }

    res.status(201).json({ success: true, user });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ success: false, message: "Failed to register user" });
  }
});

module.exports = router;