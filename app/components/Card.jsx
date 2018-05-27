var React = require('react');

import MediaQuery from 'react-responsive';

import 'app/cardmobilecarousel.css';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import styled from 'styled-components';

const CardContainer = styled.div`
	max-width: 100vw;
	max-height: 100vw;
	overflow: hidden;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;

	@media only screen and (min-width: 760px) {
		max-height: 15vw;
		max-width: 15vw;

		&:hover .cardImage {
			opacity: 0.3;
		}
		&:hover .cardOverlay {
			opacity: 1;
		}
	}
`;

// CardContainer might be fine like this,
// but the component needs the click methods and the circleIndex bit
// and render a ReactCSSTransitionGroup at mobile size

class Card extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
	return (
		<CardContainer className={this.props.className} >
			<MediaQuery maxWidth={760}>
				<img className="cardImage" src={this.props.content.image}/>
					<div className={'cardOverlay' + ' ' + 'mobil'}>
						<div className="cardText">
							<a href={this.props.content.link}>{this.props.content.text}</a>
						</div>
					</div>
			</MediaQuery>
			<MediaQuery minWidth={760}>
					<img className="cardImage" src={this.props.content.image}/>
					<div className="cardOverlay">
						<div className="cardText">
							<a href={this.props.content.link}>{this.props.content.text}</a>
						</div>
					</div>
			</MediaQuery>
		</CardContainer>
	)
	}
}

module.exports = Card;