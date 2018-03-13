var React = require('react');

import styled from 'styled-components';
import MediaQuery from 'react-responsive';

var MobileVideos = require('MobileVideos');
var DesktopVideos = require('DesktopVideos');

const VideoWrapper = styled.div`
    grid-column: wrapperCol 1 / span 6;
    grid-row: wrapperNav 3 / span 10;
    display: grid;
    grid-template-rows: repeat(4, [sor] 1fr);
    grid-template-columns: repeat(20, [oszlop] 1fr);

    @media only screen and (min-width: 760px) {
        display: grid;
        grid-row: meat;
        grid-column: cal / span 7;
        grid-template-rows: repeat(4, [sor] 1fr);
        grid-template-columns: repeat(4, [oszlop] 1fr);
        grid-gap: 1.5vmax;
        position: relative;       
    }
`;

class Videos extends React.Component {
  render() {
    return (

      <VideoWrapper>
        <MediaQuery maxWidth={760}>
          <MobileVideos/>
        </MediaQuery>
        <MediaQuery minWidth={760}>
          <DesktopVideos/>
        </MediaQuery>
      </VideoWrapper>
    )
  }
}

module.exports = Videos;