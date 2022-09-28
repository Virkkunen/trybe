// Suponha que você esteja lidando com carros e, da forma como o problema lhe foi entregue, cada carro é representado dentro de um array. Então seu chefe pede que seja mudado o formato de array para objeto. Crie uma função toObject que, dada uma lista, retorna um objeto representando o carro: 

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo

// const toObject = ([ model, brand, year ]) => { 
//   const obj = {model, brand, year}; 
//   return obj;
// };

const toObject = ([ model, brand, year ]) => ({ model, brand, year });
console.log(toObject(palio));
