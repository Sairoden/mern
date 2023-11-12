// Models
const DUMMY_PLACES = require("../models/placeModel");

const getAllPlaces = async (req, res) => {
  return res.status(200).send({ message: "GET ALL PLACES" });
};

const getSinglePlace = async (req, res) => {
  const placeId = req.params.pid;

  const place = DUMMY_PLACES.find(place => place.id === placeId);

  return res.status(200).send({ message: "GET PLACE", place });
};

const createPlace = async (req, res) => {
  const { id, title, description, location, creator } = req.body;

  const newPlace = { id, title, description, location, creator };

  DUMMY_PLACES.push(newPlace);

  return res.status(200).send({ message: "CREATE PLACE", newPlace });
};

const getAllPlacesUser = async (req, res) => {
  const userId = req.params.uid;

  const userPlace = DUMMY_PLACES.find(place => place.creator === userId);

  return res
    .status(200)
    .send({ message: "GET ALL PLACES USER", place: userPlace });
};

module.exports = {
  getAllPlaces,
  getSinglePlace,
  createPlace,
  getAllPlacesUser,
};
