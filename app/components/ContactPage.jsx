// gmaps api key: AIzaSyA6ZgLxroukIwdGFDxkiHkDGDlwqgCatUE
// dummy latitude: 47.48561696
// dummy longitude: 19.05474039

var React = require('react');
import { Gmaps, Marker, InfoWindow, Circle } from 'react-gmaps';

import styled from 'styled-components';

const params = {key: 'AIzaSyA6ZgLxroukIwdGFDxkiHkDGDlwqgCatUE'};

const mapStyle = [
	{
			"featureType": "all",
			"elementType": "labels.text.stroke",
			"stylers": [
					{
							"visibility": "off"
					}
			]
	},
	{
			"featureType": "administrative.neighborhood",
			"elementType": "geometry",
			"stylers": [
					{
							"visibility": "on"
					}
			]
	},
	{
			"featureType": "administrative.neighborhood",
			"elementType": "labels.text.fill",
			"stylers": [
					{
							"color": "#333333"
					}
			]
	},
	{
			"featureType": "administrative.land_parcel",
			"elementType": "geometry",
			"stylers": [
					{
							"visibility": "off"
					}
			]
	},
	{
			"featureType": "landscape.natural.landcover",
			"elementType": "geometry.fill",
			"stylers": [
					{
							"color": "#c04040"
					},
					{
							"visibility": "on"
					}
			]
	},
	{
			"featureType": "landscape.natural.terrain",
			"elementType": "geometry",
			"stylers": [
					{
							"visibility": "on"
					},
					{
							"color": "#f63f3f"
					}
			]
	},
	{
			"featureType": "poi",
			"elementType": "labels.text",
			"stylers": [
					{
							"visibility": "off"
					}
			]
	},
	{
			"featureType": "poi",
			"elementType": "labels.icon",
			"stylers": [
					{
							"visibility": "on"
					}
			]
	},
	{
			"featureType": "poi.business",
			"elementType": "geometry",
			"stylers": [
					{
							"visibility": "on"
					},
					{
							"color": "#ee3030"
					}
			]
	},
	{
			"featureType": "poi.business",
			"elementType": "labels.text",
			"stylers": [
					{
							"visibility": "off"
					}
			]
	},
	{
			"featureType": "poi.business",
			"elementType": "labels.icon",
			"stylers": [
					{
							"visibility": "off"
					}
			]
	},
	{
			"featureType": "poi.park",
			"elementType": "geometry",
			"stylers": [
					{
							"visibility": "on"
					},
					{
							"color": "#b1c0b1"
					}
			]
	},
	{
			"featureType": "poi.place_of_worship",
			"elementType": "geometry",
			"stylers": [
					{
							"visibility": "off"
					}
			]
	},
	{
			"featureType": "poi.place_of_worship",
			"elementType": "geometry.fill",
			"stylers": [
					{
							"visibility": "on"
					}
			]
	},
	{
			"featureType": "poi.place_of_worship",
			"elementType": "labels.text",
			"stylers": [
					{
							"visibility": "off"
					}
			]
	},
	{
			"featureType": "poi.place_of_worship",
			"elementType": "labels.icon",
			"stylers": [
					{
							"visibility": "off"
					}
			]
	},
	{
			"featureType": "road",
			"elementType": "geometry",
			"stylers": [
					{
							"visibility": "simplified"
					}
			]
	},
	{
			"featureType": "road",
			"elementType": "labels",
			"stylers": [
					{
							"visibility": "off"
					}
			]
	},
	{
			"featureType": "road",
			"elementType": "labels.text",
			"stylers": [
					{
							"visibility": "off"
					}
			]
	},
	{
			"featureType": "road.local",
			"elementType": "labels.text",
			"stylers": [
					{
							"weight": 0.5
					},
					{
							"color": "#333333"
					}
			]
	},
	{
			"featureType": "transit.station",
			"elementType": "geometry",
			"stylers": [
					{
							"visibility": "on"
					}
			]
	},
	{
			"featureType": "transit.station",
			"elementType": "geometry.fill",
			"stylers": [
					{
							"visibility": "on"
					},
					{
							"color": "#a39797"
					}
			]
	},
	{
			"featureType": "transit.station",
			"elementType": "labels.icon",
			"stylers": [
					{
							"gamma": 1
					},
					{
							"saturation": 50
					}
			]
	},
	{
			"featureType": "transit.station.rail",
			"elementType": "geometry",
			"stylers": [
					{
							"visibility": "on"
					},
					{
							"color": "#cbc2c2"
					}
			]
	},
	{
			"featureType": "water",
			"elementType": "all",
			"stylers": [
					{
							"visibility": "on"
					},
					{
							"saturation": 50
					},
					{
							"hue": "#50a5d1"
					}
			]
	},
	{
			"featureType": "water",
			"elementType": "geometry",
			"stylers": [
					{
							"color": "#bbd9e4"
					}
			]
	}
];

