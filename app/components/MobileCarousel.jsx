var React = require('react');

import styled from 'styled-components';
import 'app/mobilecarousel.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Arrow = styled.div`
  position: absolute;
  width: 15%;
  height: 100%;
  z-index:3;
  opacity:0.3;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20vmin;
  text-align: center;
`;

class MobileCarousel extends React.Component{
  circleIndex(idx)
  {
    let setLength = this.props.selectedSet.length;
    console.log(setLength);
    return (idx+setLength)%setLength;
  }

  render(){
    return (
      <div style={{position: "relative", width: "100%", height:"100%"}}>
        <Arrow style={{top:"0", left:"0"}} onClick={(e)=>this.props.kattBalra(e)}>
          <p>&lt;</p>
        </Arrow>
        <Arrow style={{top:"0", left:"85%"}} onClick={(e)=>this.props.kattJobbra(e)}>
          <p>&gt;</p>
        </Arrow>

        <ReactCSSTransitionGroup
          transitionName={this.props.direction}
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}
          component='div'
          style={{position:"relative", width:"100%", height: "100%", display: "inline-block", overflow:"hidden"}}>
          <img className="mobilbal"
            key={this.props.currentIndex}
            src={this.props.selectedSet[this.circleIndex(this.props.currentIndex)]}/>
          <img className="mobilcenter"
            key={this.props.currentIndex+1}
            src={this.props.selectedSet[this.circleIndex(this.props.currentIndex+1)]}/>
          <img className="mobiljobb"
            key={this.props.currentIndex+2}
            src={this.props.selectedSet[this.circleIndex(this.props.currentIndex+2)]}/>
        </ReactCSSTransitionGroup>
      </div>
    )
    
  }
}
module.exports = MobileCarousel;