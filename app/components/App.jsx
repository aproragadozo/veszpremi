var React = require('react');

import {BrowserRouter as Router, Route} from 'react-router-dom';

const background = require('../img/home/background.jpg');
const spinner = require('../img/home/shoe.png');

import 'app/body.css';

import styled from 'styled-components';

const Header = require('Header');
const Nav = require('Nav');
const Home = require('Home');
const About = require('About');
const Collections = require('Collections');
const Videos = require('Videos');
const Footer = require('Footer');
const ContactPage = require('ContactPage');
const Press = require('Press');
const Shop = require('Shop');

const szettek = [
    {name: "14aw", sets: ["campaign", "lookbook"]},
    {name: "15aw",  sets: ["campaign"]},
    {name: "15ss",  sets: ["campaign", "lookbook"]},
    {name: "16aw",  sets: ["campaign"]},
    {name: "17ss",  sets: ["campaign", "lookbook"]},
    {name: "LAYERS",  sets: ["campaign", "lookbook"]}
];

const Wrapper = styled.div`
height: 96vh;
max-height: 96vh;
display: grid;
grid-template-rows: repeat(11, [wrapperNav] minmax(5vh, 100px)) 1fr [wrapperFooter] minmax(4vmax, 60px);
grid-template-columns: repeat(6, [wrapperCol] 1fr);
grid-column-gap: 1vmin;
background-size: cover;
background-position: center;
background-repeat: no-repeat;

@media only screen and (min-width: 760px) {
    grid-template-rows: [top] 110px [meat] 1fr [bottom] 3vmax;
    grid-template-columns: [cal] 23vw repeat(6, [col] 1fr);
    grid-gap: 1.5vmax;
}
`;

class App extends React.Component{
   render() {
       return (
        <Router>
            <Wrapper style={{backgroundImage: `url(${background})`}}>
                <Header/>
                <Nav sets={szettek}/>
                <Route exact path="/" render={props => <Home text={`${szettek[szettek.length-1].name}\n`+ "COLLECTION"}/>}/>
                <Route path="/about" component={About}/>
                <Route path="/collections/:id/:shoot" component={Collections}/>
                <Route path="/videos" component={Videos}/>
                <Route path="/contact" component={ContactPage}/>
                <Route path="/press" component={Press}/>
                <Route path="/shop" render={props => <Shop spinner={`${spinner}`} {...props}/>}/>
                <Footer/>
            </Wrapper>
        </Router>
       )
   } 
}
module.exports = App;