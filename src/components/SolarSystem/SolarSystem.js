import React from 'react';
import Title from '../Title';
import PlanetCard from '../PlanetCard/PlanetCard';
import modulePlanet from '../../data/planets';
import styled from 'styled-components';

const SolarSystemSection = styled.section`padding-bottom: clamp(72px, 11vw, 144px);`;
const PlanetGrid = styled.div`
  display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 150px), 1fr));
  gap: clamp(20px, 3vw, 40px) clamp(12px, 2vw, 28px); align-items: end;
`;

class SolarSystem extends React.Component {
  render() {
    return (
      <SolarSystemSection>
        <Title headline="Planetas" />
        <PlanetGrid className="planet-container" data-testid="solar-system">
          {modulePlanet.map((planet) => (
            <PlanetCard
              planetName={ planet.name }
              planetImage={ planet.image }
              key={ planet.name }
            />
          ))}
        </PlanetGrid>
      </SolarSystemSection>
    );
  }
}

export default SolarSystem;
