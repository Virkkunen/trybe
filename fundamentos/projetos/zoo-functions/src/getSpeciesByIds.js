const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getSpeciesByIds(...args) {
  if (args.length === 0) return [];
  return species.filter(({ id }) => args.includes(id)); //  usar a abreviação de literals ou sei la como chama
}

module.exports = getSpeciesByIds;
