import React from 'react';
import MissionCard from '../MissionCard/MissionCard';
import Title from '../Title';
import moduleMissons from '../../data/missions';
import './Missions.css';

class Missions extends React.Component {
  render() {
    return (
      <div className="mission-area">
        <Title headline="Missões" />
        <div className="missions-container" data-testid="missions">
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
      </div>
    );
  }
}

export default Missions;
