const mockSale = [{
  saleId: 1,
  date: '2023-03-22T19:24:00.000Z',
  productId: 2,
  quantity: 10,
}];

const mockSaleNoId = [{
  date: '2023-03-22T19:24:00.000Z',
  productId: 2,
  quantity: 10,
}];

const insertId = 1;

const mockAffectedRows = { affectedRows: 1 };
// 100%  confuso: create sale, created sale, create sales
const mockCreateSale = [{ productId: 1, quantity: 2 }];

const mockCreateSales = [
  { productId: 1, quantity: 2 },
  { productId: 3, quantity: 4 }
];

const mockCreatedSale = {
  "id": 3,
  "itemsSold": [
    {
      "productId": 1,
      "quantity": 2
    }
  ]
};

const mockUpdateSale = {
  itemsUpdated: [
    {
      productId: 1,
      quantity: 2,
    }
  ],
  saleId: 1,
};

const mockCreateResult = { id: 1, itemsSold: mockCreateSales };

module.exports = {
  mockSale,
  mockSaleNoId,
  insertId,
  mockAffectedRows,
  mockCreateSale,
  mockCreatedSale,
  mockUpdateSale,
  mockCreateSales,
  mockCreateResult,
};