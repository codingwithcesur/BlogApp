"use strict";

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

app.use(express.json());

/* --------------------------------- */
const session = require("cookie-session");
app.use(
  session({
    secret: process.env.SECRET_KEY || "secret_key_for_cookie",
    maxAge: 1000 * 60 * 60 * 24, // 1 day
  })
);

/* --------------------------------- */
// MongoDB connection
require("./src/dbConnection");

app.all("/", (req, res) => {
  res.send("Blog API");
});

/* --------------------------------- */
app.use("/user", require("./src/routes/userRoute"));
app.use("/blog", require("./src/routes/blogRoute"));

// require("./src/sync")();

/* --------------------------------- */
app.use(require("./src/errorHandler"));

app.listen(PORT, () => {
  console.log(`Running: http://localhost:${PORT}`);
});
