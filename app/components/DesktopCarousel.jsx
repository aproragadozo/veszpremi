var React = require('react');

import $ from 'jquery';
import styled from 'styled-components';
import 'app/slideshow.css';
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
const CarouselBack = styled.img`
  display: block;
  position: absolute;
  width: calc(25% - (calc(1.5vmax / 2)));
  height: calc(50% - calc(3.5vmax / 2));
  top: calc(25% + calc(3.5vmax / 4));
  transition: all 1s ease-out;
  object-fit: cover;
`;
const CarouselMain = styled.img`
  display: block;
  width: calc(50% - 1vmax);
  height: 100%;
  left: calc(25% + (calc(1vmax / 2)));
  position: absolute;
  transition: all 1s ease-out;
  object-fit: cover;
`;
const CarouselForward = styled.img`
  display: block;
  position: absolute;
  width: calc(25% - (calc(1.5vmax / 2)));
  height: calc(50% - calc(3.5vmax / 2));
  top: calc(25% + calc(3.5vmax / 4));
  left: calc(75% + (calc(1.5vmax / 2)));
  transition: all 1s ease-out;
  object-fit: cover;
`;

class DesktopCarousel extends React.Component{
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

  circleIndex(idx)
  {
    return (idx+100)%100;
  }
  
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

  render() {
    return(
      <CSSTransitionGroup transitionName={this.state.direction} transitionEnterTimeout={1000} transitionLeaveTimeout={1000} component='div' style={{display: "grid",
        position: "relative",
        gridRow: "sorr",
        gridColumn: "meatCol 1 / span 4",
        gridColumnGap: "1.5vmax",
        gridRowGap: "3.5vmax",
        marginLeft: "1vmax"}}>
          <CarouselBack key={this.circleIndex(this.state.currentIndex)} title={this.circleIndex(this.state.currentIndex)}
          src={'https://farm' + this.state.items[this.circleIndex(this.state.currentIndex)].farm + ".staticflickr.com/" + this.state.items[this.circleIndex(this.state.currentIndex)].server + "/" + this.state.items[this.circleIndex(this.state.currentIndex)].id + "_" + this.state.items[this.circleIndex(this.state.currentIndex)].secret + '_b.jpg'}
          onClick={(e)=>this.kattBalra(e)}/>
        <CarouselMain key={this.circleIndex(this.state.currentIndex+1)} title={this.circleIndex(this.state.currentIndex+1)}
          src={'https://farm' + this.state.items[this.circleIndex(this.state.currentIndex+1)].farm + ".staticflickr.com/" + this.state.items[this.circleIndex(this.state.currentIndex+1)].server + "/" + this.state.items[this.circleIndex(this.state.currentIndex+1)].id + "_" + this.state.items[this.circleIndex(this.state.currentIndex+1)].secret + '_b.jpg'}/>
        <CarouselForward key={this.circleIndex(this.state.currentIndex+2)} title={this.circleIndex(this.state.currentIndex+2)}
          src={'https://farm' + this.state.items[this.circleIndex(this.state.currentIndex+2)].farm + ".staticflickr.com/" + this.state.items[this.circleIndex(this.state.currentIndex+2)].server + "/" + this.state.items[this.circleIndex(this.state.currentIndex+2)].id + "_" + this.state.items[this.circleIndex(this.state.currentIndex+2)].secret + '_b.jpg'}
          onClick={(e)=>this.kattJobbra(e)}/>
        {/*
        <CarouselBack key={this.circleIndex(this.state.currentIndex-1)} title={this.circleIndex(this.state.currentIndex-1)}
          src={'https://farm' + this.state.items[this.circleIndex(this.state.currentIndex-1)].farm + ".staticflickr.com/" + this.state.items[this.circleIndex(this.state.currentIndex-1)].server + "/" + this.state.items[this.circleIndex(this.state.currentIndex-1)].id + "_" + this.state.items[this.circleIndex(this.state.currentIndex-1)].secret + '_b.jpg'}
          onClick={(e)=>this.kattBalra(e)}/>
        <CarouselMain key={this.circleIndex(this.state.currentIndex)} title={this.circleIndex(this.state.currentIndex)}
          src={'https://farm' + this.state.items[this.circleIndex(this.state.currentIndex)].farm + ".staticflickr.com/" + this.state.items[this.circleIndex(this.state.currentIndex)].server + "/" + this.state.items[this.circleIndex(this.state.currentIndex)].id + "_" + this.state.items[this.circleIndex(this.state.currentIndex)].secret + '_b.jpg'}/>
        <CarouselForward key={this.circleIndex(this.state.currentIndex+1)} title={this.circleIndex(this.state.currentIndex+1)}
          src={'https://farm' + this.state.items[this.circleIndex(this.state.currentIndex+1)].farm + ".staticflickr.com/" + this.state.items[this.circleIndex(this.state.currentIndex+1)].server + "/" + this.state.items[this.circleIndex(this.state.currentIndex+1)].id + "_" + this.state.items[this.circleIndex(this.state.currentIndex+1)].secret + '_b.jpg'}
          onClick={(e)=>this.kattJobbra(e)}/>
          */}
    </CSSTransitionGroup>
    )
    
  }
}
module.exports = DesktopCarousel;