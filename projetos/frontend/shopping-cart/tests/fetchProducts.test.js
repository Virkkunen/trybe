require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  test('fetchProducts é uma função', () => {
    expect(typeof fetchProducts ).toBe('function');
  });

  test('Testa se o fetch é chamado quando passar "computador" como parâmetro', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });

  test('Testa se fetch usa o endpoint correto ao passar o parâmetro "computador"', async () => {
    // to have been called with
    // checa se fetch usou essa url
    const expectedUrl = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith(expectedUrl);
  });

  test('Testa se o retorno da função com parâmetro "computador" é o objeto esperado',  async () => {
    const result = await fetchProducts('computador');
    // .then não tava rolando e não sei por que
    expect(result).toEqual(computadorSearch);
  });

  test('se o retorno de fetchProducts sem parâmetro é a mensagem correta', async () => {
    function fetchP() {
      fetchProducts();
    }
    expect(fetchP).toThrow(/^You must provide an url$/);
    // expect(fetchProducts).toThrow(/^You must provide an url$/);
  });
});
