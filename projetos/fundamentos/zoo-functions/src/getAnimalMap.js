const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

// const locationArray = {
//   NE: [],
//   NW: [],
//   SE: [],
//   SW: [],
// };
// // const getAnimalsByLocation = (location) => species.filter((animal) => animal.location === location)

// const createWithNamesObj = (animal) => {
//   const obj = {};
//   const arr = [];
//   animal.residents.forEach((animal2) => arr.push(animal2.name));
//   obj[animal.name] = arr;
//   return obj;
// };

// const withNames = () => {
//   species.forEach((animal) => locationArray[animal.location].push(createWithNamesObj(animal)));
//   return locationArray;
// };

const allLocations = () => {
  // se eu declarar isso global, não passa em testes
  const locationObj = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  species.forEach((animal) => locationObj[animal.location].push(animal.name));
  return locationObj;
};

// function getAnimalMap(options) {
//   if (!options) return allLocations();
//   const { includeNames, sex, sorted } = options;
//   if (includeNames) return withNames();

// }

const getSortedAnimals = (animalID, sorted) => {
  // arrays e arrays e mais arrays
  const sortedArray = [];
  const { residents } = species.find((animal) => animal.id === animalID); // como não pensei nisso antes eu não sei

  residents.forEach((evil) => sortedArray.push(evil.name));
  if (sorted) sortedArray.sort();
  return sortedArray;
};

const getAnimalGender = (animalID, sex, sorted) => {
  const genderArray = [];
  const { residents } = species.find((animal) => animal.id === animalID);
  residents.filter((resident) => resident.sex === sex)
    .forEach((evil) => genderArray.push(evil.name)); // a piada precisou ser feita
  if (sorted) genderArray.sort();
  return genderArray;
};

function getAnimalsByName(loc, sex, sorted) {
  const animalArr = [];
  // cria a chave do animal e valor é pelo genero
  // se tiver sorted já faz isso na função com .sort()
  if (sex) {
    species.filter((animal) => animal.location === loc)
      .forEach((anim) => {
        const obj = { [anim.name]: getAnimalGender(anim.id, sex, sorted) }; // getAnimalSex ficou sugestivo
        animalArr.push(obj);
      });
    return animalArr;
  }
  // se nao passar genero faz essa outra bagunça ai
  species.filter((animal) => animal.location === loc)
    .forEach((anim) => {
      const obj = { [anim.name]: getSortedAnimals(anim.id, sorted) };
      animalArr.push(obj);
    });
  return animalArr;
}

const getOtherOptions = (sex, sorted) => {
  const locationObj = { // olha ele ai de novo
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };

  locationObj.NE = getAnimalsByName('NE', sex, sorted);
  locationObj.NW = getAnimalsByName('NW', sex, sorted);
  locationObj.SE = getAnimalsByName('SE', sex, sorted);
  locationObj.SW = getAnimalsByName('SW', sex, sorted);

  return locationObj; // mais outro return que eu esqueço e destroi o código inteiro :facepalm
};

function getAnimalMap(options) {
  if (!options) return allLocations();
  const { includeNames, sex, sorted } = options;
  if (!includeNames) return allLocations();
  return getOtherOptions(sex, sorted);
}

// console.log(getAnimalMap({ sex: 'female' }));
// console.log(getAnimalsByLocation('NE'));
console.log(getAnimalMap({ includeNames: true, sex: 'female', sorted: true }));
module.exports = getAnimalMap;
