function fatorial (num) {
  let result = 1; // resultado sempre será no mínimo 1
  for (let i = 2; i <= num ; i += 1) {
    result = (result * i);
  }
  return result;
}

console.log(fatorial(10));

function inverter (str) {
  result = "";
  for (let i = str.length - 1; i >= 0; i -= 1) {
    result += str[i];
  }
  return result;
}

console.log(inverter("tryber"));

function maiorPalavra () {
  const array = ['java', 'javascript', 'python', 'html', 'css'];
  let maior = "";
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].length > maior.length) maior = array[i];
  }
  return maior;
}

console.log(maiorPalavra());

function menorPalavra () {
  const array = ['java', 'javascript', 'python', 'html', 'css'];
  let menor = array[0];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].length < menor.length) menor = array[i];
  }
  return menor;
}

console.log(menorPalavra());