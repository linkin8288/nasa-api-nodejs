// This model is to store the logic of launches' object

// create a new Map object
const launches = new Map;

let latestFlightNumber = 100;

const launch = {
  flightNumber: 100,
  mission: 'Kepler Exploration X',
  rocket: 'Explorer IS1',
  launchDate: new Date('December 27, 2034'),
  target: 'Kepler-448 b',
  customer: ['NYC', 'NASA'],
  upcoming: true,
  success: true,
};

// set() is used to add a new key-value pair to the Map
launches.set(launch.flightNumber, launch);

function getAllLaunches() {
  return Array.from(launches.values());
}
// check id exist to delete
function existLaunchWithId(launchId) {
  return launches.has(launchId);
}
// delete id
function abortLaunchById(launchId) {
  const aborted = launches.get(launchId);
  aborted.upcoming = false;
  aborted.success = false;

  return aborted;
}

function addNewLaunch(launch) {
  latestFlightNumber++;
  launches.set(
    latestFlightNumber, 
    Object.assign(launch, {
      success: true,
      upcoming: true,
      customers: ['NYC', 'NASA'],
      flightNumber: latestFlightNumber,
    })
  )
}

module.exports = {
  getAllLaunches,
  addNewLaunch,
  existLaunchWithId,
  abortLaunchById
}