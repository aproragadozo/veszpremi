var React = require('react');

import styled from 'styled-components';
//import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import ReactTransitions from 'react-transitions';
import 'react-transitions/dist/animations.css';

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
    }
`;
const VideoPrevBox = styled.div`
    display: none;

    @media only screen and (min-width: 760px) {
        display: grid;
        grid-row: sor 1 / span 4;
        grid-column: oszlop 1;
        align-items: center;
    }
`;
const VideoPrevItem = styled.div`
    @media only screen and (min-width: 760px) {
        background-color: #BBB6B2;
        width: 100%;
        height: 25%;
    }
`;
const VideoNavPrev = styled.div`
    display: grid;
    grid-row: sor 1 / span 4;
    grid-column: oszlop 1 / span 3;
    z-index: 5;
    background-color: #d4d3d3;
    
    @media only screen and (min-width: 760px) {
        display: none;
    }
`;
const VideoNavNext = styled.div`
    display: grid;
    grid-row: sor 1 /span 4;
    grid-column: oszlop 18 / span 3;
    z-index: 5;
    background-color: #d4d3d3;

    @media only screen and (min-width: 760px) {
        display: none;
    }
`;
const VideoCurrentBox = styled.div`
    display: grid;
    grid-row: sor 1 / span 4;
    grid-column: oszlop 1 / span 20;
    grid-template-rows: repeat(4, [currentRow] 1fr);
    grid-template-columns: [fullCol] 1fr;
    grid-gap: 1.5vmax;
    
    @media only screen and (min-width: 760px) {
        display: grid;
        grid-row: sor 1 /span 4;
        grid-column: oszlop 2 / span 2;
        grid-template-rows: repeat(4, [currentRow] 1fr);
        grid-template-columns: repeat(10, [currentCol] 1fr);
        grid-gap: 1.5vmax;
    }
`;
const VideoCurrentTextTop = styled.div`
    grid-row: currentRow 3;
    grid-column: fullCol;
    background-color: #BBB6B2;
    
    @media only screen and (min-width: 760px) {
        grid-row: currentRow 1;
        grid-column: currentCol 1 / span 7;
        background-color: #BBB6B2;
    }
`;
const VideoCurrentMain = styled.div`
    grid-row: currentRow 1 / span 2;
    grid-column: fullCol;
    background-color: #BBB6B2;

    @media only screen and (min-width: 760px) {
        grid-row: currentRow 2 / span 2;
        grid-column: currentCol 1 / span 10;
        background-color: #BBB6B2;
    }
`;
const VideoCurrentTextBottom = styled.div`
    grid-row: currentRow 4;
    grid-column: fullCol;
    background-color: #BBB6B2;

    @media only screen and (min-width: 760px) {
        grid-row: currentRow 4;
        grid-column: currentCol 1 / span 7;
        background-color: #BBB6B2;
    }
`;
const VideoNextBox = styled.div`
    display: none;

    @media only screen and (min-width: 760px) {
        display: grid;
        grid-row: sor 1 / span 4;
        grid-column: oszlop 4;
        align-items: center;
        grid-gap: 1.5vmax;
    }
`;
const VideoNextItem = styled.div`
@media only screen and (min-width: 760px) {
    background-color: #BBB6B2;
        width: 100%;
        height: 25%;
}
`;

// experryment
//const images = ["http://lorempicsum.com/futurama/627/300/4", "http://lorempicsum.com/nemo/627/300/4", "http://lorempicsum.com/simpsons/627/300/4", "http://lorempicsum.com/up/627/300/4"];


class Videos extends React.Component{
   render() {
       return (
           
        <VideoWrapper>
               <VideoPrevBox>
                   <VideoPrevItem/>
               </VideoPrevBox>
               <VideoNavPrev/>
               <VideoCurrentBox>
                   <VideoCurrentTextTop/>
                   <VideoCurrentMain/>
                   <VideoCurrentTextBottom/>
               </VideoCurrentBox>
               <VideoNextBox>
                   <VideoNextItem/>
               </VideoNextBox>
               <VideoNavNext/>
           </VideoWrapper>
       )
   } 
}
module.exports = Videos;