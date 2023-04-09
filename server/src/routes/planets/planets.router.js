// // This is the end point of planets' router

// Define the router and pass it to app.js and mount it there.
// getAllPlanets is to get the habitablePlanets

const express = require('express');

const { httpGetAllPlanets } = require('./planets.controller');

const planetsRouter = express.Router();

// use the getAllPlanets function as the route handler:
planetsRouter.get('/', httpGetAllPlanets);

module.exports = planetsRouter;