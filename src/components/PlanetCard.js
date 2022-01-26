import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { modulePlanet } = this.props;
    return (
      <div data-testid="planet-card">
        {modulePlanet.map((planet) => (
          <div key={ planet.name }>
            <img src={ planet.image } alt={ `Planeta ${planet.name}` } />
            {planet.name}
          </div>
        ))}
      </div>
    );
  }
}

PlanetCard.propTypes = {
  modulePlanet: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  })).isRequired,
};

export default PlanetCard;
