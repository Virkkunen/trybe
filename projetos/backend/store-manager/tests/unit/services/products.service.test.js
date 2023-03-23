const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const {
  getAllProductsReturn,
  getProductByIdReturn,
  insertIdProductReturn,
  createProductMock,
  mockFindProductName,
  mockFindProducts,
} = require('../mocks/products.model.mock');

const { productsService } = require('../../../src/services');
const { productsModel } = require('../../../src/models');

const { expect } = chai;
chai.use(chaiHttp);
chai.use(sinonChai);

describe('/products service', () => {
  afterEach(() => sinon.restore());

  it('Retorna todos os produtos', async () => {
    sinon.stub(productsModel, 'getAllProducts').resolves(getAllProductsReturn);
    const result = await productsService.getAllProducts();
    expect(result).to.deep.equal(getAllProductsReturn);
  });

  it('Retorna o produto correto', async () => {
    sinon.stub(productsModel, 'getProductById').resolves(getProductByIdReturn);
    const result = await productsService.getProductById(1);
    expect(result).to.deep.equal(getProductByIdReturn);
  });

  it('Cria o produto corretamente', async () => {
    sinon.stub(productsModel, 'createProduct').resolves(insertIdProductReturn);
    const result = await productsService.createProduct(createProductMock);
    expect(result).to.deep.equal(insertIdProductReturn);
  });

  it('Atualiza o produto', async () => {
    const expected = [{ id: 2, name: 'Update' }];
    sinon.stub(productsModel, 'updateProduct').resolves(expected);
    const result = await productsService.updateProduct(2, 'Update');
    expect(result).to.deep.equal(expected);
  });

  it('Apaga o produto', async () => {
    const expected = { affectedRows: 1 };
    sinon.stub(productsModel, 'deleteProduct').resolves(expected);
    const result = await productsService.deleteProduct(1);
    expect(result).to.equal(expected);
  });

  it('Retorna 404 quando não acha o produto por ID', async () => {
    sinon.stub(productsModel, 'getProductById').resolves(null);
    try {
      await productsService.getProductById(1);
      expect.fail('Era pra dar erro');
    } catch (error) {
      expect(error.message).to.equal('PRODUCT_NOT_FOUND');
    }
  });

  it('Retorna 404 quando não acha o produto pra atualizar', async () => {
    sinon.stub(productsModel, 'updateProduct').resolves(null);
    try {
      await productsService.updateProduct(1);
      expect.fail('Era pra dar erro');
    } catch (error) {
      expect(error.message).to.equal('PRODUCT_NOT_FOUND');
    }
  });

  it('Retorna 404 quando não acha o produto pra apagar', async () => {
    sinon.stub(productsModel, 'deleteProduct').resolves(null);
    try {
      await productsService.deleteProduct(1);
      expect.fail('PRODUCT_NOT_FOUND');
    } catch (error) {
      expect(error.message).to.equal('PRODUCT_NOT_FOUND');
    }
  });

  it('Acha o produto pelo nome', async () => {
    sinon.stub(productsModel, 'findProduct').resolves(mockFindProductName);
    const result = await productsService.findProduct(mockFindProductName.name);
    expect(result).to.deep.equal(mockFindProductName);
  });

  it('Retorna todos os produtos se não tiver nome', async () => {
    sinon.stub(productsModel, 'getAllProducts').resolves(mockFindProducts);
    const result = await productsService.findProduct();
    expect(result).to.deep.equal(mockFindProducts);
  });
});