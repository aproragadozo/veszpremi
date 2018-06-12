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

class Vid extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			overlay: false,
			fadeVid: true
		}
	}
	activateVid(e){
		e.preventDefault();
		e.stopPropagation();
		console.log("This is dog.");
		this.setState((prevState)=>({
			overlay: !prevState.overlay,
			fadeVid: !prevState.fadeVid
		}));

	}

	deactivateVid(e) {
		e.preventDefault();
		e.stopPropagation();
		console.log("This is cat.");
		this.setState((prevState)=>({
			overlay: !prevState.overlay,
			fadeVid: !prevState.fadeVid
		}));

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
				<iframe className="vidFrame" style={(`${this.state.fadeVid}`) ?{opacity:"0.6"} : {opacity:"1"}} src={`${this.props.content.source}?modestbranding=1&rel=0&frameborder=0`} allowFullScreen></iframe>
				<div className='vidOverlay' style={(`${this.state.overlay}`)? {opacity: "1", transform: "none"} : {opacity: "0", transform:"translateY(15vw)"}} onClick={(e)=>this.activateVid(e)} onMouseLeave={(e)=>this.deactivateVid(e)}>
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