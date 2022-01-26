import React from 'react';
import Header from './components/Header';
import PlanetCard from './components/PlanetCard';
import SolarSystem from './components/SolarSystem';
import modulePlanet from './data/planets';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SolarSystem />
        <PlanetCard modulePlanet={ modulePlanet } />
      </>
    );
  }
}

export default App;
