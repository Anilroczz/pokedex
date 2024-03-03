"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");
const corsOptions = require("./config/corsOptions.js");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());
app.use(cors());

app.use("/api/v1/pokemon", require("./routes/pokemon.router.js"));

app.all("*", function (req, res) {
  logger.log("error","404 Page Not Found!!");
  res.status(404).render("404");
});

app.use(errorHandler);

module.exports = app;
