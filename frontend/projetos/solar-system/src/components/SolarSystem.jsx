import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    // const { Planets } = this.props;
    return (
      <div data-testid="solar-system" className='solar-system'>
        <Title headline="Planetas" />
        <div className='planets'>
          {Planets.map((planet) => (<PlanetCard
            key={ planet.name }
            planetName={ planet.name }
            planetImage={ planet.image }
          />))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
