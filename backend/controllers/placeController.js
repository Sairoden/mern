// Libraries
const { v4: uuidv4 } = require("uuid");

// Models
let DUMMY_PLACES = [
  {
    id: "p1",
    title: "Manila City",
    description: "One of the oldest cities in the world",
    location: {
      lat: 14.5973628,
      lng: 120.98013,
    },
    creator: "u1",
  },
];

// Middlewares
const { HttpError } = require("../middlewares");

const getAllPlaces = async (req, res, next) => {
  return res
    .status(200)
    .send({ places: DUMMY_PLACES, count: DUMMY_PLACES.length });
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
  const placeId = req.params.pid;

  DUMMY_PLACES = DUMMY_PLACES.filter(place => place.id !== placeId);

  return res.status(200).send({ message: "Deleted place" });
};

const getPlacesByUser = async (req, res, next) => {
  const userId = req.params.uid;

  const userPlaces = DUMMY_PLACES.filter(place => place.creator === userId);

  if (!userPlaces || userPlaces.length === 0) {
    const error = new HttpError(
      "Could not find places for the provided user id",
      404
    );

    return next(error);
  }

  return res.status(200).send({ place: userPlaces });
};

module.exports = {
  getAllPlaces,
  getSinglePlace,
  createPlace,
  getPlacesByUser,
  updatePlace,
  deletePlace,
};
