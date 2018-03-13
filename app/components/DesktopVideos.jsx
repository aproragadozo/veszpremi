var React = require('react');

import $ from 'jquery';
import styled from 'styled-components';
import 'app/videocarousel.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Slide extends React.Component {
    render() {
        return (
          <div onClick={this.props.clickHandler} className={this.props.classes[0]}>
            <div className={this.props.classes[1]}>
              <p className={this.props.classes[2]}>&nbsp;{this.props.word}</p>
            </div>
            <img className={this.props.classes[4]}
                title={this.props.index}
                src={'https://farm' + this.props.farm + ".staticflickr.com/" + this.props.server + "/" + this.props.id + "_" + this.props.secret + '_b.jpg'}/>
            <div className={this.props.classes[3]}>
              <p className={this.props.classes[2]}>&nbsp;{this.props.word}</p>
            </div>
          </div>
        )
      }
}

class DesktopVideos extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          words:[{
            id: 1168504,
            word: "Adelaidians"
          }],
          items: [{
            id: "35597967915",
            owner: "72036844@N04",
            secret: "9cc50290b7",
            server: "4185",
            farm: 5,
            title: "The Shadow Tower",
            ispublic: 1,
            isfriend: 0,
            isfamily: 0
          },
          {
            id: "35190670030",
            owner: "92744506@N03",
            secret: "468c980cfa",
            server: "4242",
            farm: 5,
            title: "Champions Retreat",
            ispublic: 1,
            isfriend: 0,
            isfamily: 0
          },
              {
                id: "35189011430",
            owner: "95606389@N08",
            secret: "d8a8a96ac5",
            server: "4262",
            farm: 5,
            title: "Take Note",
            ispublic: 1,
            isfriend: 0,
            isfamily: 0
          }],
          currentIndex: 1,
          direction: ""
        }
        this.kattBalra = this.kattBalra.bind(this);
        this.kattJobbra = this.kattJobbra.bind(this);
        this.indexLooper = this.indexLooper.bind(this);
        this.circleIndex = this.circleIndex.bind(this);
      }
      
      circleIndex(idx)
      {
        return (idx+100)%100;
      }
      
      indexLooper(index){
        return index;
      }
      
      kattBalra(e) {
        e.preventDefault();
        e.stopPropagation();
        
        let index = this.state.currentIndex;
        let items = this.state.items;
        let length = items.length;
        
        if (index < 1) {
          index = length-1;
        }
        else {
          index--;
        }
        
        
        this.setState({
          currentIndex: index,
          direction: 'bal'
        });
      }
      
      kattJobbra(e) {
        e.preventDefault();
        e.stopPropagation();
        
        let index = this.state.currentIndex;
        let items = this.state.items;
        let length = items.length;
        
        if (index === length) {
          index = -1;
        }
    
        index++;
        
        this.setState({
          currentIndex: index,
          direction: 'jobb'
        });
      }
      componentDidMount() {
        $.ajax({
          type: "POST",
          url: "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=160f672f62d2f429e0f06fe9eb8cb555&tags=city&format=json&extras=width_b,height_b&privacy_filter=1&sort=interestingness-desc&nojsoncallback=1",
          dataType: "json",
          success: (data) =>{
            this.setState((prevState) =>({items: data.photos.photo}));
            
          }
        });
        
        $.ajax({
          type: "GET",
          url: "https://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&minCorpusCount=15&minLength=5&maxLength=15&limit=100&sortBy=count&api_key=cd9346d6373514e4b232e791e090805c72502866cfd370176",
          dataType: "json",
          success: (data) =>{
            this.setState((prevState) =>({words: data}));
            
          }
        });
        
      }
      
      render() {
        
        var realIndex = this.state.currentIndex;
        
        return (
            <ReactCSSTransitionGroup transitionName={this.state.direction} transitionEnterTimeout={1000}
                transitionLeaveTimeout={1000} component="div" style={{display: "inline-block", position:"relative", gridRow: "sor 1 / span 4", gridColumn: "oszlop 1 / span 4"}}>
                <Slide
                    classes={["videocarousel__left", "padder-top", "videocarousel__lefttext", "padder-bottom", "videocarousel__leftimage"]}
                    key={this.circleIndex(realIndex-1)}
                    index={this.circleIndex(realIndex-1)}
                    word=""
                    farm={this.state.items[this.circleIndex(realIndex-1)].farm}
                    server={this.state.items[this.circleIndex(realIndex-1)].server}
                    id={this.state.items[this.circleIndex(realIndex-1)].id}
                    secret={this.state.items[this.circleIndex(realIndex-1)].secret}
                    clickHandler={(e)=>this.kattBalra(e)}/>
                <Slide
                    classes={["videocarousel__center", "videocarousel__textpositioner--top", "videocarousel__centertext", "videocarousel__textpositioner--bottom", "videocarousel__centerimage"]}
                    key={this.circleIndex(realIndex)}
                    index={this.circleIndex(realIndex)}
                    word={this.state.words[this.circleIndex(realIndex-1)].word}
                    farm={this.state.items[this.circleIndex(realIndex)].farm}
                    server={this.state.items[this.circleIndex(realIndex)].server}
                    id={this.state.items[this.circleIndex(realIndex)].id}
                    secret={this.state.items[this.circleIndex(realIndex)].secret}/>
                <Slide
                    classes={["videocarousel__right", "padder-top", "videocarousel__righttext", "padder-bottom", "videocarousel__rightimage"]}
                    key={this.circleIndex(realIndex+1)}
                    index={this.circleIndex(realIndex+1)}
                    word=""
                    farm={this.state.items[this.circleIndex(realIndex+1)].farm}
                    server={this.state.items[this.circleIndex(realIndex+1)].server}
                    id={this.state.items[this.circleIndex(realIndex+1)].id}
                    secret={this.state.items[this.circleIndex(realIndex+1)].secret}
                    clickHandler={(e)=>this.kattJobbra(e)}/>   
            </ReactCSSTransitionGroup>
        )  
      }
}

