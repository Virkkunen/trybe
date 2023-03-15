const HTTP_BAD_STATUS = 400;

const validateTalkerName = (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    return res.status(HTTP_BAD_STATUS)
    .json({ message: 'O campo "name" é obrigatório' });
  }
  if (name.length < 3) {
    return res.status(HTTP_BAD_STATUS)
    .json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  }

  next();
};

const validateTalkerAge = (req, res, next) => {
  const { age } = req.body;

  if (!age) {
    return res.status(HTTP_BAD_STATUS)
    .json({ message: 'O campo "age" é obrigatório' });
  }

  if (!Number.isInteger(age) || age < 18) {
    return res.status(HTTP_BAD_STATUS)
    .json({ message: 'O campo "age" deve ser um número inteiro igual ou maior que 18' });
  }

  next();
};

const validateTalkerTalk = (req, res, next) => {
  const { talk } = req.body;
  // const { watchedAt, rate } = talk;
  if (!talk) {
    return res.status(HTTP_BAD_STATUS)
    .json({ message: 'O campo "talk" é obrigatório' });
  }
  
  // if (!rate) {
  //   return res.status(HTTP_BAD_STATUS)
  //   .json({ message: 'O campo "rate" é obrigatório' });
  // }

  next();
};

const validateWatchedAt = (req, res, next) => {
  const { talk: { watchedAt } } = req.body;
  const dateRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;

  if (!watchedAt) {
    return res.status(HTTP_BAD_STATUS)
    .json({ message: 'O campo "watchedAt" é obrigatório' });
  }
  
  if (!dateRegex.test(watchedAt)) {
    return res.status(HTTP_BAD_STATUS)
    .json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }

  next();
};

const validateRate = (req, res, next) => {
  const { talk: { rate } } = req.body;

  // se colocar !rate, 0 cai nessa validacao
  if (rate === undefined) {
    return res.status(HTTP_BAD_STATUS)
    .json({ message: 'O campo "rate" é obrigatório' });
  }
  if (+rate < 1 || +rate > 5 || !Number.isInteger(rate)) {
    return res.status(HTTP_BAD_STATUS)
    .json({ message: 'O campo "rate" deve ser um número inteiro entre 1 e 5' });
  }

  next();
};

// const validateTalk = (req, res, next) => {
// };

module.exports = {
  validateTalkerName,
  validateTalkerAge,
  validateTalkerTalk,
  validateWatchedAt,
  validateRate,
};