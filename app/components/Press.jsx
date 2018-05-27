var React = require('react');

import MediaQuery from 'react-responsive';

import styled from 'styled-components';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import 'app/press.css';

const Arrow = require('MobileCarousel').Arrow;
const Card = require('Card');
const DesktopCardGrid = require('DesktopCardGrid');

const PressWrapper = styled.div`
	position: relative;
	background: white;
	display: grid;
  grid-column: wrapperCol 1 / span 6;
  grid-row: wrapperNav 3 / span 10;
	grid-template-columns: [fill] 1fr;
	grid-template-rows: [full] 1fr;

  @media only screen and (min-width: 760px) {
    padding: 1vmax 0 1vmax 1vmax;
    grid-row: meat;
    grid-column: cal / span 7;
		grid-gap: 1.5vmax;
		overflow-y: auto;
  }
`;

class Press extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			cards: [
				{
					text: 'PS Magazin',
					link: "http://psmagazin.hu/cikk/magyar_divattervezok_a_ruhakon_tul/",
					image: require('../img/press/01.jpg')
				},
				{
					text: 'Styledit',
					link: "https://www.styledit.hu/igeny-van-mar-a-magyar-designer-cipokre-is-veszpremi-gabival-beszelgettunk-48946",
					image: require('../img/press/02.jpg')
				},
				{
					text: "Rebel Live Magazine",
					link: "https://rebellivemagazine.com/2018/05/12/amikor-a-divat-az-utcai-muveszet-az-irodalom-es-a-zene-talalkozik-urbsart-2018-roma/",
					image: require('../img/press/03.jpg')
				},
				{
					text: "Marie Claire",
					link: "http://marieclaire.hu/divat/2018/04/29/v4-divattervezok-mutatkoznak-be-romaban/",
					image: require('../img/press/04.jpg')
				},
				{
					text: "Petőfi Live",
					link: "https://www.petofilive.hu/barbiblogja/cikk/2018/04/20/hazai-kollekcio-a-fenntarthato-divat-jegyeben/",
					image: require('../img/press/05.jpg')
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
		let length = this.state.cards.length;
		
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
		let length = this.state.cards.length;
		
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
	let setLength = this.state.cards.length;
	//console.log(setLength);
	console.log((idx + setLength) % setLength);
	return (idx + setLength) % setLength;
}

	render() {
		return (
			<PressWrapper>
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
						style={{position:"relative", width:"100%", display: "inline-block", overflow:"hidden"}}>
						<Card className="balcard"
            	key={this.state.currentIndex+1}
            	content={this.state.cards[this.circleIndex(this.state.currentIndex+1)]}/>
						<Card className="centercard"
            	key={this.state.currentIndex+2}
            	content={this.state.cards[this.circleIndex(this.state.currentIndex+2)]}/>
						<Card className="jobbcard"
            	key={this.state.currentIndex+3}
            	content={this.state.cards[this.circleIndex(this.state.currentIndex+3)]}/>
					</ReactCSSTransitionGroup>
				</MediaQuery>
				<MediaQuery minWidth={760}>
					<DesktopCardGrid cards={this.state.cards}/>
				</MediaQuery>
			</PressWrapper>
		)
	}
}

module.exports = Press;