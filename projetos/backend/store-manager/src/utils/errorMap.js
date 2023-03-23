const errorMap = {
  PRODUCT_NOT_FOUND: {
    message: 'Product not found',
    status: 404,
  },
  SALE_NOT_FOUND: {
    message: 'Sale not found',
    status: 404,
  },
  CANT_CREATE_PRODUCT: {
    message: 'Can\'t create product',
    status: 400,
  },
  CANT_CREATE_SALE: {
    message: 'Can\'t create sale',
    status: 400,
  },
  NAME_EMPTY: {
    message: '"name" is not allowed to be empty',
    status: 422,
  },
  NAME_TOO_SHORT: {
    message: '"name" length must be at least 5 characters long',
    status: 422,
  },
  NAME_MISSING: {
    message: '"name" is required',
    status: 400,
  },
  PRODUCTID_MISSING: {
    message: '"productId" is required',
    status: 400,
  },
  QUANTITY_MISSING: {
    message: '"quantity" is required',
    status: 400,
  },
  QUANTITY_LESS_THAN_ONE: {
    message: '"quantity" must be greater than or equal to 1',
    status: 422,
  },
  PRODUCTID_NAN: {
    message: '"productId" must be a number',
    status: 422,
  },
  CANT_UPDATE_PRODUCT: {
    message: 'Can\'t update product',
    status: 400,
  },
  DEFAULT: {
    message: 'Internal Server Error',
    status: 500,
  },
};

module.exports = errorMap;