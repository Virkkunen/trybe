const express = require('express');
const errorHandling = require('./middlewares/errorHandling');

const { productsRouter } = require('./routes/index');
const salesRouter = require('./routes/salesRouter');

const app = express();
app.use(express.json());
app.use('/products', productsRouter);
app.use('/sales', salesRouter);

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use(errorHandling);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;