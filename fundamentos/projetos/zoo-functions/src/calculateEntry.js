const data = require('../data/zoo_data');
const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  const obj = {
    child: 0,
    adult: 0,
    senior: 0,
  };

  entrants.forEach((entrant) => {
    if (entrant.age < 18) obj.child += 1;
    if (entrant.age >= 18 && entrant.age < 50) obj.adult += 1;
    if (entrant.age >= 50) obj.senior += 1;
  });

  return obj;
}

function calculateEntry(entrants) {
  if (!entrants || Object.entries(entrants).length === 0) return 0;
  const people = countEntrants(entrants);
  return (people.child * prices.child)
  + (people.adult * prices.adult)
  + (people.senior * prices.senior);
}

module.exports = { calculateEntry, countEntrants };
