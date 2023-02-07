const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // return species.filter((el) => el.name === animal);
  return species.find((a) => a.name === animal).residents.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;
