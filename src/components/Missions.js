import React from 'react';
import MissionCard from './MissionCard';
import Title from './Title';
import moduleMissons from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {moduleMissons.map((item) => (
          <MissionCard
            key={ item.name }
            name={ item.name }
            year={ item.year }
            country={ item.country }
            destination={ item.destination }
          />
        ))}
      </div>
    );
  }
}

export default Missions;
