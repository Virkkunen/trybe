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

console.log(verificaPalindromo(palavra));