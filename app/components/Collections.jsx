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

class Slide extends React.Component{
    render() {
        return (
            <img className={this.props.class}
                key={this.props.index}
                title={this.props.index}
                src={this.props.src}
                onClick={this.props.clickHandler}/>
        )
    }
}

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
        var hash = this.props.match.params.id;
        var selected = Object.keys(this.state.sets).filter(key => key === hash);
        //console.log(hash);
        //console.log(selected);
        var reallySelected = selected[0];
        //console.log(reallySelected);
        var selectedSet = this.state.sets[reallySelected][hash];
        //console.log(selectedSet);
        // ezt kell továbbadni a DesktopCarouselnek meg a MobileCarouselnek propként
        this.setState((prevState) => ({selectedSet: selectedSet}));
        console.log('GLOBAL');
        console.log(this.state);
    }
    componentWillReceiveProps(nextProps) {
        this.findCurrent();
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
    {/*
        ez az, amit ki fogunk ütni a mediaquery alapján behúzott DesktopCarousellel és MobileCarousellel
    */}
    var CollectionSlideshow = styled.div`
        grid-column: oszlop;
        grid-row: sor;
        display: grid;
        grid-template-rows: repeat(4, [sor] 1fr);
        grid-template-columns: repeat(20, [oszlop] 1fr);

        @media only screen and (min-width: 760px) {
            position: relative;
            grid-row: sorr;
            grid-column: meatCol 1 / span 4;
            grid-column-gap: 1.5vmax;
            grid-row-gap: 3.5vmax;
            margin-left: 1vmax;
        }
    `;
    var SlideshowBack = styled.div`
        background-color: #d4d3d3;
        grid-row: sor 1 / span 4;
        grid-column: oszlop 1 / span 3;

        @media only screen and (min-width: 760px) {
            grid-row: sor 2 / span 2;
            grid-column: oszlop 1 / span 5;
            background-color: #817D7A;
        }
    `;
    var SlideshowCurrent = styled.div`
        background-color: #817D7A;
        grid-row: sor 1 / span 4;
        grid-column: oszlop 4 / span 14;

        @media only screen and (min-width: 760px) {
            grid-row: sor 1 / span 4;
            grid-column: oszlop 6 / span 10;
        }
    `;
    var SlideshowForward = styled.div`
        background-color: #d4d3d3;
        grid-row: sor 1 / span 4;
        grid-column: oszlop 18 / span 3;

        @media only screen and (min-width: 760px) {
            grid-row: sor 2 / span 2;
            grid-column: oszlop 16 / span 5;
            background-color: #817D7A;
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
               {/* ditched DesktopCarousel for the literal images in an attempt to make the transition work 
                    <ReactCSSTransitionGroup
                        transitionName={this.state.direction}
                        transitionEnterTimeout={1000}
                        transitionLeaveTimeout={1000}
                        component='div'
                        style={{display: "grid",
                        position: "relative",
                        gridRow: "sorr",
                        gridColumn: "meatCol 1 / span 4",
                        marginLeft: "1vmax",
                        transition: "all 1s ease-out"}}>
                        <Slide class={"bal"}
                            index={this.circleIndex(this.state.currentIndex)}
                            src={this.state.selectedSet[this.circleIndex(this.state.currentIndex)]}
                            clickHandler={(e)=>this.kattBalra(e)}/>
                        <Slide class={"center"}
                            index={this.circleIndex(this.state.currentIndex+1)}
                            src={this.state.selectedSet[this.circleIndex(this.state.currentIndex+1)]}/>
                        <Slide class={"jobb"}
                            index={this.circleIndex(this.state.currentIndex+2)} 
                            src={this.state.selectedSet[this.circleIndex(this.state.currentIndex+2)]}
                            clickHandler={(e)=>this.kattJobbra(e)}/>
                    </ReactCSSTransitionGroup>
                    */}
               </MediaQuery>
               {/*
               <CollectionSlideshow>
                <SlideshowBack/>
                <SlideshowCurrent/>
                <SlideshowForward/>
               </CollectionSlideshow>
               */}
           </CollectionWrapper>
       )
   } 
}
module.exports = Collections;