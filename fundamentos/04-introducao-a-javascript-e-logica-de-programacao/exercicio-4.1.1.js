const a = 5;
const b = 4;
const c = -9;
let resultado;

function adicao (a, b) {
  resultado = a + b;
  console.log("Adição:", resultado);
}

function subtracao (a, b) {
  resultado = a - b;
  console.log("Subtração:", resultado);
}

function multiplicacao (a, b) {
  resultado = a * b;
  console.log("Multiplicacão:", resultado);
}

function divisao (a, b) {
  resultado = a / b;
  console.log('Divisão:', resultado);
}

function modulo (a, b) {
  resultado = a % b;
  console.log('Módulo:', resultado);
}

function maior (a, b) {
  if (a > b) {
    return a;
  } else if (a < b) {
    return b;
  } else {
    return null;
  }
}

function maiorDeTres (a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else if (c > a && c > b) {
    return c;
  } else return null;
}

// Switch
console.log(`${a}, ${b} e ${c}\n`);
for (let i = 0; i < 7; i++) {
  switch(i) {
    case 0:
      adicao(a, b);
      break;
    case 1:
      subtracao(a, b);
      break;
    case 2:
      multiplicacao(a, b);
      break;
    case 3:
      divisao(a, b);
      break;
    case 4:
      modulo(a, b);
      break;
    case 5:
      console.log("Maior:", maior(a, b));
      break;
    case 6:
      console.log("Maior dos 3:", maiorDeTres(a, b, c));
      break;
    default:
      console.log("Nenhuma opção escolhida.");
  }
}