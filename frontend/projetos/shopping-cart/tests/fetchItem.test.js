require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');
const id = 'MLB1615760527';

describe('2 - Teste a função fetchItem', () => {
  test('É uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });

  test('A função utiliza fetch ao passar um parâmetro', async () => {
    await fetchItem(id);
    expect(fetch).toHaveBeenCalled();
  });

  test('O endpoint está correto', async () => {
    const endpoint = 'https://api.mercadolibre.com/items/MLB1615760527';
    await fetchItem(id);
    expect(fetch).toHaveBeenCalledWith(endpoint);
  });

  test('O retorno da função é o objeto esperado', async () => {
    const result = await fetchItem(id);
    // .then não tava rolando e não sei por que
    expect(result).toEqual(item);
  });
  test('O erro quando passada sem parâmetros está correto', async () => {
    function fetchI() {
      fetchItem();
    }
    expect(fetchI).toThrow(/^You must provide an url$/);
  });
});

