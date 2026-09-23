import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SectionHeading = styled.h2`
  margin: 0 0 clamp(28px, 4vw, 48px); color: #fff; font-size: clamp(1.75rem, 4vw, 2.75rem); font-weight: 700;
  letter-spacing: -0.035em; line-height: 1.12; text-align: center;
`;

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <SectionHeading>{headline}</SectionHeading>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;
