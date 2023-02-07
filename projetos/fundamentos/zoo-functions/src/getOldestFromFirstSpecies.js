const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  let age = 0;
  const animalID = employees.find((person) => person.id === id).responsibleFor[0];
  const animals = species.find((animal) => animal.id === animalID).residents;

  animals.forEach((animal) => {
    if (animal.age > age) age = animal.age;
  });

  return Object.values(animals.find((animal) => animal.age === age));
}
// funcionou de primeira, orgulho
// só faltou mapear pra array

module.exports = getOldestFromFirstSpecies;
