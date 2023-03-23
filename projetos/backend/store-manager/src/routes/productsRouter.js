const express = require('express');
const { productsController } = require('../controllers');
const validateNewProduct = require('../middlewares/validateNewProduct');

const productsRouter = express.Router();

// productsRouter.get('/', async (req, res) => {
//   const products = await getProducts();
//   if (products) return res.status(200).send(products);
//   return res.status(404).send({ message: 'Product not found' });
// });

productsRouter.get('/search', productsController.findProduct);
productsRouter.get('/', productsController.getAllProducts);
productsRouter.get('/:id', productsController.getProductById);
productsRouter.post('/', validateNewProduct, productsController.createProduct);
productsRouter.put('/:id', validateNewProduct, productsController.updateProduct);
productsRouter.delete('/:id', productsController.deleteProduct);

module.exports = productsRouter;