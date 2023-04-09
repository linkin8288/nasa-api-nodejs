// This is the end point of launches' router

const express = require('express');
// handle incoming http request in controller
const { 
  httpGetAllLaunches,
  httpAddNewLaunch,
  httpAbortLaunch
 } = require('./launches.controller')

const launchesRouter = express.Router();

launchesRouter.get('/', httpGetAllLaunches);
launchesRouter.post('/', httpAddNewLaunch);
launchesRouter.delete('/:id', httpAbortLaunch);

module.exports = launchesRouter;