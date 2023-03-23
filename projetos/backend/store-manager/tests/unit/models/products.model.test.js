const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const connection = require('../../../src/database/connection')
const {
  getAllProductsReturn,
  getProductByIdReturn,
  getProductByIdError,
  insertIdProductReturn,
  createProductMock,
} = require('../mocks/products.model.mock');
const { productsModel } = require('../../../src/models');
const { query } = require('../../../src/database/connection');

const { expect } = chai;
chai.use(chaiHttp);
chai.use(sinonChai);

describe('/products model', () => {
  afterEach(() => sinon.restore());

  it('Retorna todos os produtos', async () => {
    sinon.stub(connection, 'execute').resolves([getAllProductsReturn]);
    const result = await productsModel.getAllProducts();
    expect(result).to.equal(getAllProductsReturn);
  });

  it('Retorna o produto correto', async () => {
    sinon.stub(connection, 'execute').resolves([getProductByIdReturn]);
    const result = await productsModel.getProductById(1);
    expect([result]).to.deep.equal(getProductByIdReturn);
  });

  it('Cria o produto corretamente', async () => {
    sinon.stub(connection, 'execute').resolves([insertIdProductReturn]);
    const result = await productsModel.createProduct(createProductMock);
    // eu nem sei mais o porque dos []
    expect([result]).to.deep.equal(insertIdProductReturn);
  });

  it('Atualiza o produto', async () => {
    const expected = [{ id: 2, name: 'Update' }];
    sinon.stub(connection, 'execute').resolves([expected]);
    const result = await productsModel.updateProduct(2, 'Update');
    expect([result]).to.deep.equal(expected);
  });

  it('Apaga o produto', async () => {
    const expected = { affectedRows: 1 };
    sinon.stub(connection, 'execute').resolves([expected]);
    const result = await productsModel.deleteProduct(1);
    expect(result).to.equal(expected.affectedRows);
  });
});