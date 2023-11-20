// Libraries
const axios = require("axios");

// Middlewares
const { HttpError } = require("../middlewares");

const API_KEY = "783779c66ad341ddb4e011b1577fe0d0";

const getCoordsForAddress = async address => {
  const { data } = await axios.get(
    `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(
      address
    )}&apiKey=${API_KEY}
    `
  );

  if (!data) {
    const error = new HttpError(
      "Could not find location for the specified address",
      422
    );

    return error;
  }

  const location = data.features[0].properties;
  return location;
};

module.exports = getCoordsForAddress;
