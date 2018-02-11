var React = require('react');

import styled from 'styled-components';

const AboutWrapper = styled.div`
  display: grid;
  grid-column: wrapperCol 1 / span 6;
  grid-row: wrapperNav 3 / span 10;
  grid-template-rows: repeat(4, [sor] 1fr);
  grid-template-columns: repeat(3, [oszlop] 1fr);
  grid-gap: 1vmin;

  @media only screen and (min-width: 760px) {
    padding: 1vmax 0 1vmax 1vmax;
    grid-row: meat;
    grid-column: cal / span 7;
    grid-template-rows: repeat(4, [sor] 1fr);
    grid-template-columns: repeat(20, [oszlop] 1fr);
    grid-gap: 1.5vmax;
  }
`;

const AboutText1 = styled.div`
  background-color: #bbb6b2;
  display: grid;
  grid-row: sor 2 / span 2;
  grid-column: oszlop 1 / span 3;

  @media only screen and (min-width: 760px) {
    grid-row: sor 1;
    grid-column: oszlop 1 / span 14;
    margin-left: 1vw;
  }
`;

const AboutText2 = styled.div`
  display: grid;
  grid-row: sor 4;
  grid-column: oszlop 1 / span 3;
  background-color: #bbb6b2;

  @media only screen and (min-width: 760px) {
    grid-row: sor 2 / span 2;
    grid-column: oszlop 1 / span 14;
    margin-left: 1vw;
  }
`;

const AboutText3 = styled.div`
  display: none;

  @media only screen and (min-width: 760px) {
    display: grid;
    background-color: #bbb6b2;
    grid-row: sor 4;
    grid-column: oszlop 1 /span 14;
    margin-left: 1vw;
  }
`;
const AboutPhotoWrapper = styled.div`
  display: grid;
  grid-row: sor 1;
  grid-column: oszlop 1;
  background-color: transparent;

  @media only screen and (min-width: 760px) {
    display: grid;
    grid-row: sor 1 / span 4;
    grid-column: oszlop 15 / span 6;
    grid-template-rows: repeat(4, [sor] 1fr);
    grid-template-columns: repeat(4, [oszlop] 1fr);
  }
`;

const AboutPhoto = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  background-color: papayawhip;

  @media only screen and (min-width: 760px) {
    display: grid;
    grid-row: sor 2 / span 2;
    grid-column: oszlop 2 / span 2;
  }
`;

class About extends React.Component {
  render() {
    return(
      <AboutWrapper>
        <AboutText1/>
        <AboutText2/>
        <AboutText3/>
        <AboutPhotoWrapper>
          <AboutPhoto/>
        </AboutPhotoWrapper>
      </AboutWrapper>
    )
  }
}

module.exports = About;