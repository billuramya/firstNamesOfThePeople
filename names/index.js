const peoplesNames = require("../country/state/city/index.js");

const getFirstName = require("../utilities/utils/index.js");

const getPeopleInCity = (peoplesNames) => {
  return getFirstName(peoplesNames);
};

module.exports = getPeopleInCity;
