// Express
const express = require("express");
const router = express.Router();

// Controllers
const {
  getAllPlaces,
  getSinglePlace,
  createPlace,
  updatePlace,
  getAllPlacesUser,
  deletePlace,
} = require("../controllers");

router.route("/").get(getAllPlaces).post(createPlace);

router
  .route("/:pid")
  .get(getSinglePlace)
  .patch(updatePlace)
  .delete(deletePlace);

router.route("/user/:uid").get(getAllPlacesUser);

module.exports = router;
