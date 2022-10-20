// {
//   id: 25,
//   name: 'Pikachu',
//   type: 'Electric',
//   averageWeight: {
//     value: 6.0,
//     measurementUnit: 'kg',
//   },
//   image: 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png',
//   moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)',
// }

import PropTypes from 'prop-types';
import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <li key={ pokemon.id }>
        <h3>{ pokemon.name }</h3>
        <p>{ pokemon.type }</p>
        <p>
          { /* tem que ter espaço entre valor e simbolo */ }
          { /* string literals dentro do { } */ }
          {`${pokemon.averageWeight.value} ${pokemon.averageWeight.measurementUnit}`}
        </p>
        <img src={ pokemon.image } alt={ pokemon.name } />
      </li>

    );
  }
}

// isRequired
Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape({
      value: PropTypes.number.isRequired,
      measurementUnit: PropTypes.string.isRequired,
    }),
    image: PropTypes.string.isRequired,
    moreInfo: PropTypes.string.isRequired,
  }).isRequired,
};

export default Pokemon;
