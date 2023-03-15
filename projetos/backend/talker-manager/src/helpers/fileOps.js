const fs = require('fs/promises');

const path = 'src/talker.json';

const readTalkers = async () => JSON.parse(await fs.readFile(path));

const addTalker = async (talker) => {
  const talkers = await readTalkers();
  const newTalker = {
    id: talkers.length + 1,
    ...talker,
  };
  talkers.push(newTalker);
  const newTalkers = JSON.stringify(talkers, null, 2);
  await fs.writeFile(path, newTalkers);
  return newTalker;
};

const updateTalker = async (id, talker) => {
  const talkers = await readTalkers();

  const talkerIndex = talkers
    .findIndex((t) => t.id === +id);
  if (talkerIndex === -1) return;

  talkers[talkerIndex] = {
    ...talkers[talkerIndex],
    ...talker,
  };

  await fs.writeFile(path, JSON.stringify(talkers, null, 2));

  return talkers[talkerIndex];
};

const deleteTalker = async (id) => {
  const talkers = await readTalkers();

  const talkerIndex = talkers
    .findIndex((t) => t.id === +id);
  if (talkerIndex === -1) return;

  talkers.splice(talkerIndex, 1);
  await fs.writeFile(path, JSON.stringify(talkers, null, 2));
  return true;
};

const findTalkers = async (q, rate, date) => {
  let foundTalkers = await readTalkers();
  if (q) {
    foundTalkers = foundTalkers.filter(
      (t) => t.name.toLowerCase().includes(q.toLowerCase()),
    );
  }
  if (rate) {
    foundTalkers = foundTalkers.filter(
      (t) => t.talk.rate === +rate,
    );
  }
  if (date) {
    foundTalkers = foundTalkers.filter(
      (t) => t.talk.watchedAt.includes(date),
    );
  }
  return foundTalkers;
};

const patchRate = async (id, rate) => {
  const talkers = await readTalkers();
  const talkerIndex = talkers
    .findIndex((t) => t.id === +id);
  if (talkerIndex === -1) return;

  talkers[talkerIndex].talk.rate = +rate;
  await fs.writeFile(path, JSON.stringify(talkers, null, 2));
  return talkers[talkerIndex];
};

module.exports = {
  addTalker,
  updateTalker,
  deleteTalker,
  readTalkers,
  findTalkers,
  patchRate,
};