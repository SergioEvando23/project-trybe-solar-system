import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Card = styled.article`
  display: flex; min-width: 0; min-height: 178px; flex-direction: column; padding: 24px;
  border: 1px solid rgba(197, 214, 255, 0.17); border-radius: 16px; background: rgba(12, 22, 52, 0.64);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2); text-align: left; transition: border-color 160ms ease, transform 160ms ease;
  @media (hover: hover) { &:hover { border-color: rgba(169, 199, 255, 0.44); transform: translateY(-2px); } }
  @media (prefers-reduced-motion: reduce) { transition: none; }
`;
const MissionName = styled.h3`margin: 0 0 18px; color: #fff; font-size: 1.125rem; font-weight: 700; letter-spacing: -0.015em; line-height: 1.35;`;
const Details = styled.div`display: grid; gap: 8px; padding-top: 16px; border-top: 1px solid rgba(197, 214, 255, 0.14);`;
const Detail = styled.p`
  margin: 0; color: #d7e0ff; font-size: 0.9375rem; line-height: 1.45;
  span { margin-right: 6px; color: #9fb4ef; font-weight: 700; }
`;

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <Card className="missionCard-container" data-testid="mission-card">
        <MissionName data-testid="mission-name">{name}</MissionName>
        <Details>
          <Detail data-testid="mission-year"><span>Ano:</span>{year}</Detail>
          <Detail data-testid="mission-country"><span>País:</span>{country}</Detail>
          <Detail data-testid="mission-destination"><span>Destino:</span>{destination}</Detail>
        </Details>
      </Card>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
