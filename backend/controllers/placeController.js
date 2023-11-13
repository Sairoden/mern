// Libraries
const { v4: uuidv4 } = require("uuid");

// Models
const DUMMY_PLACES = require("../models/placeModel");

// Middlewares
const { HttpError } = require("../middlewares");

const getAllPlaces = async (req, res, next) => {
  return res.status(200).send({ places: DUMMY_PLACES });
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

  return res.status(200).send({ place });
};

const createPlace = async (req, res) => {
  const { title, description, address, location, creator } = req.body;

  const newPlace = {
    id: uuidv4(),
    title,
    description,
    address,
    location,
    creator,
  };

  DUMMY_PLACES.push(newPlace);

  return res.status(201).send({ place: newPlace });
};

const updatePlace = async (req, res) => {
  const { title, description } = req.body;
  const placeId = req.params.pid;

  const updatedPlace = DUMMY_PLACES.find(place => place.id === placeId);
  const placeIndex = DUMMY_PLACES.findIndex(place => place.id === placeId);

  updatedPlace.title = title;
  updatedPlace.description = description;

  DUMMY_PLACES[placeIndex] = updatedPlace;

  return res.status(200).send({ place: updatedPlace });
};

const deletePlace = async (req, res) => {
  return res.status(200).send({ message: "DELETED" });
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

  return res.status(200).send({ place: userPlace });
};

module.exports = {
  getAllPlaces,
  getSinglePlace,
  createPlace,
  getAllPlacesUser,
  updatePlace,
  deletePlace,
};
