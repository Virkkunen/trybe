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

function valorRepetido (arr) {
  let obj = {};

  for (i in arr) {
    obj[arr[i]] = 1;
  }

  console.log(obj);
}

valorRepetido(arrayInteiros);

// desisto temporariamente