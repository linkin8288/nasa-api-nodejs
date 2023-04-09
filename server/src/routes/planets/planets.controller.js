// getAllPlanets function (or any other functions related to planets) that will handle the business logic of the planets API:

const { getAllPlanets } = require('../../models/planets.model')

function httpGetAllPlanets(req, res) {
  return res.status(200).json(getAllPlanets());
}

module.exports = {
  httpGetAllPlanets,
}