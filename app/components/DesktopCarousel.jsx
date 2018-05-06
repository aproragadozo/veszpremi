var React = require('react');

import styled from 'styled-components';
import 'app/slideshow.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const CarouselWrapper = styled.div`
  display: grid;
  position: relative;
  grid-row: sorr;
  grid-column: meatCol 1 / span 4;
  grid-column-gap: 1.5vmax;
  grid-row-gap: 3.5vmax;
  margin-left: 1vmax;
`;

class DesktopCarousel extends React.Component{
  circleIndex(idx)
  {
    let setLength = this.props.selectedSet.length;
    console.log(setLength);
    return (idx+setLength)%setLength;
  }
  
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  render() {
    return(
      <ReactCSSTransitionGroup
        transitionName={this.props.direction}
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={1000}
        component='div'
        style={{display: "grid",
          position: "relative",
          gridRow: "sorr",
          gridColumn: "meatCol 1 / span 4",
          marginLeft: "1vmax",
          transition: "all 1s ease-out"}}>
        
        <img className="bal" key={this.props.currentIndex}
        src={this.props.selectedSet[this.circleIndex(this.props.currentIndex)]}
        onClick={(e)=>this.props.kattBalra(e)}/>
        <img className="center" key={this.props.currentIndex+1}
          src={this.props.selectedSet[this.circleIndex(this.props.currentIndex+1)]}/>
        <img className="jobb" key={this.props.currentIndex+2}
          src={this.props.selectedSet[this.circleIndex(this.props.currentIndex+2)]}
          onClick={(e)=>this.props.kattJobbra(e)}/>
    </ReactCSSTransitionGroup>
    )
    
  }
}
module.exports = DesktopCarousel;