var React = require('react');
var {Link} = require('react-router-dom');

import styled from 'styled-components';

const instagram = require('../img/icons/instagram.png');
const facebook = require('../img/icons/facebook.png');
const behance = require('../img/icons/behance.png');

const FooterWrapper = styled.div`
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
    grid-template-columns: [spacer] 1fr repeat(4, [c] 2vmax);
}
`;
const Behance = styled.a`
display: inline-block;
background-size: contain;
background-position: center;
background-repeat: no-repeat;
grid-column: c 1;
grid-row: r 1;

@media only screen and (min-width: 760px) {
    grid-column: c 1;
    grid-row: row;
}
`;
const Facebook = styled.a`
display: inline-block;
background-size: contain;
background-position: center;
background-repeat: no-repeat;
grid-column: c 2;
grid-row: r 1;

@media only screen and (min-width: 760px) {
    grid-column: c 2;
    grid-row: row;
}
`;
const Instagram = styled.a`
display: inline-block;
background-size: contain;
background-position: center;
background-repeat: no-repeat;
grid-column: c 3;
grid-row: r 1;

@media only screen and (min-width: 760px) {
    grid-column: c 3;
    grid-row: row;
}
`;
class Footer extends React.Component{
   render() {
       return (
           <FooterWrapper>
               <Behance href={'https://www.behance.net/gabriellavc205'} style={{backgroundImage: `url(${behance})`}}/>
               <Facebook href={'https://www.facebook.com/gabriellaveszpremibags/'} style={{backgroundImage: `url(${facebook})`}}/>
               <Instagram href={'https://www.instagram.com/gabriellaveszpremi/'} style={{backgroundImage: `url(${instagram})`}}/>
           </FooterWrapper>
       )
   } 
}
module.exports = Footer;