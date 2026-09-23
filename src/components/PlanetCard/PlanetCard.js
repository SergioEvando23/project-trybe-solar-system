import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Planet = styled.article`display: grid; justify-items: center; gap: 14px; min-width: 0; padding: 8px;`;
const PlanetImage = styled.img`
  display: block; width: min(100%, 208px); height: auto; aspect-ratio: 1; object-fit: contain;
  filter: drop-shadow(0 10px 18px rgba(0, 0, 0, 0.28));
  @media (min-width: 1200px) { width: min(100%, 240px); }
`;
const PlanetName = styled.p`margin: 0; color: #e8edff; font-size: clamp(1rem, 1.5vw, 1.125rem); font-weight: 600; line-height: 1.35;`;

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <Planet className="planet-card-container" data-testid="planet-card">
        <PlanetImage src={ planetImage } alt={ `Planeta ${planetName}` } />
        <PlanetName data-testid="planet-name">{planetName}</PlanetName>
      </Planet>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
