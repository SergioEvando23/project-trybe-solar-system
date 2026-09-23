import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import backgroundImage from './images/background.png';
import Header from './components/Header/Header';
import Missions from './components/Missions/Missions';
import SolarSystem from './components/SolarSystem/SolarSystem';
const GlobalStyle = createGlobalStyle`
  :root { color-scheme: dark; }
  * { box-sizing: border-box; }
  body { min-width: 320px; margin: 0; background: #030714; color: #f5f7ff; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
  button, input, select, textarea { font: inherit; }
  :focus-visible { outline: 3px solid #a9c7ff; outline-offset: 3px; }
`;

const AppShell = styled.div`
  min-height: 100vh;
  overflow: hidden;
  background: linear-gradient(180deg, rgba(3, 7, 20, 0.14) 0%, rgba(3, 7, 20, 0.84) 52%, #030714 100%), url(${backgroundImage}) center top / cover fixed;
`;

const Content = styled.main`
  width: min(100% - 32px, 1440px);
  margin: 0 auto;
  padding: 104px 0 72px;
  @media (min-width: 768px) { width: min(100% - 64px, 1440px); padding-top: 120px; }
`;

class App extends React.Component {
  render() {
    return (
      <AppShell className="App">
        <GlobalStyle />
        <Header />
        <Content><SolarSystem /><Missions /></Content>
      </AppShell>
    );
  }
}

export default App;
