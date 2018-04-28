// gmaps api key: AIzaSyA6ZgLxroukIwdGFDxkiHkDGDlwqgCatUE
// dummy latitude: 47.48561696
// dummy longitude: 19.05474039

var React = require('react');
import { Gmaps, Marker, InfoWindow, Circle } from 'react-gmaps';

import styled from 'styled-components';

const params = {key: 'AIzaSyA6ZgLxroukIwdGFDxkiHkDGDlwqgCatUE'};

const ContactWrapper = styled.div`
	

	@media only screen and (min-width: 760px){
		width: 100%;
		height: calc(88vh - (80px + 3vmax));
		grid-row: meat;
		grid-column: cal / span 6;
		position: relative;
	}
`;

const ContactText1 = styled.div`
	
	@media only screen and (min-width: 760px) {
		background-color: #BBB6B2;
		width: 100%;
		height: calc(25% - 0.5vmax);
		margin-bottom: 1.5vmax;
	}
`;

const ContactText2 = styled.div`
	
	@media only screen and (min-width: 760px) {
		background-color: #bbb6b2;
    width:100%;
    height: calc(50% - 1.5vmax);
	}
`;

const ContactText3 = styled.div`
	
	@media only screen and (min-width:760px) {
		background-color: #bbb6b2;
    margin-top: 1.5vmax;
    width: 100%;
    height: calc(25% - 0.5vmax);
	}
`;

const ContactDetails = () => (
	<div
		style={{
			display: 'flex',
			width: 'calc(23vw + (77vw / 6))',
			height: '100%',
			flexDirection: 'column',
			paddingRight: '1vmax',
			position: 'absolute'
			}}>
		<ContactText1/>
		<ContactText2/>
		<ContactText3/>
	</div>
);

class Map extends React.Component{
	onMapCreated(map) {
		map.setOptions({
			disableDefaultUI: true
		});
	}
	render() {
		return (
			<div style={{
				left:'calc(25.5vw + (77vw / 6))',
				position: 'absolute', width: 'calc((73vw / 6) * 5)', height: '100%'}}>
				<Gmaps
				width={'100%'}
				height={'100%'}
				zoom={11}
				onMapCreated={this.onMapCreated}
				lat={47.48561696}
				lng={19.05474039}
				params={params}
				>
				</Gmaps>
			</div>
		)
	}
}

class ContactPage extends React.Component{
	render() {
		return (
			<ContactWrapper>
				<ContactDetails/>
				<Map/>
			</ContactWrapper>
		)
	}
}

module.exports = ContactPage;