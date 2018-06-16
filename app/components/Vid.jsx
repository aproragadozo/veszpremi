var React = require('react');

import MediaQuery from 'react-responsive';

import 'app/cardmobilecarousel.css';
import 'app/vidmobilecarousel.css';

import styled from 'styled-components';

const VidContainer = styled.div`
	max-width: 100vw;
	max-height: 100vw;
	overflow: hidden;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;

	@media only screen and (min-width: 760px) {
		height: 15vw;
		width: 15vw;
		&:hover .vidOverlay {
			opacity: 1;
	 }
	}
`;

// display: ${props => props.show ? 'flex' : 'none'};
const styles = {
	normal: {
		iframe: {opacity: "1"},
		div: {opacity: "0", transform: "none", pointerEvents: "auto"}
	},
	hover: {
		iframe: {opacity: '0.6'},
		div: {opacity: "1"}
	},
	klikk: {
		iframe: {opacity: "1"},
		div: {transform: "translateY(15vw)", pointerEvents: "none"}
	}
};

class Vid extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			style: styles.normal,
			userClicked: false
		}
	}
	backToNormal(e){
		e.preventDefault();
		e.stopPropagation();
		console.log("This is normal.");
		this.setState({
			style: styles.normal,
			userClicked: false
		});

	}

	hover(e) {
		e.preventDefault();
		e.stopPropagation();
		console.log("This is hover.");
		this.setState({
			style: styles.hover
		});
	}

	klikk(e) {
		e.preventDefault();
		e.stopPropagation();
		console.log(this.attributes);
		this.setState({
			style: styles.klikk,
			userClicked: true
		});
	}

	removeOverlay(e) {
		e.preventDefault();
		e.stopPropagation();
		this.setState({
			userClicked: true
		})
	}

	disable(e) {
		e.preventDefault();
		e.stopPropagation();
		window.removeEventListener("mouseenter", hover);
	}

	render(){
	return (
		<VidContainer className={this.props.className} >
			<MediaQuery maxWidth={760}>
				<iframe className="vidFrame" src={`${this.props.content.source}?modestbranding=1&rel=0&frameborder=0`} allowFullScreen></iframe>
  			<div className={'vidOverlay' + ' ' + 'mobil'}>
    			<div className="vidText">
      			<p className="vidFelirat">{this.props.content.felirat}</p>
    			</div>
  			</div>
			</MediaQuery>
			<MediaQuery minWidth={760}>
				<iframe className="vidFrame" src={`${this.props.content.source}?modestbranding=1&rel=0&frameborder=0`} allowFullScreen></iframe>
				<div className='vidOverlay' style={(this.state.userClicked)?{transform: "translateY(15vw)", pointerEvents: "none"}:{opacity: "0", transform: "none", pointerEvents: "auto"}} onClick={(e)=>this.removeOverlay(e)}>
					<div className="vidText">
						<p className="vidFelirat">{this.props.content.felirat}</p>
					</div>
				</div>
			</MediaQuery>
		</VidContainer>
	)
	}
}

module.exports = Vid;