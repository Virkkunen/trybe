const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const connection = require('../../../src/database/connection')
const { salesModel } = require('../../../src/models');
const {
  mockSale,
  mockSaleNoId,
  insertId,
  mockAffectedRows,
} = require('../mocks/sales.model.mock');

const { expect } = chai;
chai.use(chaiHttp);
chai.use(sinonChai);

describe('/sales model', () => {
  afterEach(() => sinon.restore());

  it('Retorna todas as sales', async () => {
    sinon.stub(connection, 'execute').resolves([mockSale]);
    const result = await salesModel.getAllSales();
    expect(result).to.deep.equal(mockSale);
  });

  it('Retorna a sale por ID', async () => {
    sinon.stub(connection, 'execute').resolves([mockSaleNoId]);
    const result = await salesModel.getSaleById(1);
    expect(result).to.deep.equal(mockSaleNoId);
  });

  it('Cria uma data pra sale', async () => {
    sinon.stub(connection, 'execute').resolves([{ insertId }]);
    const result = await salesModel.createSaleDate();
    expect(result).to.deep.equal(insertId);
  });

  it('Cria uma sale', async () => {
    sinon.stub(connection, 'execute').resolves([{ insertId }]);
    const result = await salesModel.createSale(1, 2, 3);
    expect(result).to.deep.equal(insertId);
  });

  it('Apaga uma sale', async () => {
    sinon.stub(connection, 'execute').resolves([mockAffectedRows]);
    const result = await salesModel.deleteSale(1);
    expect(result).to.deep.equal(mockAffectedRows.affectedRows);
  });

  it('Atualiza uma sale', async () => {
    sinon.stub(connection, 'execute').resolves([mockAffectedRows]);
    const result = await salesModel.updateSale(1, 2, 3);
    expect(result).to.deep.equal(mockAffectedRows);
  });
});