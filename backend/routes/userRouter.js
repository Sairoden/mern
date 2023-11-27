// Libraries
const { check } = require("express-validator");

// Express
const express = require("express");
const router = express.Router();

// Controllers
const { getAllUsers, signup, login, deleteUser } = require("../controllers");

router.get("/", getAllUsers);
router.delete("/:id", deleteUser);
router.post(
  "/signup",
  [
    check("name").not().isEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 6 }),
  ],
  signup
);
router.post("/login", login);

module.exports = router;
