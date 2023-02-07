// Desafio 11

function checkArray(arr) {
  for (let i of arr) {
    if (i < 0 || i > 9 || arr.filter((x) => x === i).length > 2) { // o filter salvou vidas
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
}

function generatePhoneNumber(arr) {
  if (arr.length !== 11) return 'Array com tamanho incorreto.'; // esse check fica aqui pro eslint não chorar

  const check = checkArray(arr);
  if (check) return check; // a gambiarra funcionou

  let phone = '(xx) xxxxx-xxxx'; // XGH passando por perto

  for (let i = 0; i < arr.length; i += 1) { // eslint reclama se usar for in sem if
    phone = phone.replace('x', arr[i]);
  }

  return phone;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) { // o npm diz que tá tudo certo mas eu não acho que está
  let check1 = ((lineA + lineB) > lineC);
  let check2 = ((lineA + lineC) > lineB);
  let check3 = ((lineC + lineB) > lineA);
  if (!check1 || !check2 || !check3) return false;
  return true;
}

// Desafio 13
function hydrate(str) {
  const arr = str.replace(/\D/gi, ' ').split(' ').filter(Number).map(Number); // tem formas mais eficientes disso
  let drinks = 0;
  for (let i of arr) {
    drinks += i;
  }
  return drinks === 1 ? `${drinks} copo de água` : `${drinks} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
