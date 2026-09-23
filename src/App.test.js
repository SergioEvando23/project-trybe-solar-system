import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';
import planets from './data/planets';
import missions from './data/missions';

describe('Solar System interface', () => {
  beforeEach(() => render(<App />));

  it('keeps the primary headings and every planet visible', () => {
    expect(screen.getByRole('heading', { name: /sistema solar/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /planetas/i })).toBeInTheDocument();
    expect(screen.getAllByTestId('planet-card')).toHaveLength(planets.length);
    expect(screen.getAllByTestId('planet-name')).toHaveLength(planets.length);

    planets.forEach(({ name }) => {
      expect(screen.getByAltText(`Planeta ${name}`)).toBeInTheDocument();
    });
  });

  it('keeps mission information available in its cards', () => {
    expect(screen.getAllByTestId('mission-card')).toHaveLength(missions.length);
    expect(screen.getAllByTestId('mission-name')).toHaveLength(missions.length);
    expect(screen.getAllByTestId('mission-year')[0]).toHaveTextContent(missions[0].year);
    expect(screen.getAllByTestId('mission-country')[0]).toHaveTextContent(missions[0].country);
    expect(screen.getAllByTestId('mission-destination')[0]).toHaveTextContent(missions[0].destination);
  });
});
