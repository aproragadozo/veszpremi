var React = require('react');

import MediaQuery from 'react-responsive';

import styled from 'styled-components';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// extended press.css so that it works for both the press and the vids pages
import 'app/press.css';

const Arrow = require('MobileCarousel').Arrow;
// var MobileVideos = require('MobileVideos');
// const Vid = require('Vid');
const YouTube = require('YouTube');
// const DesktopVideos = require('DesktopVideos');
const DesktopVidGrid = require('DesktopVidGrid');

const VideoWrapper = styled.div`
  background: white;
  position: relative;
  grid-column: wrapperCol 1 / span 6;
  grid-row: wrapperNav 3 / span 10;
  display: grid;
  /*
  grid-template-rows: repeat(4, [sor] 1fr);
  grid-template-columns: repeat(20, [oszlop] 1fr);
  */
	grid-template-columns: [fill] 1fr;
	grid-template-rows: [full] 1fr;

  @media only screen and (min-width: 760px) {
    display: grid;
    grid-row: meat;
    grid-column: cal / span 7;
    grid-template-columns: [fill] 1fr;
	  grid-template-rows: [full] 1fr;
    /*
    grid-template-rows: repeat(4, [sor] 1fr);
    grid-template-columns: repeat(4, [oszlop] 1fr);
    */
    grid-gap: 1.5vmax;
    position: relative;       
  }
`;

class Videos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vids: [
        {
          id: 'layers',
          source: 'https://www.youtube.com/embed/Iragk-SwHJA',
          url: 'https://www.youtube.com/watch?v=Iragk-SwHJA',
          felirat: 'LAYERS collection'
        },
        {
          id: 'kulissza',
          source: 'https://www.youtube.com/embed/coPS7kAMx7s',
          url: 'https://www.youtube.com/watch?v=coPS7kAMx7s',
          felirat: 'Kulissza: Veszprémi Gabriella'
        },
        {
          id: 'lucia',
          source: 'https://www.youtube.com/embed/zb0_6NebQxo',
          url: 'https://www.youtube.com/watch?v=zb0_6NebQxo',
          felirat: 'Lúcia tojásai'
        },
        {
          id: 'mercedes',
          source: 'https://www.youtube.com/embed/HpbrvKhyCIE',
          url: 'https://www.youtube.com/watch?v=HpbrvKhyCIE',
          felirat: 'Mercedes Benz Fashion Week 2018'
        }
      ],
      direction: "",
      currentIndex: 0
    }
  }
  kattBalra(e) {
		e.preventDefault();
		e.stopPropagation();
		
		let index = this.state.currentIndex;
		let length = this.state.vids.length;
		
		if (index === 0) {
			index = length-1;
		}
		else {
			index--;
		}

		console.log("current index is: " + index);

		this.setState({
			currentIndex: index,
			direction: 'left'
		});
	}
	
kattJobbra(e) {
		e.preventDefault();
		e.stopPropagation();
		
		let index = this.state.currentIndex;
		let length = this.state.vids.length;
		
		if (index === length) {
			index = -1;
		}
		else {
			index++;
		}
		
	console.log("current index is: " + index);

		this.setState({
			currentIndex: index,
			direction: 'right'
		});
	}

circleIndex(idx)
{
	let setLength = this.state.vids.length;
	//console.log(setLength);
	console.log((idx + setLength) % setLength);
	return (idx + setLength) % setLength;
}
render() {
  const playerOptions = {
    height: '100%',
    width: '100%',
    modestbranding: 1,
    rel: 0,
    showinfo: 0,

  };
  return (

    <VideoWrapper>
      <MediaQuery maxWidth={760}>
        <Arrow style={{top:"0", left:"0"}} onClick={(e)=>this.kattBalra(e)}>
						<p>&lt;</p>
        </Arrow>
        <Arrow style={{top:"0", left:"85%"}} onClick={(e)=>this.kattJobbra(e)}>
						<p>&gt;</p>
        </Arrow>
        <ReactCSSTransitionGroup
          transitionName={this.state.direction}
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}
          component='div'
          style={{position:"relative", display: "inline-block", overflow:"hidden"}}>
          <YouTube key={this.state.vids[this.circleIndex(this.state.currentIndex)].id} width="100%" height="100%" url={this.state.vids[this.circleIndex(this.state.currentIndex)].url}/>
          {/*
          <Vid className="balcard"
            key={this.state.vids[this.circleIndex(this.state.currentIndex)].id}
            content={this.state.vids[this.circleIndex(this.state.currentIndex)]}/>
          <Vid className="centercard"
            key={this.state.vids[this.circleIndex(this.state.currentIndex+1)].id}
            content={this.state.vids[this.circleIndex(this.state.currentIndex+1)]}/>
          <Vid className="jobbcard"
            key={this.state.vids[this.circleIndex(this.state.currentIndex+1)].id}
            content={this.state.vids[this.circleIndex(this.state.currentIndex+1)]}/>
            */}
        </ReactCSSTransitionGroup>
      </MediaQuery>
      <MediaQuery minWidth={760}>
        <DesktopVidGrid vids={this.state.vids}/>
      </MediaQuery>
    </VideoWrapper>
  )
}
}

module.exports = Videos;