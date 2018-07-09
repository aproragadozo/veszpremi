var React = require('react');

import styled from 'styled-components';

const gabi = require('../img/contact/gabi.jpg');

const AboutWrapper = styled.div`
  display: grid;
  grid-column: wrapperCol 1 / span 6;
  grid-row: wrapperNav 3 / span 10;
  grid-template-rows: repeat(8, [sor] 1fr);
  grid-template-columns: repeat(3, [oszlop] 1fr);
  grid-gap: 1vmin;
  white-space: pre-line;
  font-size: 0.8em;
  background: white;

  @media only screen and (min-width: 760px) {
    padding: 1vmax 0 1vmax 1vmax;
    grid-row: meat;
    grid-column: cal / span 7;
    grid-template-rows: repeat(1, [sor] 1fr);
    grid-template-columns: repeat(20, [oszlop] 1fr);
    grid-gap: 1.5vmax;
    font-size: 1.5em;
  }
`;

const Brand = styled.div`
  display: grid;
  grid-row: sor 1;
  grid-column: oszlop 2 / span 2;

  @media only screen and (min-width: 760px) {
    grid-row: sor 1;
    grid-column: oszlop 1 / span 14;
    margin-left: 1vw;
  }
`;

const MainAbout = styled.div`
  display: grid;
  grid-row: sor 3 / span 6;
  grid-column: oszlop 1 / span 3;
  overflow-y: auto;

  @media only screen and (min-width: 760px) {
    grid-row: sor 2 / span 2;
    grid-column: oszlop 1 / span 14;
    margin-left: 1vw;
  }
`;

const Awards = styled.div`
  display: none;

  @media only screen and (min-width: 760px) {
    display: grid;
    grid-row: sor 4;
    grid-column: oszlop 1 /span 14;
    margin-left: 1vw;
    overflow-y: auto;
  }
`;
const AboutPhotoWrapper = styled.div`
  display: grid;
  grid-row: sor 1 / span 3;
  grid-column: oszlop 1;
  background-image: url(${gabi});
  background-size: contain;
  background-position-y: top;
  background-position-x: center;
  background-repeat: no-repeat;

  @media only screen and (min-width: 760px) {
    display: grid;
    grid-row: sor 1 / span 4;
    grid-column: oszlop 15 / span 6;
    grid-template-rows: repeat(4, [sor] 1fr);
    grid-template-columns: repeat(4, [oszlop] 1fr);
    background-position: center;
  }
`;

function About(props){
    return(
      <AboutWrapper>
        <Brand>
          <p>{props.brand}</p>
        </Brand>
        <MainAbout>
          <p>{props.main}</p>
        </MainAbout>
        <Awards>
          <p>{props.awards}</p>
        </Awards>
        <AboutPhotoWrapper/>
      </AboutWrapper>
    )
  }

module.exports = About;