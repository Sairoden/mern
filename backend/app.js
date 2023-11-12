// Libraries

// Express
const express = require("express");
const app = express();

// Middlewares
app.use(express.json());

// Routes
const routes = require("./routes");
app.use(routes);

module.exports = app;
