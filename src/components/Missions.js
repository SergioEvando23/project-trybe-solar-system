import React from 'react';
import MissionCard from './MissionCard';
import Title from './Title';
import moduleMissons from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <MissionCard
          name={ moduleMissons[0].name }
          year={ moduleMissons[0].year }
          country={ moduleMissons[0].country }
          destination={ moduleMissons[0].destination }
        />
      </div>
    );
  }
}

export default Missions;
