import { render, screen } from '@testing-library/react';
import App from '../App';
import Pokedex from '../components/Pokedex';

describe('1 - Crie o componente `<Pokedex />`', () => {
  it('O componente `<Pokedex />` renderiza uma tag `h1` com o texto `Pokédex`', () => {
    render(<Pokedex />);
    
    const titleElement = screen.getByRole('heading', { level: 1, name: "Pokédex" });
    expect(titleElement).toBeInTheDocument();
  });

  it('O componente `<Pokedex />` renderiza uma tag `ul`', () => {
    render(<Pokedex />);
    
    const listElement = screen.getByRole('list');
    expect(listElement).toBeInTheDocument();
  });

  it('O componente `<Pokedex />` é renderizado no `App.js`', () => {
    render(<App />);
    
    const titleText = screen.getByText("Pokédex");
    expect(titleText).toBeInTheDocument();
  });
});
