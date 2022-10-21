import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    // const { Planets } = this.props;
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {/* <PlanetCard planetName="Terra" planetImage="" /> */}
        {/* { Planets
          .map((planet) => (<PlanetCard
            key={ planet.name }
            planetName={ planet.name }
            planetImage={ planet.image }
          />)) } */}
        {Planets.map((planet) => (<PlanetCard
          key={ planet.name }
          planetName={ planet.name }
          planetImage={ planet.image }
        />))}
      </div>
    );
  }
}

export default SolarSystem;
