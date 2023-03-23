const app = require('../../../src/app');
const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const connection = require('../../../src/database/connection')
const {
  getAllProductsReturn,
  mockFindProducts,
  getProductByIdReturn,
  mockProductNotFound,
  mockFindProductName,
} = require('../mocks/products.model.mock');
const { productsController } = require('../../../src/controllers');
const { productsService } = require('../../../src/services');

const { expect } = chai;
chai.use(chaiHttp);
chai.use(sinonChai);

describe('/products controller', () => {
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

  it('Lista todos os produtos e retorna 200', async () => {
    const getAllProductsStub = sinon.stub(productsService, 'getAllProducts')
      .resolves(mockFindProducts);
    await productsController.getAllProducts(null, res);
    expect(getAllProductsStub).to.have.been.calledOnce;
    expect(statusStub).to.have.been.calledWith(200);
    expect(jsonStub).to.have.been.calledWith(mockFindProducts);
  });

  it('Lista o produto do ID e retorna 200', async () => {
    const getProductByIdStub = sinon.stub(productsService, 'getProductById')
      .resolves(getProductByIdReturn);
    req = { params: { id: 1 } };
    await productsController.getProductById(req, res);
    expect(getProductByIdStub).to.have.been.calledOnce;
    expect(statusStub).to.have.been.calledWith(200);
    expect(jsonStub).to.have.been.calledWith(getProductByIdReturn);
  });

  it('Retorna 404 quando não acha o produto', async () => {
    const getProductByIdStub = sinon.stub(productsService, 'getProductById')
      .resolves(mockProductNotFound);
    req = { params: { id: 1 } };
    await productsController.getProductById(req, res);
    expect(getProductByIdStub).to.have.been.calledWith(1);
    expect(statusStub).to.have.been.calledWith(200);
    expect(jsonStub).to.have.been.calledWith(mockProductNotFound);
  });

  it('Cria o produto e retorna 201', async () => {
    const name = 'Qwerty';
    const createProductStub = sinon.stub(productsService, 'createProduct')
      .resolves(mockFindProductName);
    req = { body: { name } };
    await productsController.createProduct(req, res);
    expect(createProductStub).to.have.been.calledWith({ name });
    expect(statusStub).to.have.been.calledWith(201);
    expect(jsonStub).to.have.been.calledWith(mockFindProductName);
  });

  xit('Atualiza o produto e retorna 200', async () => {
    const name = 'Qwerty';
    const id = 1;
    const updateProductStub = sinon.stub(productsController, 'updateProduct')
      .resolves(mockFindProductName);
    req = { params: { id: 1 }, body: { name: 'Qwerty' } };
    await productsController.updateProduct(req, res);
    expect(updateProductStub).to.have.been.calledWith(req);
    expect(statusStub).to.have.been.calledWith(200);
    expect(jsonStub).to.have.been.calledWith(mockFindProductName);
  });
});