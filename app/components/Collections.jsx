var React = require('react');

import styled from 'styled-components';

import 'app/slideshow.css';
import 'app/mobilecarousel.css';

import MediaQuery from 'react-responsive';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

var CollectionDetails = require('CollectionDetails');
// var DesktopCarousel = require('DesktopCarousel');
// var MobileCarousel = require('MobileCarousel').MobileCarousel;
const Arrow = require('MobileCarousel').Arrow;

function importCollection(r) {
    return r.keys().map(r);
  }

// the text for the collections
import {collectionTexts} from '../text/collections.js';
// mindegyik campaign/lookbookhoz külön const kell!
//const collectionTexts = require("../text/text.json");

const _14awcampaigntext = collectionTexts._14aw.campaign;
const _14awlookbooktext = collectionTexts._14aw.lookbook;
const _15awcampaigntext = collectionTexts._15aw.campaign;
const _15sscampaigntext = collectionTexts._15ss.campaign;
const _15sslookbooktext = collectionTexts._15ss.lookbook;
const _16awcampaigntext = collectionTexts._16aw.campaign;
const _17sscampaigntext = collectionTexts._17ss.campaign;
const _17sslookbooktext = collectionTexts._17ss.lookbook;
const _LAYERScampaigntext = collectionTexts._LAYERS.campaign;
const _LAYERSlookbooktext = collectionTexts._LAYERS.lookbook;

const _14awcampaign = importCollection(require.context('../img/collections/14aw/campaign', false, /\.(png|jpe?g|svg)$/));
const _14awlookbook = importCollection(require.context('../img/collections/14aw/lookbook', false, /\.(png|jpe?g|svg)$/));
const _15awcampaign = importCollection(require.context('../img/collections/15aw/campaign', false, /\.(png|jpe?g|svg)$/));
const _15sscampaign = importCollection(require.context('../img/collections/15ss/campaign', false, /\.(png|jpe?g|svg)$/));
const _15sslookbook = importCollection(require.context('../img/collections/15ss/lookbook', false, /\.(png|jpe?g|svg)$/));
const _16awcampaign = importCollection(require.context('../img/collections/16aw/campaign', false, /\.(png|jpe?g|svg)$/));
const _17sscampaign = importCollection(require.context('../img/collections/17ss/campaign', false, /\.(png|jpe?g|svg)$/));
const _17sslookbook = importCollection(require.context('../img/collections/17ss/lookbook', false, /\.(png|jpe?g|svg)$/));
const _LAYERScampaign = importCollection(require.context('../img/collections/LAYERS/campaign', false, /\.(png|jpe?g|svg)$/));
const _LAYERSlookbook = importCollection(require.context('../img/collections/LAYERS/lookbook', false, /\.(png|jpe?g|svg)$/));

// npm plugin to generate unique keys for the collection photos
const uuidv4 = require('uuid/v4');

const CollectionWrapper = styled.div`
    display: grid;
    grid-column: wrapperCol 1 / span 6;
    grid-row: wrapperNav 3 / span 10;
    grid-template-rows: [sor] 1fr;
    grid-template-columns: [oszlop] 1fr;
    position: relative;
    background: white;

    @media only screen and (min-width: 760px) {
    grid-row: meat;
    grid-column: cal / span 7;
    grid-template-columns: [details] 35vw repeat(4, [meatCol] 1fr);
    grid-template-rows: [sorr] minmax(60vh, 800px);
    grid-gap: 1.5vmax;
    }
`;

