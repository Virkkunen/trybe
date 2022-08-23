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
}

addInfo(info);

// 3- Faça um for/in que mostre todas as chaves do objeto.