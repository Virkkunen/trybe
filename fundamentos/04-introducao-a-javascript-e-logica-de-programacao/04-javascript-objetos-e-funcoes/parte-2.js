// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

// Exemplo de palíndromo: arara.
// verificaPalindrome('arara');
// Retorno esperado: true
// verificaPalindrome('desenvolvimento');
// Retorno esperado: false

let palavra = "Arara";

function verificaPalindromo (str) {
  strInvertida = str.toLowerCase().split('').reverse().join("");
  return strInvertida === str.toLowerCase();
}

console.log(verificaPalindromo(palavra), '\n');

// 🚀 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

// Array de teste: [2, 3, 2, 5, 8, 2, 3];.
// Valor esperado no retorno da função: 2.

const arrayInteiros = [2, 3, 2, 5, 8, 2, 3];
const arrayGrande = [200, 300, 200, 50, 800, 200, 300];


function valorRepetido (arr) {
  // XGH pesado nesse exercício
  let count = [];
  let biggest = 0, limit = 0;

  // coloca os valores do array como chaves do objeto
  // for (i in arr) {
  //   obj[arr[i]] = 1;
  // }

  // definindo qual o limite do array
  // não encontrará boas práticas nessa função
  for (let i of arr) if (i > limit) limit = i;

  console.log(limit);

  // cria array com 0s, indice = numero da array - 1
  for (let i = 0; i <= limit; i += 1) {
    count.push(0);
  }

  // +1 se o numero repete (não tem 1 no array, então index 0 = 0; tem 3 2, então index 1 = 3)
  for (let key of arr) {
    count[key - 1] += 1;
  }
  console.log(count)

  // verifica qual é o maior núemro do array novo
  for (let key of count) biggest = key > biggest ? key : biggest;

  // e ai retorna o índice do maior numero desse array + 1
  return (count.indexOf(biggest) + 1);

}

console.log(valorRepetido(arrayGrande));