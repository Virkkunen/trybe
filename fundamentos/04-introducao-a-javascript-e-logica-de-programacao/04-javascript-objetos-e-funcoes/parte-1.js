let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.

function helloName (obj) {
  console.log(`Bem-vinda, ${obj.personagem}`);
}

helloName(info);

// 🚀 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. 

function addInfo (obj) {
  obj.recorrente = "Sim";
  console.log(obj);
  console.log('\n');
}

addInfo(info);

// 3- Faça um for/in que mostre todas as chaves do objeto.

function forInKeys (obj) {
  for (key in obj) {
    console.log(key);
  }
  console.log('\n');
}

forInKeys(info);

// 4 - Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto.

function forInValues (obj) {
  for (value in obj) {
    console.log(obj[value]);
  }
  console.log('\n');
}

forInValues(info);

// 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.

function newObject () {
  let info2 = {};
  info2.personagem = "Tio Patinhas";
  info2.origem = "Christmas on Bear Mountain, Dell's Four Color Comics #178";
  info2.nota = "O último MacPatinhas";
  info2.recorrente = "Sim";
  return info2;
}

function infos () {
  info2 = newObject();
  for (key in info) {
    if (info[key] === info2[key]) {
      console.log(`Ambos recorrentes`);
    } else {
      console.log(`${info[key]} e ${info2[key]}`);
    }
  }
}

infos();