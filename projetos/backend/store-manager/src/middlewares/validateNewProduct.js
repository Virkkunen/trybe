const joi = require('joi');

const prodSchema = joi.object({
  name: joi.string().min(5).required().label('name'),
}).messages({
  'any.required': 'NAME_MISSING',
  'string.min': 'NAME_TOO_SHORT',
  'string.empty': 'NAME_EMPTY',
});

const validateNewProduct = (req, res, next) => {
  const { error } = prodSchema.validate(req.body);
  if (error) {
    const err = error.details.map((detail) => detail.message).join('');
    throw new Error(err);
  }
  next();
};

module.exports = validateNewProduct;