var React = require('react');

import {BrowserRouter as Router, Route} from 'react-router-dom';

const background = require('../img/home/background.jpg');

import 'app/font.css';
import 'app/body.css';

import styled from 'styled-components';

var Header = require('Header');
var Nav = require('Nav');
var Home = require('Home');
var About = require('About');
var Collections = require('Collections');
var Videos = require('Videos');
var Footer = require('Footer');
var ContactPage = require('ContactPage');
var Press = require('Press');

const szettek = [
    {name: "14aw", sets: ["campaign", "lookbook"]},
    {name: "15aw",  sets: ["campaign"]},
    {name: "15ss",  sets: ["campaign", "lookbook"]},
    {name: "16aw",  sets: ["campaign"]},
    {name: "17ss",  sets: ["campaign", "lookbook"]},
    {name: "LAYERS",  sets: ["campaign", "lookbook"]}
];

class App extends React.Component{
   render() {
       var Wrapper = styled.div`
        height: 96vh;
        max-height: 96vh;
        display: grid;
        grid-template-rows: repeat(11, [wrapperNav] minmax(5vh, 100px)) 1fr [wrapperFooter] minmax(4vmax, 60px);
        grid-template-columns: repeat(6, [wrapperCol] 1fr);
        grid-gap: 1vmin;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;

        @media only screen and (min-width: 760px) {
            grid-template-rows: [top] 80px [meat] 1fr [bottom] 3vmax;
            grid-template-columns: [cal] 23vw repeat(6, [col] 1fr);
            grid-gap: 1.5vmax;
        }
       `;
       return (
            <Router>
                <Wrapper style={{backgroundImage: `url(${background})`}}>
                    <Header/>
                    <Nav sets={szettek}/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/collections/:id/:shoot" component={Collections}/>
                    <Route path="/videos" component={Videos}/>
                    <Route path="/contact" component={ContactPage}/>
                    <Route path="/press" component={Press}/>
                    <Footer/>
                </Wrapper>
            </Router>
       )
   } 
}
module.exports = App;