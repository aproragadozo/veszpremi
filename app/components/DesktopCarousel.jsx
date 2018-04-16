var React = require('react');

import $ from 'jquery';
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
/*
  egyelőre nézzük meg, tisztán CSS-ből hogy megy
const CarouselBack = styled.img`
  display: block;
  position: absolute;
  width: calc(25% - (calc(1.5vmax / 2)));
  height: calc(50% - calc(3.5vmax / 2));
  top: calc(25% + calc(3.5vmax / 4));
`;
const CarouselMain = styled.img`
  display: block;
  width: calc(50% - 1vmax);
  height: 100%;
  left: calc(25% + (calc(1vmax / 2)));
  position: absolute;
`;
const CarouselForward = styled.img`
  display: block;
  position: absolute;
  width: calc(25% - (calc(1.5vmax / 2)));
  height: calc(50% - calc(3.5vmax / 2));
  top: calc(25% + calc(3.5vmax / 4));
  left: calc(75% + (calc(1.5vmax / 2)));
`;
*/
class DesktopCarousel extends React.Component{
  /*
  constructor(props) {
    super(props);
    
    this.state = {
      items: [{
        id: "35597967915",
        owner: "72036844@N04",
        secret: "9cc50290b7",
        server: "4185",
        farm: 5,
        title: "The Shadow Tower",
        ispublic: 1,
        isfriend: 0,
        isfamily: 0
      },
      {
        id: "35190670030",
        owner: "92744506@N03",
        secret: "468c980cfa",
        server: "4242",
        farm: 5,
        title: "Champions Retreat",
        ispublic: 1,
        isfriend: 0,
        isfamily: 0
      },
          {
            id: "35189011430",
        owner: "95606389@N08",
        secret: "d8a8a96ac5",
        server: "4262",
        farm: 5,
        title: "Take Note",
        ispublic: 1,
        isfriend: 0,
        isfamily: 0
      }],
      currentIndex: 0,
      direction: ""
    };
    
    this.kattBalra = this.kattBalra.bind(this);
    this.kattJobbra = this.kattJobbra.bind(this);
    this.circleIndex = this.circleIndex.bind(this);
  }
  */
  circleIndex(idx)
  {
    let setLength = this.props.selectedSet.length;
    console.log(setLength);
    return (idx+setLength)%setLength;
  }
  /*
  kattBalra(e) {
    e.preventDefault();
    e.stopPropagation();
    
    let index = this.state.currentIndex;
    let items = this.state.items;
    let length = items.length;
    
    if (index < 1) {
      index = length-1;
    }
    else {
      index--;
    }

    this.setState({
      currentIndex: index,
      direction: 'left'
    });
  }
  
  kattJobbra(e) {
    e.preventDefault();
    e.stopPropagation();
    
    let index = this.state.currentIndex;
    let items = this.state.items;
    let length = items.length;
    
    if (index === length) {
      index = -1;
    }

    index++;
    
    this.setState({
      currentIndex: index,
      direction: 'right'
    });
  }
  */
  /*
  componentDidMount() {
    $.ajax({
      type: "POST",
      //you might not need to expose your flickr key like this
       //url: "https://api.flickr.com/services/feeds/photos_public.gne?tags=kitten&format=json",
      url: "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=160f672f62d2f429e0f06fe9eb8cb555&tags=abstract&format=json&extras=width_b,height_b&privacy_filter=1&sort=interestingness-desc&nojsoncallback=1",
      dataType: "json",
      success: (data) =>{
        this.setState((prevState) =>({items: data.photos.photo}));
        
      }
    });
  }
  */
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
        
        <img className="bal" key={this.props.currentIndex} title={this.circleIndex(this.props.currentIndex)}
        src={this.props.selectedSet[this.circleIndex(this.props.currentIndex)]}
        onClick={(e)=>this.props.kattBalra(e)}/>
        <img className="center" key={this.props.currentIndex+1} title={this.circleIndex(this.props.currentIndex+1)}
          src={this.props.selectedSet[this.circleIndex(this.props.currentIndex+1)]}/>
        <img className="jobb" key={this.props.currentIndex+2} title={this.circleIndex(this.props.currentIndex+2)}
          src={this.props.selectedSet[this.circleIndex(this.props.currentIndex+2)]}
          onClick={(e)=>this.props.kattJobbra(e)}/>
    </ReactCSSTransitionGroup>
    )
    
  }
}
module.exports = DesktopCarousel;