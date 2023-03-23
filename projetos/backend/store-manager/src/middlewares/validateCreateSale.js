const joi = require('joi');

const salesSchema = joi.object({
  productId: joi.number().required().label('productId'),
  quantity: joi.number().min(1).greater(0).required()
    .label('quantity'),
}).messages({
  'number.greater': '{#label}_LESS_THAN_ONE',
  'number.min': '{#label}_LESS_THAN_ONE',
  'any.required': '{#label}_MISSING',
});

const validateSale = (sale) => {
  const { error } = salesSchema.validate(sale);
  if (error) {
    const err = error.details.map((detail) => detail.message).join('');
    const errMsg = err.replace(/"/g, '').toUpperCase();
    throw new Error(errMsg);
  }
  return true;
};

const validateCreateSale = (req, res, next) => {
  const sales = req.body;
  const valid = sales.every((sale) => validateSale(sale));
  if (!valid) throw Error('CANT_CREATE_SALE');
  next();
};

module.exports = {
  validateCreateSale,
};