{/*
const VideoWrapper = styled.div`
    grid-column: wrapperCol 1 / span 6;
    grid-row: wrapperNav 3 / span 10;
    display: grid;
    grid-template-rows: repeat(4, [sor] 1fr);
    grid-template-columns: repeat(20, [oszlop] 1fr);

    @media only screen and (min-width: 760px) {
        display: grid;
        grid-row: meat;
        grid-column: cal / span 7;
        grid-template-rows: repeat(4, [sor] 1fr);
        grid-template-columns: repeat(4, [oszlop] 1fr);
        grid-gap: 1.5vmax;
        
    }
`;
const VideoPrevBox = styled.div`
    display: none;

    @media only screen and (min-width: 760px) {
        display: grid;
        grid-row: sor 1 / span 4;
        grid-column: oszlop 1;
        align-items: center;
    }
`;
const VideoPrevItem = styled.div`
    @media only screen and (min-width: 760px) {
        background-color: #BBB6B2;
        width: 100%;
        height: 25%;
    }
`;
const VideoNavPrev = styled.div`
    display: grid;
    grid-row: sor 1 / span 4;
    grid-column: oszlop 1 / span 3;
    z-index: 5;
    background-color: #d4d3d3;
    
    @media only screen and (min-width: 760px) {
        display: none;
    }
`;
const VideoNavNext = styled.div`
    display: grid;
    grid-row: sor 1 /span 4;
    grid-column: oszlop 18 / span 3;
    z-index: 5;
    background-color: #d4d3d3;

    @media only screen and (min-width: 760px) {
        display: none;
    }
`;
const VideoCurrentBox = styled.div`
    display: grid;
    grid-row: sor 1 / span 4;
    grid-column: oszlop 1 / span 20;
    grid-template-rows: repeat(4, [currentRow] 1fr);
    grid-template-columns: [fullCol] 1fr;
    grid-gap: 1.5vmax;
    
    @media only screen and (min-width: 760px) {
        display: grid;
        grid-row: sor 1 /span 4;
        grid-column: oszlop 2 / span 2;
        grid-template-rows: repeat(4, [currentRow] 1fr);
        grid-template-columns: repeat(10, [currentCol] 1fr);
        grid-gap: 1.5vmax;
    }
`;
const VideoCurrentTextTop = styled.div`
    grid-row: currentRow 3;
    grid-column: fullCol;
    background-color: #BBB6B2;
    
    @media only screen and (min-width: 760px) {
        grid-row: currentRow 1;
        grid-column: currentCol 1 / span 7;
        background-color: #BBB6B2;
    }
`;
const VideoCurrentMain = styled.div`
    grid-row: currentRow 1 / span 2;
    grid-column: fullCol;
    background-color: #BBB6B2;

    @media only screen and (min-width: 760px) {
        grid-row: currentRow 2 / span 2;
        grid-column: currentCol 1 / span 10;
        background-color: #BBB6B2;
    }
`;
const VideoCurrentTextBottom = styled.div`
    grid-row: currentRow 4;
    grid-column: fullCol;
    background-color: #BBB6B2;

    @media only screen and (min-width: 760px) {
        grid-row: currentRow 4;
        grid-column: currentCol 1 / span 7;
        background-color: #BBB6B2;
    }
`;
const VideoNextBox = styled.div`
    display: none;

    @media only screen and (min-width: 760px) {
        display: grid;
        grid-row: sor 1 / span 4;
        grid-column: oszlop 4;
        align-items: center;
        grid-gap: 1.5vmax;
    }
`;
const VideoNextItem = styled.div`
@media only screen and (min-width: 760px) {
    background-color: #BBB6B2;
        width: 100%;
        height: 25%;
}
`;

// experryment
//const images = ["http://lorempicsum.com/futurama/627/300/4", "http://lorempicsum.com/nemo/627/300/4", "http://lorempicsum.com/simpsons/627/300/4", "http://lorempicsum.com/up/627/300/4"];


class Videos extends React.Component{
   render() {
       return (
           
        <VideoWrapper>
               <VideoPrevBox>
                   <VideoPrevItem/>
               </VideoPrevBox>
               <VideoNavPrev/>
               <VideoCurrentBox>
                   <VideoCurrentTextTop/>
                   <VideoCurrentMain/>
                   <VideoCurrentTextBottom/>
               </VideoCurrentBox>
               <VideoNextBox>
                   <VideoNextItem/>
               </VideoNextBox>
               <VideoNavNext/>
           </VideoWrapper>
       )
   } 
}
*/}
module.exports = DesktopVideos;