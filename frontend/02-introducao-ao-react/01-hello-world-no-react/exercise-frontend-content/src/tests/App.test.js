import { render, screen } from '@testing-library/react';
import App from '../App';
import Header from '../Header';
import Footer from '../Footer';
import Content from '../Content';

const conteudos = [
  {
    nome: 'JavaScript assíncrono',
    bloco: 9,
    status: 'já aprendi'
  },
  {
    nome: 'Composição de Componentes',
    bloco: 10,
    status: 'estou aprendendo',
  },
  {
    nome: 'Composição de Estados',
    bloco: 11,
    status: 'aprenderei'
  },
  {
    nome: 'Redux',
    bloco: 15,
    status: 'aprenderei'
  },
];

describe('1 - Crie um arquivo chamado Header.js, que representará o componente Header', () => {
  test('O componente foi criado na pasta correta e renderiza uma tag h1', () => {
    render(<Header />);

    const heading = screen.queryByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  test('A tag h1 é renderizada no App com o texto "Conteúdos de Frontend"', () => {
    render(<App />);

    const heading = screen.queryByRole('heading', { level: 1, name: 'Conteúdos de Frontend' });
    expect(heading).toBeInTheDocument();
  })
});

describe('2 - Crie um arquivo chamado Content.js, que representará o componente Content', () => {
  test('O componente Content foi criado na pasta correta e renderiza uma ul', () => {
    render(<Content />);

    const contentList = screen.queryByRole('list');
    expect(contentList).toBeInTheDocument();
  });
  
  test('O componente Content é renderizado no App e com as mensagens corretas', () => {
    render(<App />);
    const contentItems = screen.getAllByRole('listitem');

    contentItems.forEach((item, index) => {
      const { nome, bloco, status } = conteudos[index];

      expect(item).toHaveTextContent(`Eu ${status} o conteúdo ${nome} no bloco ${bloco}`);
    });
  });
});

describe('3 - Crie um arquivo chamado Footer.js, que representará o componente Footer', () => {
  test('O componente Footer foi criado na pasta correta', () => {
    render(<Footer />);

    const footer = screen.queryByTestId('footer');
    expect(footer).toBeInTheDocument();
  });

  test('O componente Footer é renderizado na tela com a mensagem correta dentro de uma tag h3', () => {
    render(<App />);

    const footer = screen.queryByRole('heading', { level: 3, name: 'E isso é só o começo...'});
    expect(footer).toBeInTheDocument();
  });
});
