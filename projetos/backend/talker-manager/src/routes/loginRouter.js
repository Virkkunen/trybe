const express = require('express');
const crypto = require('crypto');
const validateLogin = require('../middleware/validateLogin');

const loginRouter = express.Router();
const HTTP_OK_STATUS = 200;

loginRouter.post('/', validateLogin, async (req, res) => {
  const token = crypto.randomBytes(8).toString('hex');
  return res.status(HTTP_OK_STATUS).json({ token });
});

module.exports = loginRouter;