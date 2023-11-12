// Express
const express = require("express");
const app = express();

// Routers
const placesRouter = require("./placesRouter");

app.use("/api/v1/places", placesRouter);
app.use((error, req, res, next) => {
  if (res.headerSent) return next(error);

  return res
    .status(error.code || 500)
    .send({ message: error.message || "An unknown error occured! 🔴" });
});

module.exports = app;
