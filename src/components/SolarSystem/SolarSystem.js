import React from 'react';
import Title from '../Title';
import PlanetCard from '../PlanetCard/PlanetCard';
import modulePlanet from '../../data/planets';
import './SolarSystem.css';

class SolarSystem extends React.Component {
  render() {
    return (
      <div>
        <Title headline="Planetas" />
        <div className="planet-container" data-testid="solar-system">
          {modulePlanet.map((planet) => (
            <PlanetCard
              planetName={ planet.name }
              planetImage={ planet.image }
              key={ planet.name }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
