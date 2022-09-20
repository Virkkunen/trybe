const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(productDetails).toBeInstanceOf(Function);
    // Teste se o retorno da função é um array.
    expect(productDetails('teclado', 'mouse')).toBeInstanceOf(Array);
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails('celular', 'carregador')).toHaveLength(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(productDetails('shampoo', 'condicionador')[0]).toBeInstanceOf(Object);
    expect(productDetails('shampoo', 'condicionador')[1]).toBeInstanceOf(Object);
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(productDetails('microfone', 'monitor')[0]).not.toEqual(productDetails('microfone', 'monitor')[1]);
    // Teste se os dois productIds terminam com 123.
    expect(productDetails('camera', 'impressora')[0].details.productId).toBe('camera123')
    expect(productDetails('camera', 'impressora')[1].details.productId).toBe('impressora123')
  });
});
