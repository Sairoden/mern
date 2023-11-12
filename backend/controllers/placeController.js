// Models
const DUMMY_PLACES = require("../models/placeModel");

// Middlewares
const { HttpError } = require("../middlewares");

const getAllPlaces = async (req, res, next) => {
  return res.status(200).send({ message: "GET ALL PLACES" });
};

const getSinglePlace = async (req, res, next) => {
  const placeId = req.params.pid;

  const place = DUMMY_PLACES.find(place => place.id === placeId);

  if (!place) {
    const error = new HttpError(
      "Could not find a place for the provided place id",
      404
    );

    return next(error);
  }

  return res.status(200).send({ message: "GET PLACE", place });
};

const createPlace = async (req, res, next) => {
  const { id, title, description, location, creator } = req.body;

  const newPlace = { id, title, description, location, creator };

  DUMMY_PLACES.push(newPlace);

  return res.status(200).send({ message: "CREATE PLACE", newPlace });
};

const getAllPlacesUser = async (req, res, next) => {
  const userId = req.params.uid;

  const userPlace = DUMMY_PLACES.find(place => place.creator === userId);

  if (!userPlace) {
    const error = new HttpError(
      "Could not find a place for the provided user id",
      404
    );

    return next(error);
  }

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
