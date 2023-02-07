// Desafio 1
function compareTrue(param1, param2) {
  return param1 === true && param2 === true;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  return str.split(' ');
}

// Desafio 4
function concatName(arr) {
  return `${arr[arr.length - 1]}, ${arr[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(arr) {
  let highest = Math.max.apply(0, arr); // leitura de funções max me levou a isso
  let count = 0;

  // for (let i of arr) {
  //   if (i > highest) {
  //     highest = i;
  //   }
  // }

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === highest) {
      count += 1;
    }
  }

  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = Math.abs(mouse - cat1); // Math.abs converte número pra positivo
  let distance2 = Math.abs(mouse - cat2);

  if (distance1 < distance2) return 'cat1';
  if (distance2 < distance1) return 'cat2';
  if (distance1 === distance2) return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzOperations(arr, i) {
  let str = '';

  if (arr[i] % 15 === 0) {
    str = 'fizzBuzz';
  } else if (arr[i] % 3 === 0) {
    str = 'fizz';
  } else if (arr[i] % 5 === 0) {
    str = 'buzz';
  } else {
    str = 'bug!';
  }
  return str;
}
// obrigado Gabriel Fonseca por fazer essa função ser possível sem o eslint chorando
function fizzBuzz(arr) {
  let result = [];
  // for (let i of arr) {
  //   if (i % 15 === 0) { // divisivel por 3 e por 5 == divisivel por 15
  //     result.push('fizzBuzz');
  //   } else if (i % 3 === 0) {
  //     result.push('fizz');
  //   } else if (i % 5 === 0) {
  //     result.push('buzz');
  //   } else result.push('bug!');
  // }
  for (let i = 0; i < arr.length; i += 1) { // eslint enchendo o saco novamente que for in não tem if
    const value = fizzOperations(arr, i);
    result.push(value);
  }
  return result;
}

// Desafio 9
function encode(str) {
  let result = str.replace(/[aeiou]/gi, function (key) {
    const change = {
      a: '1',
      e: '2',
      i: '3',
      o: '4',
      u: '5',
    };
    return change[key];
  });
  return result;
}
function decode(str) {
  let result = str.replace(/[12345]/gi, function (key) {
    const change = {
      1: 'a',
      2: 'e',
      3: 'i',
      4: 'o',
      5: 'u',
    };
    return change[key];
  });
  return result;
} // pesquisar melhor depois, tentativa e erro deu certo mas não entendi direito como funciona

// Desafio 10
function techList(arr, str) {
  if (arr.length <= 0 || !str) return 'Vazio!';
  arr.sort((a, b) => a.localeCompare(b));
  // ^^^
  // faz função callback, se retorna negativo, primeiro elemento vai antes do segundo
  // se a é antes do b, returna falso; se a é depois de b, retorna true
  // o sort então ajeita de acordo com esses returns de cada elemento

  let result = [];

  for (let i of arr) {
    result.push({ tech: i, name: str });
  }
  return result;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
