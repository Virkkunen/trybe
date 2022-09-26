const { 
  formattedBookNames, 
  authorAndAge,
  scifiAndFantasy, 
  overSixty,
  scifiAndFantasyAuthors,
  overSixtyAuthors,
  authorWith3DotsOnName,
} = require("./exercises");

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

describe("Exercise 1", () => {
  it("Retorna um array de strings", () => {
    expect(formattedBookNames(books)).toBeInstanceOf(Array);
    expect(typeof formattedBookNames(books)[0]).toBe('string');
  });

  it("Cria um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA", () => {
    const expectedResult = [
      'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
      'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
      'Fundação - Ficção Científica - Isaac Asimov',
      'Duna - Ficção Científica - Frank Herbert',
      'A Coisa - Terror - Stephen King',
      'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
    ];

    expect(formattedBookNames(books)).toEqual(expectedResult);
  });
});

describe("Exercise 2", () => {
  it("Retorna um array de objetos", () => {
    expect(authorAndAge(books)).toBeInstanceOf(Array);
    expect(typeof authorAndAge(books)[0]).toBe('object');
  });
  it("Retorna um array de objetos com as chaves name e age, e valores com o nome do autor e idade que tinha quando o livro foi lançado, em ordem crescente pela idade", () => {
    const expectedResult = [
      {
        age: 31,
        author: 'Isaac Asimov',
      },
      {
        age: 38,
        author: 'H. P. Lovecraft',
      },
      {
        age: 39,
        author: 'Stephen King',
      },
      {
        age: 43,
        author: 'George R. R. Martin',
      },
      {
        age: 45,
        author: 'Frank Herbert',
      },
      {
        age: 62,
        author: 'J. R. R. Tolkien',
      },
    ];
    expect(authorAndAge(books)).toEqual(expectedResult);
  });
});

describe("Exercise 3", () => {
  it("Retorna um array de objetos", () => {
    expect(scifiAndFantasy(books)).toBeInstanceOf(Array);
    expect(typeof scifiAndFantasy(books)[0]).toBe('object');
  });

  it("Cria um array com todos os objetos que possuem gênero ficção científica ou fantasia", () => {
    const expectedResult = [
      { 
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: { name: 'George R. R. Martin', birthYear: 1948 },
        releaseYear: 1991
      },
      {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
        releaseYear: 1954
      },
      {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: { name: 'Isaac Asimov', birthYear: 1920 },
        releaseYear: 1951
      },
      {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: { name: 'Frank Herbert', birthYear: 1920 },
        releaseYear: 1965
      }
    ];

    expect(scifiAndFantasy(books)).toEqual(expectedResult);
  });
});

describe("Exercise 4", () => {
  it("Retorna um array de objetos", () => {
    expect(overSixty(books)).toBeInstanceOf(Array);
    expect(typeof overSixty(books)[0]).toBe('object');
  });

  it("Cria um array formado pelos livros com mais de 60 anos desde sua publicação. Esse array deve ser ordenado do livro mais velho ao mais novo.", () => {
    const expectedResult = [
      {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: { name: 'H. P. Lovecraft', birthYear: 1890 },
        releaseYear: 1928,
      },
      {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: { name: 'Isaac Asimov', birthYear: 1920 },
        releaseYear: 1951,
      },
      {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
        releaseYear: 1954,
      },
    ];
    expect(overSixty(books)).toEqual(expectedResult);
  });
});

describe("Exercise 5", () => {
  it("Retorna um array de strings", () => {
    expect(scifiAndFantasyAuthors(books)).toBeInstanceOf(Array);
    expect(typeof scifiAndFantasyAuthors(books)[0]).toBe('string');
  });

  it("Cria um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.", () => {
    const expectedResult = [
      'Frank Herbert',
      'George R. R. Martin',
      'Isaac Asimov',
      'J. R. R. Tolkien',
    ];
    expect(scifiAndFantasyAuthors(books)).toEqual(expectedResult);
  });
});

describe("Exercise 6", () => {
  it("Retorna um array de strings", () => {
    expect(overSixtyAuthors(books)).toBeInstanceOf(Array);
    expect(typeof overSixtyAuthors(books)[0]).toBe('string');
  });

  it("Cria um array com o nome de todos os livros com mais de 60 anos de publicação.", () => {
    const expectedResult = [
      'O Senhor dos Anéis',
      'Fundação',
      'O Chamado de Cthulhu',
    ];

    expect(overSixtyAuthors(books)).toEqual(expectedResult);
  });
});

describe("Exercise 7", () => {
  it("Retorna uma string", () => {
    expect(typeof authorWith3DotsOnName(books)).toBe('string');
  });

  it("Retorna o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais", () => {
    expect(authorWith3DotsOnName(books)).toBe("O Senhor dos Anéis");
  });
});