import React from 'react';
import PropTypes from 'prop-types';

import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    const { pokemonList } = this.props;
    /* passar no app.js */

    return (
      <section>
        <h1>Pokédex</h1>
        <ul>
          { pokemonList.map((poke) => <Pokemon key={ poke.id } pokemon={ poke } />) }
        </ul>
      </section>
    );
  }
}

Pokedex.defaultProps = {
  pokemonList: [],
};

Pokedex.propTypes = {
  pokemonList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),
    image: PropTypes.string,
    moreInfo: PropTypes.string,
  })),
};

export default Pokedex;
