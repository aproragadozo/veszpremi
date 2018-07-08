var React = require('react');

import styled from 'styled-components';

const HomeImage = styled.div`
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

    const Text = styled.div`
    display: table;
    text-align: left;
    
    grid-row: wrapperNav 3 / span 10;
    grid-column: wrapperCol 1 / span 5;
    font-size: 13vmin;
    color: #443A9E;

    & > div {
        display: table-cell;
        vertical-align: middle;
    }

    @media only screen and (min-width: 760px) {
        grid-row: meat;
        grid-column: cal / span 3;
    }
`;
function Home(props){
    return (
        <HomeImage>
            <Text>
                <div>
                {props.text}
                </div>
            </Text>
        </HomeImage>
    )
   } 
module.exports = Home;