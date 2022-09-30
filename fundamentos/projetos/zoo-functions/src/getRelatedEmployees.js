const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function isManager(id) {
  let result = false;

  employees.forEach((employee) => {
    if (employee.managers.some((man) => man === id)) result = true;
  });

  return result;
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const relEmp = employees.filter((employee) => employee.managers.some((man) => man === managerId));
  return relEmp.map((manager) => `${manager.firstName} ${manager.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
