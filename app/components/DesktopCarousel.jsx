var React = require('react');

import styled from 'styled-components';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

const CarouselWrapper = styled.div`
  display: grid;
  position: relative;
  grid-row: sorr;
  grid-column: meatCol 1 / span 4;
  grid-column-gap: 1.5vmax;
  grid-row-gap: 3.5vmax;
  margin-left: 1vmax;
`;
// ezeket majd írd át img-re
const CarouselBack = styled.div`
  position: absolute;
  width: calc(25% - (calc(1.5vmax / 2)));
  height: calc(50% - calc(3.5vmax / 2));
  top: calc(25% + calc(3.5vmax / 4));
  background-color: #817D7A;
`;
const CarouselMain = styled.div`
  width: calc(50% - 1vmax);
  height: 100%;
  left: calc(25% + (calc(1vmax / 2)));
  position: absolute;
  background-color: #817D7A;
`;
const CarouselForward = styled.div`
  position: absolute;
  width: calc(25% - (calc(1.5vmax / 2)));
  height: calc(50% - calc(3.5vmax / 2));
  top: calc(25% + calc(3.5vmax / 4));
  left: calc(75% + (calc(1.5vmax / 2)));
  background-color: #817D7A;
`;

class DesktopCarousel extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentIndex: parseInt(this.props.index),
      direction: ""
    };
  }
  render() {
    return(
      <CSSTransitionGroup transitionName={this.state.direction} transitionEnterTimeout={1000} transitionLeaveTimeout={1000} component='div' style={{display: "grid",
        position: "relative",
        gridRow: "sorr",
        gridColumn: "meatCol 1 / span 4",
        gridColumnGap: "1.5vmax",
        gridRowGap: "3.5vmax",
        marginLeft: "1vmax"}}>
        <CarouselBack/>
        <CarouselMain/>
        <CarouselForward/>
    </CSSTransitionGroup>
    )
    
  }
}
module.exports = DesktopCarousel;