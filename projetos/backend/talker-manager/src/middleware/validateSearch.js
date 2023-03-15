const HTTP_BAD_STATUS = 400;

const validateSearchRate = (req, res, next) => {
  const { rate } = req.query;
  if (!rate) return next();
  if (+rate < 1 || +rate > 5 || !Number.isInteger(+rate)) {
    return res.status(HTTP_BAD_STATUS)
    .json({ message: 'O campo "rate" deve ser um número inteiro entre 1 e 5' });
  }
  next();
};

const validateSearchDate = (req, res, next) => {
  const { date } = req.query;
  if (!date) return next();
  const dateRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;

  if (!dateRegex.test(date)) {
    return res.status(HTTP_BAD_STATUS)
    .json({ message: 'O parâmetro "date" deve ter o formato "dd/mm/aaaa"' });
  }

  next();
};

const validatePatchRate = (req, res, next) => {
  const { rate } = req.body;
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

module.exports = {
  validateSearchRate,
  validateSearchDate,
  validatePatchRate,
};