const ContactWrapper = styled.div`
	grid-column: wrapperCol 1 / span 6;
	grid-row: wrapperNav 3 / span 10;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: white;
	white-space: pre-line;

	@media only screen and (min-width: 760px){
		width: 100%;
		grid-row: meat;
		grid-column: cal / span 6;
		position: relative;
	}
`;

const DetailsWrapper = styled.div`
	display: flex;
	width: 100%;
	height: 50%;
	justify-content: space-around;
	align-items: center;
	max-width: 400px;
	flex-direction: column;
	order: 2;
	font-size: 0.8em;

	@media only screen and (min-width: 760px) {
		left: 1vmax;
		width: calc(23vw + (77vw / 6));
		height: 100%;
		padding-right: 1vmax;
		position: absolute;
		max-width: 100%;
		font-size: 2em;
	}
`;

const MapWrapper = styled.div`
	order: 1;
	width: 100%;
	max-width: 400px;
	height: 50%;
	@media only screen and (min-width: 760px) {
		display: block;
		left: calc(25.5vw + (77vw / 6));
		position: absolute;
		width: calc((73vw / 6) * 5);
		height: 100%;
		max-width: 100%;
		order: 2;
	}
`;

const ContactText1 = styled.div`
	height: 45%;
	width: 100%;
	@media only screen and (min-width: 760px) {
		height: calc(25% - 0.5vmax);
		margin-bottom: 1.5vmax;
	}
`;

const ContactText2 = styled.div`
	width: 100%;
	height: 45%;
	@media only screen and (min-width: 760px) {
		display: block;
    height: calc(50% - 1.5vmax);
	}
`;

const ContactText3 = styled.div`
	display: none;
	@media only screen and (min-width:760px) {
    margin-top: 1.5vmax;
    width: 100%;
		height: calc(25% - 0.5vmax);
		display: block;
	}
`;
class Map extends React.Component{
	onMapCreated(map) {
		map.setOptions({
			disableDefaultUI: true
		});
	}
	render() {
		return (
			<MapWrapper>
				<Gmaps
				width={'100%'}
				height={'100%'}
				zoom={15}
				onMapCreated={this.onMapCreated}
				lat={47.494433}
				lng={19.052492}
				styles={mapStyle}
				params={params}
				>
					<Marker lat={47.494433} lng={19.052492} title="Showroom" />
				</Gmaps>
			</MapWrapper>
		)
	}
}

function ContactPage(props){
		return (
			<ContactWrapper>
				<DetailsWrapper>
					<ContactText1>
						<p>{props.one}</p>
					</ContactText1>
					<ContactText2>
						<p>{props.two}</p>
						</ContactText2>
					<ContactText3>
						<p>{props.three}</p>
					</ContactText3>
				</DetailsWrapper>
				<Map/>
			</ContactWrapper>
		)
}

module.exports = ContactPage;