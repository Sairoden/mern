// Express
const express = require("express");
const app = express();

// Routers
const placesRouter = require("./placesRouter");

app.use("/api/v1/places", placesRouter);

module.exports = app;
