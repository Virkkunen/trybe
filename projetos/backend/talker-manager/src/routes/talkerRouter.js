const express = require('express');
const connection = require('../database/connect');
const {
  addTalker,
  updateTalker,
  deleteTalker,
  readTalkers,
  findTalkers,
  patchRate,
} = require('../helpers/fileOps');
const {
  validateSearchRate,
  validateSearchDate,
  validatePatchRate,
} = require('../middleware/validateSearch');
const { 
  validateTalkerName,
  validateTalkerAge,
  validateTalkerTalk,
  validateWatchedAt,
  validateRate,
} = require('../middleware/validateTalker');
const validateToken = require('../middleware/validateToken');

const HTTP_OK_STATUS = 200;
const HTTP_CREATED_STATUS = 201;
const HTTP_NOCONTENT_STATUS = 204;
const HTTP_NOTFOUND_STATUS = 404;

const talkerRouter = express.Router();

talkerRouter.get(
  '/search',
  validateToken,
  validateSearchRate,
  validateSearchDate,
  async (req, res) => {
    const { q, rate, date } = req.query;
    const talkers = await readTalkers();
    if (!q && !rate && !date) return res.status(HTTP_OK_STATUS).json(talkers);
    const foundTalkers = await findTalkers(q, rate, date);
    if (foundTalkers.length === 0) {
      return res.status(HTTP_OK_STATUS).json([]);
    }
    return res.status(HTTP_OK_STATUS).json(foundTalkers);
  },
);

talkerRouter.get('/db', async (req, res) => {
  connection.query('SELECT * FROM talkers', (err, results, _fields) => {
    if (err) throw err;
    if (!results) return res.status(HTTP_OK_STATUS).json([]);
    const formatResults = results.map((r) => ({
      age: r.age,
      id: r.id,
      name: r.name,
      talk: {
        rate: r.talk_rate,
        watchedAt: r.talk_watched_at,
      },
    }));
    return res.status(HTTP_OK_STATUS).json(formatResults);
  });
});

talkerRouter.get('/', async (req, res) => {
  const talkers = await readTalkers();
  res.status(HTTP_OK_STATUS).json(talkers);
});

talkerRouter.get('/:id', async (req, res) => {
  const talkers = await readTalkers();
  const talker = talkers.find((t) => t.id === +req.params.id);
  if (!talker) {
    return res.status(HTTP_NOTFOUND_STATUS)
      .json({ message: 'Pessoa palestrante não encontrada' });
  }
  return res.status(HTTP_OK_STATUS).json(talker);
});

talkerRouter.post(
  '/', 
  validateToken,
  validateTalkerName,
  validateTalkerAge,
  validateTalkerTalk,
  validateWatchedAt,
  validateRate,
  async (req, res) => {
    const newTalker = await addTalker(req.body);

    res.status(HTTP_CREATED_STATUS).json(newTalker);
  },
);

talkerRouter.put(
  '/:id',
  validateToken,
  validateTalkerName,
  validateTalkerAge,
  validateTalkerTalk,
  validateWatchedAt,
  validateRate,
  async (req, res) => {
    const talker = req.body;
    const { id } = req.params;
    const updatedTalker = await updateTalker(id, talker);
    if (!updatedTalker) {
      return res.status(HTTP_NOTFOUND_STATUS)
      .json({ message: 'Pessoa palestrante não encontrada' });
    }
    return res.status(HTTP_OK_STATUS).json(updatedTalker);
  },
);

talkerRouter.delete('/:id', validateToken, async (req, res) => {
  const { id } = req.params;
  const deletedTalker = await deleteTalker(id);
  if (!deletedTalker) {
    return res.status(HTTP_NOTFOUND_STATUS)
    .json({ message: 'Pessoa palestrante não encontrada' });
  }
  return res.status(HTTP_NOCONTENT_STATUS)
  .json({ message: 'Palestrante apagado com sucesso' });
});

talkerRouter.patch('/rate/:id', validateToken, validatePatchRate, async (req, res) => {
  const { id } = req.params;
  const { rate } = req.body;
  const patchedTalker = await patchRate(id, rate);
  if (!patchedTalker) {
    return res.status(HTTP_NOTFOUND_STATUS)
    .json({ message: 'Pessoa palestrante não encontrada' });
  }
  return res.status(HTTP_NOCONTENT_STATUS).end();
});

module.exports = talkerRouter;