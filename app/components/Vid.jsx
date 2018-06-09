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
		max-height: 15vw;
		max-width: 15vw;

		&:hover .vidOverlay {
			opacity: 1;
		}
	}
`;

class Vid extends React.Component {
	constructor(props) {
		super(props);
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
			<div className='vidOverlay'>
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