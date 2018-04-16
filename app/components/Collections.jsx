var React = require('react');

import styled from 'styled-components';
import 'app/slideshow.css';
import MediaQuery from 'react-responsive';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

var CollectionDetails = require('CollectionDetails');
var DesktopCarousel = require('DesktopCarousel');
var MobileCarousel = require('MobileCarousel');

function importCollection(r) {
    return r.keys().map(r);
  }
  
const _14aw = importCollection(require.context('../img/collections/14aw', true, /\.(png|jpe?g|svg)$/));
const _15aw = importCollection(require.context('../img/collections/15aw', true, /\.(png|jpe?g|svg)$/));
const _15ss = importCollection(require.context('../img/collections/15ss', true, /\.(png|jpe?g|svg)$/));
const _16aw = importCollection(require.context('../img/collections/16aw', true, /\.(png|jpe?g|svg)$/));
const _17ss = importCollection(require.context('../img/collections/17ss', true, /\.(png|jpe?g|svg)$/));
const _LAYERS = importCollection(require.context('../img/collections/LAYERS', true, /\.(png|jpe?g|svg)$/));

class Collections extends React.Component{
    constructor(props){
       super(props);
       this.state = {
           sets: {
               _14aw: {_14aw},
               _15aw: {_15aw},
               _15ss: {_15ss},
               _16aw: {_16aw},
               _17ss: {_17ss},
               _LAYERS: {_LAYERS}
            },
            selectedSet: [],
            currentIndex: 0,
            direction: ""
       }
        this.findCurrent = this.findCurrent.bind(this);
       // handlers moved up from DesktopCarousel
        this.kattBalra = this.kattBalra.bind(this);
        this.kattJobbra = this.kattJobbra.bind(this);
        this.circleIndex = this.circleIndex.bind(this);
    }

    kattBalra(e) {
        e.preventDefault();
        e.stopPropagation();
        
        let index = this.state.currentIndex;
        let selectedSet = this.state.selectedSet;
        let length = selectedSet.length;
        
        if (index < 1) {
          index = length-1;
        }
        else {
          index--;
        }
    
        this.setState({
          currentIndex: index,
          direction: 'left'
        });
      }
      
    kattJobbra(e) {
        e.preventDefault();
        e.stopPropagation();
        
        let index = this.state.currentIndex;
        let selectedSet = this.state.selectedSet;
        let length = selectedSet.length;
        
        if (index === length) {
          index = -1;
        }
    
        index++;
        
        this.setState({
          currentIndex: index,
          direction: 'right'
        });
      }

    circleIndex(idx)
    {
        let setLength = this.state.selectedSet.length;
        return (idx+7)%7;
    }

    findCurrent(){
        let hash = this.props.match.params.id;
        let selected = Object.keys(this.state.sets).filter(key => key === hash);
        //console.log(hash);
        //console.log(selected);
        let reallySelected = selected[0];
        //console.log(reallySelected);
        let selectedSet = this.state.sets[reallySelected][hash];
        //console.log(selectedSet);
        // ezt kell továbbadni a DesktopCarouselnek meg a MobileCarouselnek propként
        this.setState((prevState) => ({selectedSet: selectedSet}));
        // console.log('GLOBAL');
        // console.log(this.state);
    };
    componentWillReceiveProps(nextProps) {
        if(nextProps.location != this.props.location) {
            // chop off "/collections/"
            let newHash = nextProps.location.pathname.substr(13);
            let selected = Object.keys(this.state.sets).filter(key => key===newHash);
            let reallySelected = selected[0];
            let selectedSet = this.state.sets[reallySelected][newHash];
            this.setState((prevState) => ({selectedSet: selectedSet}));
            // console.log(nextProps.location.pathname.substr(13));
        }
    }
    componentDidMount(){
        this.findCurrent();
    }

   render() {
    var CollectionWrapper = styled.div`
        display: grid;
        grid-column: wrapperCol 1 / span 6;
        grid-row: wrapperNav 3 / span 10;
        grid-template-rows: [sor] 1fr;
        grid-template-columns: [oszlop] 1fr;

    @media only screen and (min-width: 760px) {
        grid-row: meat;
        grid-column: cal / span 7;
        grid-template-columns: [details] 35vw repeat(4, [meatCol] 1fr);
        grid-template-rows: [sorr] 1fr;
        grid-gap: 1.5vmax;
    }
    `;
       return (
           <CollectionWrapper>
               <CollectionDetails/>
               <MediaQuery maxWidth={760}>
                <MobileCarousel/>
               </MediaQuery>
               <MediaQuery minWidth={760}>
                    <DesktopCarousel
                        selectedSet={this.state.selectedSet}
                        currentIndex={this.state.currentIndex}
                        direction={this.state.direction}
                        kattBalra={this.kattBalra}
                        kattJobbra={this.kattJobbra}/>
               </MediaQuery>
           </CollectionWrapper>
       )
   } 
}
module.exports = Collections;