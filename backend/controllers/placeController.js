// Libraries
const { validationResult } = require("express-validator");

// Models
const { placeModel } = require("../models");

// Middlewares
const { HttpError } = require("../middlewares");

// Utils
const { getCoordsForAddress } = require("../utils");

const getAllPlaces = async (req, res, next) => {
  try {
    const places = await placeModel.find();

    if (!places) {
      const error = new HttpError("No places found", 422);
      return next(error);
    }

    return res.status(200).send({ places, count: places.length });
  } catch (err) {
    next(err);
  }
};

const getSinglePlace = async (req, res, next) => {
  try {
    const placeId = req.params.pid;

    const place = await placeModel.findById(placeId);

    if (!place) {
      const error = new HttpError(
        "Could not find a place for the provided place id",
        404
      );

      return next(error);
    }

    return res.status(200).send({ place });
  } catch (err) {
    next(err);
  }
};

const getPlacesByUser = async (req, res, next) => {
  try {
    const userId = req.params.uid;

    const places = await placeModel.find({ creator: userId });

    if (!places.length) {
      const error = new HttpError(
        "Could not find places for the provided user id",
        404
      );

      return next(error);
    }

    return res.status(200).send({ places });
  } catch (err) {
    next(err);
  }
};

const createPlace = async (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      console.error(errors);
      const error = new HttpError(
        "Invalid inputs, please check your data",
        422
      );

      return next(error);
    }

    const { title, description, address, creator } = req.body;

    let location;

    location = await getCoordsForAddress(address);
    location = {
      lat: location.lat,
      lng: location.lon,
    };

    const newPlace = await placeModel.create({
      title,
      description,
      address,
      location,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Manila_Harbour_View_by_night_%28Thomas_Yie%29_-_Flickr.jpg/288px-Manila_Harbour_View_by_night_%28Thomas_Yie%29_-_Flickr.jpg",
      creator,
    });

    if (!newPlace) {
      console.error(errors);
      const error = new HttpError(
        "Creating a new place failed, please try again",
        500
      );

      return next(error);
    }

    return res.status(201).send({ place: newPlace });
  } catch (err) {
    next(err);
  }
};

const updatePlace = async (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      console.log(errors);
      const error = new HttpError(
        "Invalid inputs passed, please check your data",
        422
      );

      return next(error);
    }

    const placeId = req.params.pid;

    const updatePlace = await placeModel.findByIdAndUpdate(placeId, req.body, {
      new: true,
    });

    if (!updatePlace) {
      console.error(errors);
      const error = new HttpError(
        "Could not update the place, please try again",
        500
      );

      return next(error);
    }

    return res.status(200).send({ place: updatePlace });
  } catch (err) {
    next(err);
  }
};

const deletePlace = async (req, res, next) => {
  try {
    const placeId = req.params.pid;

    const place = await placeModel.findByIdAndDelete(placeId);

    if (!place) {
      const error = new HttpError("Could not find a place for that id", 404);

      return next(error);
    }

    return res.status(200).send({ message: "Deleted place" });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllPlaces,
  getSinglePlace,
  createPlace,
  getPlacesByUser,
  updatePlace,
  deletePlace,
};
