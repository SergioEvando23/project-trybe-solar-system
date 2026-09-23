import React from 'react';
import styled from 'styled-components';

const PageHeader = styled.header`
  position: fixed; z-index: 10; top: 0; right: 0; left: 0; display: flex; align-items: center; min-height: 72px;
  padding: 16px max(24px, calc((100vw - 1440px) / 2)); border-bottom: 1px solid rgba(203, 218, 255, 0.16);
  background: rgba(3, 7, 20, 0.74); backdrop-filter: blur(14px);
`;
const Brand = styled.h1`
  margin: 0; color: #fff; font-size: clamp(1.25rem, 2vw, 1.625rem); font-weight: 700; letter-spacing: -0.025em; line-height: 1.2;
`;

class Header extends React.Component {
  render() {
    return (
      <PageHeader><Brand>Sistema Solar</Brand></PageHeader>
    );
  }
}

export default Header;
