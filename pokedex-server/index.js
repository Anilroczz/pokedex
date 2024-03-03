"use strict";

require("dotenv").config();
require("./database/dbConn").connect();

const http = require("node:http");
const mongoose = require("mongoose");
const app = require("./server");

const port = process.env.API_PORT || 3000;
const httpServer = http.createServer(app);

mongoose.connection.on("connected", function () {
  console.log("Mongoose default connection open to mongo cluster instance");

  httpServer.listen(port, function () {
    console.log("Pokemon API Server Started..!");
    console.log(`Insecure :: Server running on port ${port}...`);
  });
});
