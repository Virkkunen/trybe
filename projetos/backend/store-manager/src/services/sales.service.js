const { salesModel } = require('../models');

const getAllSales = async () => {
  const result = await salesModel.getAllSales();
  if (!result) throw Error('DEFAULT');
  return result;
};

const getSaleById = async (id) => {
  const result = await salesModel.getSaleById(id);
  if (!result || result.length === 0) throw Error('SALE_NOT_FOUND');
  return result;
};

const createSale = async (sales) => {
  const saleId = await salesModel.createSaleDate();
  const salesPromises = sales.map(({ productId, quantity }) => (
    salesModel.createSale(saleId, productId, quantity)
  ));
  await Promise.all(salesPromises);
  const itemsSold = sales.map(({ productId, quantity }) => ({ productId, quantity }));
  return { id: saleId, itemsSold };
};

const deleteSale = async (id) => {
  const result = await salesModel.deleteSale(id);
  if (result === undefined) throw Error('CANT_DELETE_SALE');
  if (result === 0) throw Error('SALE_NOT_FOUND');
  return result; 
};

const updateSale = async (id, sales) => {
  const salesPromises = sales.map(({ productId, quantity }) => (
    salesModel.updateSale(id, productId, quantity)
  ));
  await Promise.all(salesPromises);
  const itemsUpdated = sales.map(({ productId, quantity }) => ({ productId, quantity }));
  return { saleId: id, itemsUpdated };
};

module.exports = {
  getAllSales,
  getSaleById,
  createSale,
  deleteSale,
  updateSale,
};