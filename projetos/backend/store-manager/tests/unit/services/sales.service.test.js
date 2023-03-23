const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { salesService } = require('../../../src/services');
const { salesModel } = require('../../../src/models');

const {
  mockSale,
  mockSaleNoId,
  insertId,
  mockAffectedRows,
  mockCreateSale,
  mockCreatedSale,
  mockUpdateSale,
} = require('../mocks/sales.model.mock');

const { expect } = chai;
chai.use(chaiHttp);
chai.use(sinonChai);

describe('/sales service', () => {
  afterEach(() => sinon.restore());

  it('Retorna todas as sales', async () => {
    sinon.stub(salesModel, 'getAllSales').resolves(mockSale);
    const result = await salesService.getAllSales();
    expect(result).to.deep.equal(mockSale);
  });

  it('Retorna a sale por ID', async () => {
    sinon.stub(salesModel, 'getSaleById').resolves(mockSaleNoId);
    const result = await salesService.getSaleById(1);
    expect(result).to.deep.equal(mockSaleNoId);
  });

  it('Retorna 404 quando não acha a sale por ID', async () => {
    sinon.stub(salesModel, 'getSaleById').resolves(null);
    try {
      await salesService.getSaleById(1);
      expect.fail('Era pra dar erro');
    } catch (error) {
      expect(error.message).to.equal('SALE_NOT_FOUND');
    }
  });

  it('Cria uma sale', async () => {
    sinon.stub(salesModel, 'createSaleDate').resolves(3);
    sinon.stub(salesModel, 'createSale').resolves(3);
    const result = await salesService.createSale(mockCreateSale);
    expect(result).to.deep.equal(mockCreatedSale);
  });

  it('Apaga uma sale', async () => {
    sinon.stub(salesModel, 'deleteSale').resolves(mockAffectedRows);
    const result = await salesService.deleteSale(1);
    expect(result).to.deep.equal(mockAffectedRows);
  });

  it('Atualiza uma sale', async () => {
    sinon.stub(salesModel, 'updateSale').resolves(mockAffectedRows);
    const result = await salesService.updateSale(1, mockCreateSale);
    expect(result).to.deep.equal(mockUpdateSale);
  });
});