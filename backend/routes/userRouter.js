// Express
const express = require("express");
const router = express.Router();

// Controllers
const { getAllUsers, signup, login } = require("../controllers");

router.get("/", getAllUsers);
router.post("/signup", signup);
router.post("/login", login);

module.exports = router;
