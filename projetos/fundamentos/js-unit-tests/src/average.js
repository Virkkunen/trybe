/*
  A função average recebe um array de tamanho variável e retorna a média dos valores recebidos.
  Caso a função receba algum valor não numérico ou um array vazio, o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

function checkNumber(arr) {
  for (let i of arr) {
    if (typeof i !== 'number') return false;
  }
  return true;
}

const average = (arr) => {
  if (!arr.length) return undefined;
  
  const number = checkNumber(arr);
  if (!number) return undefined;

  let result = 0;

  for (let i of arr) {
    result += i;
  }

  return Math.round((result / arr.length));
};

// console.log(average([1, 2, 3, '4', 5]))

module.exports = average;
