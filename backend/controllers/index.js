// Place Controllers
const {
  getAllPlaces,
  getSinglePlace,
  createPlace,
  getPlacesByUser,
  updatePlace,
  deletePlace,
} = require("./placeController");

// User Controllers
const { getAllUsers, signup, login } = require("./userController");

module.exports = {
  getAllPlaces,
  getSinglePlace,
  createPlace,
  getPlacesByUser,
  updatePlace,
  deletePlace,
  getAllUsers,
  signup,
  login,
};
