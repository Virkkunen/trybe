const { productsModel } = require('../models');

const validateProductId = async (req, res, next) => {
  const sales = req.body;
  const salesPromises = sales.map(({ productId }) => (productsModel.getProductById(productId)));
  const products = await Promise.all(salesPromises);
  const productsExist = products.every((prod) => prod !== undefined);
  if (!productsExist) throw Error('PRODUCT_NOT_FOUND');
  next();
};

module.exports = validateProductId;