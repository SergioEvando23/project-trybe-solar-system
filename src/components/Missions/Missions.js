import React from 'react';
import MissionCard from '../MissionCard/MissionCard';
import Title from '../Title';
import moduleMissons from '../../data/missions';
import styled from 'styled-components';

const MissionSection = styled.section`padding-top: clamp(8px, 2vw, 24px);`;
const MissionGrid = styled.div`
  display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr)); gap: 16px;
  @media (min-width: 768px) { gap: 20px; }
`;

class Missions extends React.Component {
  render() {
    return (
      <MissionSection className="mission-area">
        <Title headline="Missões" />
        <MissionGrid className="missions-container" data-testid="missions">
          {moduleMissons.map((item) => (
            <MissionCard
              key={ item.name }
              name={ item.name }
              year={ item.year }
              country={ item.country }
              destination={ item.destination }
            />
          ))}
        </MissionGrid>
      </MissionSection>
    );
  }
}

export default Missions;
