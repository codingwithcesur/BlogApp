"use strict";

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      unique: true,
      required: [true, "Email is required"],
      validate: [
        (email) => email.includes("@") > 0 && email.includes(".") > 0,
        "Email is invalid",
      ],
    },
    password: {
      type: String,
      trim: true,
      required: true,
    },
    firstName: String,
    lastName: String,
  },
  { collection: "users", timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
