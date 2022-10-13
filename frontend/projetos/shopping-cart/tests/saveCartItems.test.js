const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  test('Ao executar a função com parâmetro, localStorage.setItem é chamado', async () => {
    await saveCartItems('marioKartItem');
    expect(localStorage.setItem).toHaveBeenCalled();
  });
  test('Ao executar a função com cartItem, localStorage.setItem é chamado com dois parâmetros corretos', async () => {
    await saveCartItems('marioKartItem');
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', 'marioKartItem');
  });
});
