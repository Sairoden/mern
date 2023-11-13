// Express
const express = require("express");
const app = express();

// Routers
const placesRouter = require("./placeRouter");

// Middlewares
const { HttpError } = require("../middlewares");

app.use("/api/v1/places", placesRouter);
app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);

  throw error;
});
app.use((error, req, res, next) => {
  if (res.headerSent) return next(error);

  return res
    .status(error.code || 500)
    .send({ message: error.message || "An unknown error occured! 🔴" });
});

module.exports = app;
