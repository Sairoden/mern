// Libraries
const helmet = require("helmet");
const xss = require("xss-clean");
const cors = require("cors");

// Express
const express = require("express");
const app = express();

// Middlewares
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());

// Routes
const routes = require("./routes");
app.use(routes);

module.exports = app;
