const app = require('../../../src/app');
const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const connection = require('../../../src/database/connection')

const { salesController } = require('../../../src/controllers');
const { salesService } = require('../../../src/services');
const { mockSale, mockSaleNoId, mockCreateSales, mockAffectedRows, mockCreateResult } = require('../mocks/sales.model.mock');

const { expect } = chai;
chai.use(chaiHttp);
chai.use(sinonChai);

describe('/sales controller', () => {
  let req;
  let res;
  let statusStub;
  let jsonStub;

  beforeEach(() => {
    statusStub = sinon.stub();
    jsonStub = sinon.stub();
    res = {
      status: statusStub.returnsThis(),
      json: jsonStub,
    };
  });

  afterEach(() => sinon.restore());

  it('Lista todas as sales e retorna 200', async () => {
    sinon.stub(salesService, 'getAllSales').resolves(mockSale);
    await salesController.getAllSales(null, res);
    expect(statusStub).to.have.been.calledWith(200);
    expect(jsonStub).to.have.been.calledWith(mockSale);
  });

  it('Lista a sale por ID e retorna 200', async () => {
    sinon.stub(salesService, 'getSaleById').resolves(mockSaleNoId);
    req = { params: { id: 1 } };
    await salesController.getSaleById(req, res);
    expect(statusStub).to.have.been.calledWith(200);
    expect(jsonStub).to.have.been.calledWith(mockSaleNoId);
  });

  it('Cria uma sale e retorna 201', async () => {
    sinon.stub(salesService, 'createSale').resolves(mockCreateResult);
    req = { body: mockCreateSales };
    await salesController.createSale(req, res);
    expect(statusStub).to.have.been.calledWith(201);
    expect(jsonStub).to.have.been.calledWith(mockCreateResult);
  }); // i want to get off mr tests wild ride

  xit('Apaga uma sale e retorna 204', async () => {
    sinon.stub(salesService, 'deleteSale').resolves();
    req = { params: { id: 1 } };
    await salesController.deleteSale(req, res);
    expect(statusStub).to.have.been.calledWith(204);
    expect(jsonStub).to.have.been.calledWith();
  });

  it('Atualiza uma sale e retorna 200', async () => {
    sinon.stub(salesService, 'updateSale').resolves(mockCreateResult);
    req = { params: { id: 1 }, body: mockCreateSales };
    await salesController.updateSale(req, res);
    expect(statusStub).to.have.been.calledWith(200);
    expect(jsonStub).to.have.been.calledWith(mockCreateResult);
  }); // CHEGA
});