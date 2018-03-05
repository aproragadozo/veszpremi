var React = require('react');

import styled from 'styled-components';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

const CarouselWrapper = styled.div`
  grid-column: oszlop;
  grid-row: sor;
  display: grid;
  grid-template-rows: repeat(4, [sor] 1fr);
  grid-template-columns: repeat(20, [oszlop] 1fr);
`;
const CarouselBack = styled.div`
display: grid;
  background-color: #d4d3d3;
  grid-row: sor 1 / span 4;
  grid-column: oszlop 1 / span 3;
`;
const CarouselMain = styled.div`
display: grid;
    background-color: #817D7A;
    grid-row: sor 1 / span 4;
    grid-column: oszlop 4 / span 14;
`;
const CarouselForward = styled.div`
display: grid;
    background-color: #d4d3d3;
    grid-row: sor 1 / span 4;
    grid-column: oszlop 18 / span 3;
`;
class MobileCarousel extends React.Component{
  render(){
    return (
      <CarouselWrapper>
      <CarouselBack/>
      <CarouselMain/>
      <CarouselForward/>
    </CarouselWrapper>
    )
    
  }
}
module.exports = MobileCarousel;