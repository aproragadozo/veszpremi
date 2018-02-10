var React = require('react');

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
const Logo = styled.div`
  background-color: #050505;
  grid-row: navButton 1 / span 2;
  grid-column: logo;

  @media only screen and (min-width: 760px) {
    grid-row: row 1 / span 2;
}
`;
class Header extends React.Component{
  render(){
    return (
        <Top>
          <Logo/>
        </Top>
    )
  }
}

module.exports = Header;