var React = require('react');
var {Link} = require('react-router-dom');

const veszpremiLogo = require('../img/home/logo.png');

import styled from 'styled-components';

const Top = styled.div`
  display: grid;
  grid-gap: 1vmax;
  grid-row: wrapperNav 1 / span 2;
  grid-column: wrapperCol 1 / span 6;
  grid-template-rows: repeat(2, [navButton] 1fr);
  grid-template-columns: [logo] 50vw repeat(3, [navButton] 1fr);

@media only screen and (min-width: 760px) {
  grid-row: top;
  grid-column: cal / span 6;
  grid-template-rows: repeat(2, [row] 1fr);
  grid-template-columns: [logo] 22vw [spacer] 1fr;
}
`;
const Logo = styled(Link)`
  /* background-color: #050505; */
  grid-row: navButton 1 / span 2;
  grid-column: logo;
  display: block;

  @media only screen and (min-width: 760px) {
    grid-row: row 1 / span 2;
}
`;
class Header extends React.Component{
  render(){
    console.log(veszpremiLogo);
    return (
        <Top>
          <Logo to={"/"}>
            <img src={veszpremiLogo} style={{width: "100%"}}/>
          </Logo>
        </Top>
    )
  }
}

module.exports = Header;