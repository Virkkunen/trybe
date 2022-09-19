const { encode, decode } = require("./encodeDecode");

// Para as funções encode e decode, crie os seguintes testes em Jest:

//     Teste se encode e decode são funções;
//     Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
//     Para a função decode, teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente;
//     Teste se as demais letras/números não são convertidos para cada caso;
//     Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro.

describe("encode() and decode()", () => {
  it("Tests if encode() is a function", () => {
    expect(typeof encode).toBe('function');
  });
  it("Tests if decode() is a function", () => {
    expect(typeof decode).toBe('function');
  });
})

describe("encode()", () => {
  it("Tests if vowels a, e, i, o and u are converted to 1, 2, 3, 4 and 5 respectively", () => {
    expect(encode('airplane outro')).toBe('13rpl1n2 45tr4');
  });
  it("Tests if other letters won't be converted", () => {
    expect(encode('bcdfghjklmnpqrstvwxyz')).toBe('bcdfghjklmnpqrstvwxyz');
  });
  it("Tests if return string has the same length as parameter string", () => {
    expect(encode('Hello, World!').length).toBe(13);
  });
})

describe("decode()", () => {
  it("Tests if numbers 1, 2, 3, 4 and 5 are converted to a, e, i, o and u respectively",  () => {
    expect(decode('13rpl1n2 45tr4')).toBe('airplane outro');
  });
  it("Tests if other numbers won't be converted", () => {
    expect(decode('67890')).toBe('67890');
  });
})