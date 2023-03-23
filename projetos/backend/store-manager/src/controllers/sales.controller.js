const { salesService } = require('../services');

const getAllSales = async (req, res) => {
  const result = await salesService.getAllSales();
  if (result) return res.status(200).json(result);
};

const getSaleById = async (req, res) => {
  const { id } = req.params;
  const result = await salesService.getSaleById(id);
  if (result) return res.status(200).json(result);
};

const createSale = async (req, res) => {
  const sales = req.body;
  const result = await salesService.createSale(sales);
  if (result) return res.status(201).json(result);
};

const deleteSale = async (req, res) => {
  const { id } = req.params;
  const result = await salesService.deleteSale(id);
  if (result) return res.status(204).end();
};

const updateSale = async (req, res) => {
  const { id } = req.params;
  const sales = req.body;
  const result = await salesService.updateSale(id, sales);
  if (result) return res.status(200).json(result);
};

module.exports = {
  getAllSales,
  getSaleById,
  createSale,
  deleteSale,
  updateSale,
};