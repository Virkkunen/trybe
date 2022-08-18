// Cálculo salário líquido/base
const salario = 5189.82;

// definir inss
// INSS (Instituto Nacional do Seguro Social)
//     Salário bruto até R$ 1.556,94: alíquota de 8%
//     Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
//     Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
//     Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
function calculaINSS (salario) {
  if (salario <= 1556.94) {
     return (salario * 0.08);
  } else if (salario <= 2594.92) {
    return (salario * 0.09);
  } else if (salario <= 5189.82) {
    return (salario * 0.11);
  } else if (salario > 5189.82) {
    return 570.88;
  }
}

function calculaSalarioBase () {
  const salarioBase = (salario - calculaINSS(salario));
  return salarioBase;
}

// IR (Imposto de Renda)
//     Até R$ 1.903,98: isento de imposto de renda
//     De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
//     De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
//     De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
//     Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
function calculaIR () {
  const salarioBase = calculaSalarioBase();

  if (salarioBase <= 1903.98) {
    return 0;
  } else if (salarioBase <= 2826.65) {
    return ((salarioBase * 0.075) - 142.80);
  } else if (salarioBase <= 3751.05) {
    return ((salarioBase * 0.15) - 354.80);
  } else if (salarioBase <= 4664.68) {
    return ((salarioBase * 0.225) - 636.13);
  } else if (salarioBase >= 4664.69) {
    return ((salarioBase * 0.275) - 869.36);
  }
}

function resultado () {
  const resultado = (calculaSalarioBase() - calculaIR());
  return (Math.round(resultado * 100) / 100).toFixed(2);
}

console.log(`Salário bruto: R$${salario}\nSalário líquido: R$${resultado()}`);