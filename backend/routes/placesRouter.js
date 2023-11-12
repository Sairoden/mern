// Express
const express = require("express");
const router = express.Router();

// Controllers
const {
  getAllPlaces,
  getSinglePlace,
  createPlace,
  getAllPlacesUser,
} = require("../controllers");

router.route("/").get(getAllPlaces);

router.route("/:pid").get(getSinglePlace);

router.route("/user/:uid").get(getAllPlacesUser);

module.exports = router;
