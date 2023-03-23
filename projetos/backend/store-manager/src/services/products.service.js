const { productsModel } = require('../models');

const getAllProducts = async () => {
  const result = await productsModel.getAllProducts();
  if (!result) throw Error('DEFAULT');
  return result;
};

const getProductById = async (id) => {
  const result = await productsModel.getProductById(id);
  if (!result) throw Error('PRODUCT_NOT_FOUND');
  return result;
};

const createProduct = async (product) => {
  const result = await productsModel.createProduct(product);
  if (!result) throw Error('CANT_CREATE_PRODUCT');
  return result;
};

const updateProduct = async (id, name) => {
  const result = await productsModel.updateProduct(id, name);
  if (!result) throw Error('PRODUCT_NOT_FOUND');
  return result;
};

const deleteProduct = async (id) => {
  const result = await productsModel.deleteProduct(id);
  if (result === undefined) throw Error('CANT_DELETE_PRODUCT');
  if (result === 0) throw Error('PRODUCT_NOT_FOUND');
  return result;
};

const findProduct = async (q) => {
  let result;
  if (!q) {
    result = await productsModel.getAllProducts();
    return result;
  }
  result = await productsModel.findProduct(q);
  return result;
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  findProduct,
};