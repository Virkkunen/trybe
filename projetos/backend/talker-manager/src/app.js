const express = require('express');
const { loginRouter, talkerRouter } = require('./routes/index');

const HTTP_OK_STATUS = 200;
const app = express();

app.use(express.json());
app.use('/login', loginRouter);
app.use('/talker', talkerRouter);

app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

module.exports = app;