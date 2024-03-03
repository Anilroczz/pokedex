const express = require("express");
const apicache = require("apicache");
const controller = require("../controllers/pokemon.controller.js");

const router = express.Router();
const cache = apicache.middleware;

router.route("/")
    .get(cache("5 minutes"), controller.getPokemon)
    .post(controller.createPokemon)

router.route("/:id")
    .get(controller.getPokemonById)
    .put(controller.updatePokemon)
    .patch(controller.editPokemon)
    .delete(controller.deletePokemon);

module.exports = router;