class Collections extends React.Component{
    constructor(props){
       super(props);
       this.state = {
           sets: {
               _14aw: {
                   campaign: {_14awcampaign},
                   lookbook: {_14awlookbook}
               },
               _15aw: {
                   campaign: {_15awcampaign}
               },
               _15ss: {
                   campaign: {_15sscampaign},
                   lookbook: {_15sslookbook}
               },
               _16aw: {
                    campaign: {_16awcampaign}
               },
               _17ss: {
                   campaign: {_17sscampaign},
                   lookbook: {_17sslookbook}
               },
               _LAYERS: {
                   campaign: {_LAYERScampaign},
                   lookbook: {_LAYERSlookbook}
               }
            },
            texts: {
                _14aw: {
                    campaign: {_14awcampaigntext},
                    lookbook: {_14awlookbooktext}
                },
                _15aw: {
                    campaign: {_15awcampaigntext}
                },
                _15ss: {
                    campaign: {_15sscampaigntext},
                    lookbook: {_15sslookbooktext}
                },
                _16aw: {
                    campaign: {_16awcampaigntext}
                },
                _17ss: {
                    campaign: {_17sscampaigntext},
                    lookbook: {_17sslookbooktext}
                },
                _LAYERS: {
                    campaign: {_LAYERScampaigntext},
                    lookbook: {_LAYERSlookbooktext}
                }
            },
            selectedSet: [],
            collectionText: {},
            gallery: [],
            currentIndex: 1,
            galleryIndex: 0,
            direction: ""
       }
        this.findCurrent = this.findCurrent.bind(this);
       // handlers moved up from DesktopCarousel
        this.kattBalra = this.kattBalra.bind(this);
        this.kattJobbra = this.kattJobbra.bind(this);
        this.galleryBalra = this.galleryBalra.bind(this);
        this.galleryJobbra = this.galleryJobbra.bind(this);
        this.circleIndex = this.circleIndex.bind(this);
        this.populateGallery = this.populateGallery.bind(this);
    }

    galleryBalra(e) {
        e.preventDefault();
        e.stopPropagation();

        let index = this.state.galleryIndex;
        let gallery = this.state.gallery;
        let length = gallery.length;
        
        console.log("The left event handler says the gallery is this long: " + String(length));

        if (index < 1) {
          index = length-1;
        }
        else {
          index--;
        }
    
        if(window.innerWidth < 760) {
            this.setState({
                galleryIndex: index,
                direction: 'kisBalra'
              })
        }
        else {
            this.setState({
                galleryIndex: index,
                direction: 'nagyBalra'
              })
        }
    }

    galleryJobbra(e) {
        e.preventDefault();
        e.stopPropagation();

        let index = this.state.galleryIndex;
        let gallery = this.state.gallery;
        let length = gallery.length;

        console.log("The right event handler says the gallery is this long: " + String(length));
        
        if (index === length) {
            index = -1;
          }
          else {
              ++index;
          }
          
          if(window.innerWidth < 760) {
              this.setState({
                  galleryIndex: index,
                  direction: 'kisJobbra'
                  })
          }
          else {
              this.setState({
                  galleryIndex: index,
                  direction: 'nagyJobbra'
                })
          }
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
    
        if(window.innerWidth < 760) {
            this.setState({
                currentIndex: index,
                direction: 'kisBalra'
              })
        }
        else {
            this.setState({
                currentIndex: index,
                direction: 'nagyBalra'
              })
        }
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
        else {
            ++index;
        }
        
        if(window.innerWidth < 760) {
            this.setState({
                currentIndex: index,
                direction: 'kisJobbra'
                })
        }
        else {
            this.setState({
                currentIndex: index,
                direction: 'nagyJobbra'
              })
        }
      }

    circleIndex(idx)
    {
        let setLength = this.state.selectedSet.length;
        return (idx+setLength)%setLength;
    }

    findCurrent(){
        let hash = this.props.match.params.id;
        let shoot = this.props.match.params.shoot;
        // select the photos
        let selected = Object.keys(this.state.sets).filter(key => key === hash);
        let reallySelected = selected[0];
        // select the JSON with the right strings
        let textToShow = Object.keys(this.state.texts).filter(key => key === hash);
        let textToReallyShow = textToShow[0];
        let listVar = hash+shoot;
        // this is the biggest hack ever
        let textVar = listVar+"text";
        let selectedSet = this.state.sets[reallySelected][shoot][listVar];
        let collectionText = this.state.texts[textToReallyShow][shoot][textVar];
        // creating an array that contains the selected set plus the matching collection text
        let gallery = selectedSet.slice(0);
        gallery.push(collectionText);
        console.log("The mount says the gallery is this long: " + String(gallery.length));
        this.setState((prevState) => ({selectedSet: selectedSet, collectionText: collectionText, gallery: gallery}));
    };

