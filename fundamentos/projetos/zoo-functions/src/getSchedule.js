const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');
const { hours } = require('../data/zoo_data');

const allDays = { // tem que ser variável se não o eslint chora
  // bora pro jeito grande mas simples de entender, se funcionou e passou ta valendo
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  },
  Tuesday: {
    officeHour: `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close}pm`,
    exhibition: species.filter((animal) =>
      animal.availability.includes('Tuesday')).map((animal) => animal.name),
  },
  Wednesday: {
    officeHour: `Open from ${hours.Wednesday.open}am until ${hours.Wednesday.close}pm`,
    exhibition: species.filter((animal) =>
      animal.availability.includes('Wednesday')).map((animal) => animal.name),
  },
  Thursday: {
    officeHour: `Open from ${hours.Thursday.open}am until ${hours.Thursday.close}pm`,
    exhibition: species.filter((animal) =>
      animal.availability.includes('Thursday')).map((animal) => animal.name),
  },
  Friday: {
    officeHour: `Open from ${hours.Friday.open}am until ${hours.Friday.close}pm`,
    exhibition: species.filter((animal) =>
      animal.availability.includes('Friday')).map((animal) => animal.name),
  },
  Saturday: {
    officeHour: `Open from ${hours.Saturday.open}am until ${hours.Saturday.close}pm`,
    exhibition: species.filter((animal) =>
      animal.availability.includes('Saturday')).map((animal) => animal.name),
  },
  Sunday: {
    officeHour: `Open from ${hours.Sunday.open}am until ${hours.Sunday.close}pm`,
    exhibition: species.filter((animal) =>
      animal.availability.includes('Sunday')).map((animal) => animal.name),
  },
};

const animalSchedule = (animal) => species.find((an) => an.name === animal).availability;

// {"Tuesday": {"exhibition": ["lions", "tigers", "bears", "penguins", "elephants", "giraffes"], "officeHour": "Open from 8am until 6pm"}}
const daySchedule = (day) => {
  const obj = {
    [day]: {
      officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
      exhibition: species.filter((animal) =>
        animal.availability.includes(day)).map((animal) => animal.name),
    },
  };
  return obj;
};

function getSchedule(scheduleTarget) {
  if (scheduleTarget === 'Monday') {
    return { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
  }
  if (species.find((an) => an.name === scheduleTarget)) return animalSchedule(scheduleTarget);
  if (Object.keys(hours).includes(scheduleTarget)) return daySchedule(scheduleTarget);
  return allDays; // eslint...
}

module.exports = getSchedule;
