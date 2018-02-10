var React = require('react');

import styled from 'styled-components';

var CollectionDetails = require('CollectionDetails');

class Collections extends React.Component{
   render() {
    var CollectionWrapper = styled.div`
        display: grid;
        grid-column: wrapperCol 1 / span 6;
        grid-row: wrapperNav 3 / span 10;
        grid-template-rows: [sor] 1fr;
        grid-template-columns: [oszlop] 1fr;

    @media only screen and (min-width: 760px) {
        grid-row: meat;
        grid-column: cal / span 7;
        grid-template-columns: [details] 35vw repeat(4, [meatCol] 1fr);
        grid-template-rows: [sorr] 1fr;
        grid-gap: 1.5vmax;
    }
    `;

    var CollectionSlideshow = styled.div`
        grid-column: oszlop;
        grid-row: sor;
        display: grid;
        grid-template-rows: repeat(4, [sor] 1fr);
        grid-template-columns: repeat(20, [oszlop] 1fr);

        @media only screen and (min-width: 760px) {
            grid-row: sorr;
            grid-column: meatCol 1 / span 4;
            grid-column-gap: 1.5vmax;
            grid-row-gap: 3.5vmax;
            margin-left: 1vmax;
        }
    `;
    var SlideshowBack = styled.div`
        background-color: #d4d3d3;
        grid-row: sor 1 / span 4;
        grid-column: oszlop 1 / span 3;

        @media only screen and (min-width: 760px) {
            grid-row: sor 2 / span 2;
            grid-column: oszlop 1 / span 5;
            background-color: #817D7A;
        }
    `;
    var SlideshowCurrent = styled.div`
        background-color: #817D7A;
        grid-row: sor 1 / span 4;
        grid-column: oszlop 4 / span 14;

        @media only screen and (min-width: 760px) {
            grid-row: sor 1 / span 4;
            grid-column: oszlop 6 / span 10;
        }
    `;
    var SlideshowForward = styled.div`
        background-color: #d4d3d3;
        grid-row: sor 1 / span 4;
        grid-column: oszlop 18 / span 3;

        @media only screen and (min-width: 760px) {
            grid-row: sor 2 / span 2;
            grid-column: oszlop 16 / span 5;
            background-color: #817D7A;
        }
    `;
       return (
           <CollectionWrapper>
               <CollectionDetails/>
               <CollectionSlideshow>
       {/* don't forget to make the navigation overlays just that:
            overlays - SlideshowCurrent needs to be full-width
        */}
                <SlideshowBack/>
                <SlideshowCurrent/>
                <SlideshowForward/>
               </CollectionSlideshow>
           </CollectionWrapper>
       )
   } 
}
module.exports = Collections;