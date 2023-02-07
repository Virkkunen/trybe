import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions" className='missions-full'>
        <Title headline="Missões" />
        <div className='missions'>
          {missions.map((m) => (<MissionCard
            key={ m.name }
            name={ m.name }
            year={ m.year }
            country={ m.country }
            destination={ m.destination }
          />))}
        </div>
      </div>
    );
  }
}

export default Missions;
