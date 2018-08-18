var React = require('react');

import MediaQuery from 'react-responsive';

import styled from 'styled-components';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import 'app/press.css';
import 'app/videocarousel.css';

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
					text: 'We Heart',
					link: "https://www.we-heart.com/2018/05/14/design-award-2018-competition-winners/",
					image: require('../img/press/01.jpg')
				},
				{
					text: 'Not Just A Label',
					link: "https://www.notjustalabel.com/designer/gabriellaveszpremi",
					image: require('../img/press/02.jpg')
				},
				{
					text: "Rebel Live Magazine",
					link: "https://rebellivemagazine.com/2018/06/14/magyar-divat-es-formatervezok-fenntarthato-alkotasai-a-helsinki-design-weeken/",
					image: require('../img/press/03.jpg')
				},
				{
					text: "PS Magazin",
					link: "http://psmagazin.hu/cikk/magyar_divattervezok_a_ruhakon_tul/",
					image: require('../img/press/04.jpg')
				},
				{
					text: "Styledit",
					link: "https://www.styledit.hu/igeny-van-mar-a-magyar-designer-cipokre-is-veszpremi-gabival-beszelgettunk-48946",
					image: require('../img/press/05.jpg')
				},
				{
					text: "Rebel Live Magazine",
					link: "https://rebellivemagazine.com/2018/05/12/amikor-a-divat-az-utcai-muveszet-az-irodalom-es-a-zene-talalkozik-urbsart-2018-roma/",
					image: require('../img/press/06.jpg')
				},
				{
					text: "Marie Claire",
					link: "http://marieclaire.hu/divat/2018/04/29/v4-divattervezok-mutatkoznak-be-romaban/",
					image: require('../img/press/07.jpg')
				},
				{
					text: "Petőfi Live",
					link: "https://www.petofilive.hu/barbiblogja/cikk/2018/04/20/hazai-kollekcio-a-fenntarthato-divat-jegyeben/",
					image: require('../img/press/08.jpg')
				},
				{
					text: 'Bence Csalár',
					link: "http://bencecsalar.com/gabriellaveszpremi-innovativ-retegek/",
					image: require('../img/press/09.jpg')
				},
				{
					text: "Rebel Live Magazine",
					link: "https://rebellivemagazine.com/2017/09/28/a-bor-szimbolikus-jelentesenek-valtozasa-veszpremi-gabival-beszelgettunk/",
					image: require('../img/press/10.jpg')
				},
				{
					text: "Marie Claire",
					link: "https://marieclaire.hu/divat/2017/08/30/fenntarthato-cipocsodak-magyar-tervezotol/",
					image: require('../img/press/11.jpg')
				},
				{
					text: "Designisso",
					link: "http://designisso.com/hu/2017/07/07/tokeletesen-felhasznalt-alapanyag-veszpremi-gabriella-cipo-kollekciojaban/",
					image: require('../img/press/12.jpg')
				},
				{
					text: "Marie Claire",
					link: "https://marieclaire.hu/divat/2017/07/31/rajtuk-all-a-magyar-divat-sorsa-a-legigeretesebb-frissen-vegzett-divattervezok/",
					image: require('../img/press/13.jpg')
				},
				{
					text: "MOME",
					link: "http://diploma.mome.hu/2017/ma/veszpremi-gabriella-maria",
					image: require('../img/press/14.jpg')
				},
				{
					text: "Behance",
					link: "https://www.behance.net/gallery/54882413/GABRIELLAVESZPREMI-Identity",
					image: require('../img/press/15.jpg')
				},
				{
					text: "Marie Claire",
					link: "https://marieclaire.hu/lookbook/2017/05/18/gabriellaveszpremi-2017-tavaszi-nyari-taskakollekcio/",
					image: require('../img/press/16.jpg')
				},
				{
					text: "Marie Claire",
					link: "https://marieclaire.hu/divat/2017/04/09/bemutatjuk-a-gabriellaveszpremi-imadnivalo-taskait/",
					image: require('../img/press/17.jpg')
				},
				{
					text: "We Love Budapest",
					link: "https://welovebudapest.com/toplistak/taskak-tartalommal-kedvenc-shoppereink-budapesti-muhelyekbol/",
					image: require('../img/press/18.jpg')
				},
				{
					text: "Meyer Eszter Virág",
					link: "http://www.meyeresztervirag.com/2016/12/a-noi-taska-titkos-univerzumaban.html",
					image: require('../img/press/19.jpg')
				},
				{
					text: "Meyer Eszter Virág",
					link: "http://www.meyeresztervirag.com/2016/12/meyer-x-soho.html",
					image: require('../img/press/20.jpg')
				},
				{
					text: "Hestyle",
					link: "http://hestyle.blog.hu/2014/11/11/tetszik_nem_tetszik_je_suis_belle_by_komod_taskakollekcio",
					image: require('../img/press/21.jpg')
				},
				{
					text: "Hype and Hyper",
					link: "http://hypeandhyper.com/je-suis-belle-by-komod-aw1415/",
					image: require('../img/press/22.jpg')
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
			direction: 'bal'
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
			direction: 'jobb'
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
						<Card className="centercard"
            	key={this.state.currentIndex}
            	content={this.state.cards[this.circleIndex(this.state.currentIndex)]}/>
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