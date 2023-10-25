"use strict";

const router = require("express").Router();

const { User } = require("../controllers/userController");

router.route("/user").get(User.list).post(User.create);
router.route("/user/:Id").get(User.read).put(User.update).delete(User.delete);
