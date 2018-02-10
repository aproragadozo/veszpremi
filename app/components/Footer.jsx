var React = require('react');

import styled from 'styled-components';

class Footer extends React.Component{
   render() {
       var FooterWrapper = styled.div`
        grid-row: wrapperFooter;
        grid-column: wrapperCol / span 6;
        display: grid;
        grid-template-rows: repeat(2, [r] minmax(4vmax, 40px));
        grid-template-columns: [spacer] 1fr repeat(3, [c] 4vmax);
        grid-gap: 1vmax;

        @media only screen and (min-width: 760px) {
            grid-row: bottom;
            grid-column: col 5 / span 2;
            grid-template-rows: [row] 1fr;
            grid-template-columns: [spacer] 1fr repeat(4, [c] 3vmax);
        }
       `;
       var Behance = styled.div`
        background-color: #050800;
        grid-column: c 1;
        grid-row: r 1;

        @media only screen and (min-width: 760px) {
            background-color: #050800;
            grid-column: c 1;
            grid-row: row;
        }
       `;
       var Facebook = styled.div`
        background-color: #050800;
        grid-column: c 2;
        grid-row: r 1;

        @media only screen and (min-width: 760px) {
            background-color: #050800;
            grid-column: c 2;
            grid-row: row;
        }
       `;
       var Instagram = styled.div`
        background-color: #050800;
        grid-column: c 3;
        grid-row: r 1;

        @media only screen and (min-width: 760px) {
            background-color: #050800;
            grid-column: c 3;
            grid-row: row;
        }
       `;
       return (
           <FooterWrapper>
               <Behance/>
               <Facebook/>
               <Instagram/>
           </FooterWrapper>
       )
   } 
}
module.exports = Footer;