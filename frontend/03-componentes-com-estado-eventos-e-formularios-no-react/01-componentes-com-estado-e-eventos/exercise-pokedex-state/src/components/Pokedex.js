import React from 'react';
import { arrayOf } from 'prop-types';

import Pokemon from './Pokemon';
import { pokemonType } from '../types';
import pokemons from '../data';

class Pokedex extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     currPkm: 0,
  //     shownPkm: pokemons,
  //   };
  // }
  state = {
    currPkm: 0,
    shownPkm: pokemons,
  };

  nextPkm = () => {
    const { pokemonList } = this.props;
    console.log(pokemonList);
    const { currPkm, shownPkm } = this.state;

    // hora do if else clássico
    if (currPkm < shownPkm.length - 1) {
      this.setState((prevState) => ({
        currPkm: prevState.currPkm + 1,
      }));
    } else {
      this.setState(() => ({ currPkm: 0 }));
    }
  };

  filterPkm = (e) => {
    const { shownPkm } = this.state;
    const type = e.target.value;
    const filtered = shownPkm.filter((pkm) => pkm.type === type);
    console.log(filtered);
    this.setState(() => ({
      currPkm: 0,
      shownPkm: filtered,
    }));
  };

  render() {
    const { currPkm, shownPkm } = this.state;
    return (
      <>
        <h1> Pokédex </h1>
        <div className="pokedex">
          {/* renderiza todos de uma vez
          { pokemonList
            .map((pokemon) => <Pokemon key={ pokemon.id } pokemon={ pokemon } />) } */}
          <Pokemon pokemon={ shownPkm[currPkm] } />
          <button type="button" onClick={ this.nextPkm }>Próximo pokémon</button>
          <button
            type="button"
            onClick={ this.filterPkm }
            style={ { backgroundColor: 'red', color: 'white' } }
            value="Fire"
          >
            Fire
          </button>
          <button
            type="button"
            onClick={ this.filterPkm }
            style={ { backgroundColor: 'purple', color: 'white' } }
            value="Psychic"
          >
            Psychic
          </button>
        </div>
      </>
    );
  }
}

Pokedex.defaultProps = {
  pokemonList: [],
};

Pokedex.propTypes = {
  pokemonList: arrayOf(pokemonType),
};

export default Pokedex;
