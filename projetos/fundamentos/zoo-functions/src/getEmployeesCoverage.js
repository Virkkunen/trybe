const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

// const getEmployeeByName = (empName) => {
//   const err = new Error('Informaões inválidas');
//   try {
//     employees.find((emp) => emp.firstName === empName || emp.lastName === empName);
//   } catch (e) {
//     throw err;
//   }
// };

// function getEmployeesCoverage(info) {
//   if (!info) return employees;

//   const { name, id } = info;
//   if (name) return getEmployeeByName(name);
// }

const createEmpArr = ({ id, firstName, lastName, responsibleFor }) => {
  const obj = {
    id,
    fullName: `${firstName} ${lastName}`,
    species: responsibleFor.map((el) => species.find((animal) => animal.id === el).name),
    locations: responsibleFor.map((el) => species.find((animal) => animal.id === el).location),
  };
  return obj;
};

const getEmployeeByName = (name) => {
  const obj = employees.find((emp) => emp.firstName === name || emp.lastName === name);
  return createEmpArr(obj);
};

const checkName = (name) => {
  if (!employees.some((emp) => emp.firstName === name || emp.lastName === name)) {
    throw new Error('Informaões inválidas');
  }
  return getEmployeeByName(name);
};

const checkID = (id) => {
  if (!employees.find((emp) => emp.id === id)) throw new Error('Informações inválidas');
  return true;
};

const emptyNameAndID = () => {
  const employeesArray = [];
  employees.forEach((employee) => employeesArray.push(createEmpArr(employee)));
  return employeesArray;
};

function getEmployeesCoverage({ name, id } = 0) {
  if (!name && !id) return emptyNameAndID();
  if (name && !id) return checkName(name); // a falta do return me fez perder 1h48
  checkID(id); // bora la linter
  const obj = employees.find((employee) => employee.id === id);
  return createEmpArr(obj);
}

module.exports = getEmployeesCoverage;
