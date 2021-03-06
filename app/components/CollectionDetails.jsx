var React = require('react');

import styled from 'styled-components';

const Details = styled.div`
        display: none;

        @media only screen and (min-width: 760px) {
            display: grid;
            padding: 1vmax 0 1vmax 1vmax;
            grid-row: sorr;
            grid-column: details;
            grid-template-rows: repeat(4, [sor] 1fr);
            grid-template-columns: [oszlop] 1fr;
            grid-gap: 1.5vmax;
            white-space: pre-line;
        }
    `;
    const DetailsTitle = styled.p`
        grid-row: sor 1;
        grid-column: oszlop;
        margin-left: 1vw;
        font-size: 2em;
    `;
    const DetailsText = styled.p`
        grid-row: sor 2;
        grid-column: oszlop;
        margin-left: 1vw;
        font-size: 1em;
    `;
    const DetailsCrew = styled.p`
        grid-row: sor 3;
        grid-column: oszlop;
        margin-left: 1vw;
        font-size: 1em;
    `;

function CollectionDetails(props) {  
    return(
      <Details>
        <DetailsTitle>{props.title}</DetailsTitle>
        <DetailsText>{props.text}</DetailsText>
        <DetailsCrew>{props.crew}</DetailsCrew>
      </Details>
    )
}

module.exports = CollectionDetails;