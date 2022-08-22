//4
//Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
//Bônus: Crie a condição utilizando operador ternário.

function maiorDeIdade (idade) {
  idade >= 18 ? console.log(`A pessoa é maior de idade`) : console.log(`A pessoa é menor de idade`);
}

maiorDeIdade(18); // maior
maiorDeIdade(8); // menor
maiorDeIdade(81); // maior