    populateGallery(){
        let photosOnly = this.state.gallery.slice(0, -1);
        let images = photosOnly.map((elem, index) => (
            <img className="mobilcenter" src={elem} key={elem}/>
        ))
        // adding the text back
        images.push(
            <div style={{width: "100%", height: "100%"}}>
                <p>{this.state.collectionText.title}</p>
                <p>{this.state.collectionText.text}</p>
                <p>{this.state.collectionText.crew}</p>
            </div>
        );
        return images;
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.location != this.props.location) {
            // chop off "/collections/"
            let newHash = nextProps.location.pathname.substr(13);
            let newColl = newHash.split("/")[0];
            let newShoot = newHash.split("/")[1];
            let newListVar = newColl+newShoot;
            let newTextVar = newListVar+"text";
            // photos
            let selected = Object.keys(this.state.sets).filter(key => key === newColl);
            let reallySelected = selected[0];
            // strings
            let textToShow = Object.keys(this.state.texts).filter(key => key === newColl);
            let textToReallyShow = textToShow[0];
            // console.log(textToReallyShow);
            let selectedSet = this.state.sets[reallySelected][newShoot][newListVar];
            let collectionText = this.state.texts[textToReallyShow][newShoot][newTextVar];
            let gallery = selectedSet.slice(0);
            gallery.push(collectionText);
            this.setState((prevState) => ({selectedSet: selectedSet, collectionText: collectionText, gallery: gallery}));
            // console.log(nextProps.location.pathname.substr(13));
        }
    }
    componentDidMount(){
        this.findCurrent();
    }

   render() {
       return (
           <CollectionWrapper>
               <CollectionDetails
                title={this.state.collectionText.title}
                text={this.state.collectionText.text}
                crew={this.state.collectionText.crew}/>
               <MediaQuery maxWidth={760}>
                <Arrow style={{top:"0", left:"0"}} onClick={(e)=>this.galleryBalra(e)}>
                    <p>&lt;</p>
                </Arrow>
                <Arrow style={{top:"0", left:"85%"}} onClick={(e)=>this.galleryJobbra(e)}>
                    <p>&gt;</p>
                </Arrow>

                <ReactCSSTransitionGroup
                    transitionName={this.state.direction}
                    transitionEnterTimeout={1000}
                    transitionLeaveTimeout={1000}
                    component='div'
                    style={{position:"relative", width:"100%", height: "100%", display: "inline-block", overflow:"hidden"}}>
                    {
                        this.populateGallery()[this.state.galleryIndex]
                    }
                    {/*
                    <img className="mobilcenter"
                        key={this.state.currentIndex}
                        src={this.state.selectedSet[this.circleIndex(this.state.currentIndex)]}/>
                    */}
                </ReactCSSTransitionGroup>
               </MediaQuery>
               <MediaQuery minWidth={760}>
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
                    
                    <img className="bal" key={this.state.selectedSet[this.circleIndex(this.state.currentIndex)]}
                        src={this.state.selectedSet[this.circleIndex(this.state.currentIndex)]}
                        onClick={(e)=>this.kattBalra(e)}/>
                    <img className="center" key={this.state.selectedSet[this.circleIndex(this.state.currentIndex+1)]}
                        src={this.state.selectedSet[this.circleIndex(this.state.currentIndex+1)]}/>
                    <img className="jobb" key={this.state.selectedSet[this.circleIndex(this.state.currentIndex+2)]}
                        src={this.state.selectedSet[this.circleIndex(this.state.currentIndex+2)]}
                        onClick={(e)=>this.kattJobbra(e)}/>
                </ReactCSSTransitionGroup>
               </MediaQuery>
           </CollectionWrapper>
       )
   } 
}
module.exports = Collections;