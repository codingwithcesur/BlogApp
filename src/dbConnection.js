"use strict";

const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB || "mongodb://localhost:27017/")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });
