import React from 'react';
import './App.css';
import Pokedex from './components/Pokedex';
import pokemonList from './data';

function App() {
  return (
    <main>
      <Pokedex pokemonList={ pokemonList } />
    </main>
  );
}

export default App;
