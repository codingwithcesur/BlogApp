"use strict";

require("express-async-errors");

const { BlogPost } = require("../models/blogModel");

module.exports.BlogPost = {
  list: async (req, res) => {
    const data = BlogPost.find();
    res.status(200).send({
      error: false,
      result: data,
    });
  },
  create: async (req, res) => {
    const data = await BlogPost.insertOne(req.body);
    res.status(201).send({
      error: false,
      body: req.body,
      result: data,
    });
  },
  read: async (req, res) => {},
  update: async (req, res) => {},
  delete: async (req, res) => {},
};
