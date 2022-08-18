// 
// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:
//
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)
//
const a = 5;
const b = 4;
let resultado;
let opcao;

function adicao (a, b) {
  resultado = a + b;
  console.log(resultado);
}

function subracao (a, b) {
  resultado = a - b;
  console.log(resultado);
}

function multiplicacao (a, b) {
  resultado = a * b;
  console.log(resultado);
}

function divisao (a, b) {
  resultado = a / b;
  console.log(resultado);
}

function modulo (a, b) {
  resultado = a % b;
  console.log(resultado);
}

// Switch

switch(1) {
  case 1:
    adicao(a, b);
    break;
  case 2:
    subtracao(a, b);
    break;
  case 3:
    multiplicacao(a, b);
    break;
  case 4:
    divisao(a, b);
    break;
  case 5:
    modulo(a, b);
    break;
  default:
    console.log("Nenhuma opção escolhida.");
}