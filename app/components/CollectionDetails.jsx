var React = require('react');

import styled from 'styled-components';

class CollectionDetails extends React.Component{
  render(){
    var Details = styled.div`
        display: none;

        @media only screen and (min-width: 760px) {
            display: grid;
            padding: 1vmax 0 1vmax 1vmax;
            grid-row: sorr;
            grid-column: details;
            grid-template-rows: repeat(4, [sor] 1fr);
            grid-template-columns: [oszlop] 1fr;
            grid-gap: 1.5vmax;
        }
    `;
    var DetailsTitle = styled.div`
        background-color: #BBB6B2;
        grid-row: sor 1;
        grid-column: oszlop;
        margin-left: 1vw;
    `;
    var DetailsText = styled.div`
        background-color: #BBB6B2;
        grid-row: sor 2 / span 2;
        grid-column: oszlop;
        margin-left: 1vw;
    `;
    var DetailsCrew = styled.div`
        background-color: #BBB6B2;
        grid-row: sor 4;
        grid-column: oszlop;
        margin-left: 1vw;
    `;
    return(
      <Details>
        <DetailsTitle/>
        <DetailsText/>
        <DetailsCrew/>
      </Details>
    )
  }
}

module.exports = CollectionDetails;