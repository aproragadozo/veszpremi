var React = require('react');

import styled from 'styled-components';

class Home extends React.Component{
   render() {
    var HomeImage = styled.div`
        grid-row: wrapperNav 3 / span 9;
        grid-column: wrapperCol 1 / span 6;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;

        @media only screen and (min-width: 760px) {
            grid-row: meat;
            grid-column: cal / span 7;
        }
    `;
       return (
           <HomeImage/>
       )
   } 
}
module.exports = Home;