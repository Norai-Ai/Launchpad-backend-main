/**
 * NuroAI Launchpad Backend
 * Mongoose model for managing user data.
 */

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  walletAddress: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("User", userSchema);