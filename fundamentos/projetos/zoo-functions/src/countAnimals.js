const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

const countAllAnimals = () => {
  const obj = {};
  species.forEach((animal) => {
    obj[animal.name] = animal.residents.length;
  });
  return obj;
};

const countSpeciesAnimals = (animal) => {
  const c = species.filter((res) => res.name === animal)[0].residents.reduce((acc) => acc + 1, 0);
  return c; // eslint reclamando pra variar
};

const countGenderAnimals = (animal, gender) => {
  // deu certo de alguma forma, não entendi, irei estudar mais depois
  const animals = species.filter((res) => res.name === animal)[0];
  const genders = animals.residents.filter((res) => res.sex === gender);
  return genders.reduce((acc) => acc + 1, 0);
};

function countAnimals({ specie: animal, sex: gender } = 0) {
  if (!animal && !gender) return countAllAnimals();
  if (animal && !gender) return countSpeciesAnimals(animal);
  return countGenderAnimals(animal, gender);
}

module.exports = countAnimals;
