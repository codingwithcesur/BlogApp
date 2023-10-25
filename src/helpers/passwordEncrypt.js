"use strict";

const crypto = require("node:crypto");

const keyCode = process.env.SECRET_KEY || "write_random_chars_to_have";
const loopCount = 10_000;
const charsCount = 32; // 32 for 64 chars
const encType = "sha512";

module.exports = (password) => {
  const encode = crypto.pbkdf2Sync(
    password,
    keyCode,
    loopCount,
    charsCount,
    encType
  );
  return encode.toString("hex");
};
