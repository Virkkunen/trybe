// A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5, retorna "fizz" se for divisível apenas por 3, retorna "buzz" se divisível apenas por 5, retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número
//     Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
//     Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
//     Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
//     Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
//     Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado

const  myFizzBuzz = require("./myFizzBuzz");

describe("myFizzBuzz() testing", () => {
  it("Tests if myFizzBuzz(15) returns 'fizzbuzz'", () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
  });
  it("Tests if myFizzBuzz(9) returns 'fizz'", () => {
    expect(myFizzBuzz(9)).toEqual('fizz');
  });
  it("Tests if myFizzBuzz(25) returns 'buzz'", () => {
    expect(myFizzBuzz(25)).toEqual('buzz');
  });
  it("Tests if myFizzBuzz(4) returns 4", () => {
    expect(myFizzBuzz(4)).toEqual(4);
  });
  it("Tests if myFizzBuzz('string') returns false", () => {
    expect(myFizzBuzz('string')).toEqual(false);
  });
});