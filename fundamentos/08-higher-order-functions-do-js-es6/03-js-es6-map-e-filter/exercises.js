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

// Adicione o código do exercício aqui:

const formattedBookNames = (bookList) => bookList.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);

const authorAndAge = (bookList) => bookList.map((book) => {
  const authors = {
    age: (book.releaseYear - book.author.birthYear),
    author: book.author.name,
  };
  return authors;
}).sort((a, b) => a.age - b.age);

const scifiAndFantasy = (bookList) => bookList.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica');

const overSixty = (bookList) => bookList.filter((book) => 2022 - book.releaseYear > 60).sort((a, b) => a.releaseYear - b.releaseYear);

const scifiAndFantasyAuthors = (bookList) => scifiAndFantasy(bookList).map((book) => book.author.name).sort();

const overSixtyAuthors = (bookList) => overSixty(bookList).sort((a, b) => b.releaseYear - a.releaseYear).map((book) => book.name);

const authorWith3DotsOnName = (bookList) => bookList.find((book) => book.author.name === 'J. R. R. Tolkien').name;

console.log(authorWith3DotsOnName(books));

module.exports = { 
  formattedBookNames, 
  authorAndAge, 
  scifiAndFantasy,
  overSixty,
  scifiAndFantasyAuthors,
  overSixtyAuthors,
  authorWith3DotsOnName,
};