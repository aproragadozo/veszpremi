var React = require('react');

import MediaQuery from 'react-responsive';

import styled from 'styled-components';

import 'app/press.css';

const DesktopCardGrid = require('DesktopCardGrid');

const PressWrapper = styled.div`
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
			]
		}
	}
	render() {
		return (
			<PressWrapper>
				<DesktopCardGrid cards={this.state.cards}/>
			</PressWrapper>
		)
	}
}

module.exports = Press;