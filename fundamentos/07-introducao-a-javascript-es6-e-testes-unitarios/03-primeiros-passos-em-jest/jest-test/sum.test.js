const sum = require("./sum");

// A função sum(a, b) retorna a soma do parâmetro a com o b
//     Teste se o retorno de sum(4, 5) é 9
//     Teste se o retorno de sum(0, 0) é 0
//     Teste se a função sum lança um erro quando os parâmetros são 4 e "5"(string 5)
//     Teste se a mensagem de erro é “parameters must be numbers” quando realizar a chamada sum(4, "5")

describe("sum() function testing", () => {
  it("Tests if sum(4, 5) returns 9", () => {
    expect(sum(4, 5)).toEqual(9);
  });
  it("Tests if sum(0, 0) returns 0", () => {
    expect(sum(0, 0)).toEqual(0);
  });
  it("Tests if function throws error when string is passed as parameter", () => {
    expect(() => { sum(0, '5') }).toThrow();
  });
  it("Tests if error message is 'parameters must be numbers' when string is passed as parameter", () => {
    expect(() => { sum(0, '5') }).toThrowError('parameters must be numbers');
  });
});