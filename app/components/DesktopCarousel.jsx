var React = require('react');

import styled from 'styled-components';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

class DesktopCarousel extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentIndex: parseInt(this.props.index);
      direction: ""
    };
  }
  render() {
    <CSSTransitionGroup transitionName={this.state.direction} transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
      
    </CSSTransitionGroup>
  }
}
module.exports = DesktopCarousel