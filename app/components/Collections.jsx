var React = require('react');

import styled from 'styled-components';
import 'app/slideshow.css';
import MediaQuery from 'react-responsive';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

var CollectionDetails = require('CollectionDetails');
var DesktopCarousel = require('DesktopCarousel');
var MobileCarousel = require('MobileCarousel');

class Collections extends React.Component{
    constructor(props){
       super(props);
       this.state = {
           sets: {
               barack: [
                "http://unsplash.it/400/200/?image=60",
                "http://unsplash.it/400/200/?image=1",
                "http://unsplash.it/400/200/?image=2",
                "http://unsplash.it/400/200/?image=3",
                "http://unsplash.it/400/200/?image=4",
                "http://unsplash.it/400/200/?image=5",
                "http://unsplash.it/400/200/?image=22"
               ],
               cekla: [
                "http://unsplash.it/400/200/?image=6",
                "http://unsplash.it/400/200/?image=7",
                "http://unsplash.it/400/200/?image=8",
                "http://unsplash.it/400/200/?image=9",
                "http://unsplash.it/400/200/?image=10",
                "http://unsplash.it/400/200/?image=11",
               ]
            },
            selectedSet: [],
            currentIndex: 3,
            direction: ""
       }
        this.findCurrent = this.findCurrent.bind(this);
       // handlers moved up from DesktopCarousel
        this.kattBalra = this.kattBalra.bind(this);
        this.kattJobbra = this.kattJobbra.bind(this);
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

    findCurrent(){
        var hash = this.props.match.params.id;
        var selected = Object.keys(this.state.sets).filter(key => key === hash);
        console.log(hash);
        console.log(selected);
        var reallySelected = selected[0];
        console.log(reallySelected);
        var selectedSet = this.state.sets[reallySelected];
        console.log(selectedSet);
        // ezt kell továbbadni a DesktopCarouselnek meg a MobileCarouselnek propként
        this.setState((prevState) => ({selectedSet: selectedSet}));
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