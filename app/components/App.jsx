var React = require('react');

// trying to solve the "cannot GET anything" problem with createBrowserHistory
// if such a thing as 'history' exists
// import {createBrowserHistory} from 'history';
// or 'browserHistory'
import {HashRouter as Router, Route, withRouter, useRouterHistory} from 'react-router-dom';

/*
// still the 'history' hack
const history = useRouterHistory(createBroswerHistory)({
    basename: "/"
});
// you'll have to add this as well, if you're going down this road: <Router history={history}>
 I'm not sure about any of this, but this piece seems the fishiest
history.listen(location => {
    history.push('super/url');
})
*/

const background = require('../img/home/background.jpg');
const spinner = require('../img/home/shoe.png');

import {aboutText} from '../text/about.js';
import {contactText} from '../text/contact.js';

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
    grid-template-rows: repeat(11, [wrapperNav] minmax(1vh, 30px)) 1fr [wrapperFooter] minmax(4vmax, 60px);
    grid-template-columns: repeat(6, [wrapperCol] 1fr);
    grid-column-gap: 1vmin;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    @media only screen and (min-width: 760px) {
        grid-template-rows: [top] 110px [meat] minmax(60vh, 800px) [bottom] 3vmax;
        grid-template-columns: [cal] 23vw repeat(6, [col] 1fr);
        grid-gap: 1.5vmax;
}
`;

class App extends React.Component{
   render() {
       console.log("alma: " + window.location.hash);
       return (
        <Router >
            <Wrapper style={{backgroundImage: window.location.hash == "#/"?`url(${background})`: undefined}}>
                <Header/>
                <Nav sets={szettek}/>
                <Route exact path="/" render={props => <Home text={`${szettek[szettek.length-1].name}\n`+ "COLLECTION"} destination={"/collections/_" + `${szettek[szettek.length-1].name}` + "/" + `${szettek[szettek.length-1].sets[0]}`}/>}/>
                <Route path="/about" render={props => <About brand={`${aboutText.brand}`} main={`${aboutText.main}`} awards={`${aboutText.awards}`} {...props}/>}/>
                <Route path="/collections/:id/:shoot" component={Collections}/>
                <Route path="/videos" component={Videos}/>
                <Route path="/contact" render={props => <ContactPage one={`${contactText.one}`} two={`${contactText.two}`} three={`${contactText.three}`} {...props}/>}/>
                <Route path="/press" component={Press}/>
                <Route path="/shop" render={props => <Shop spinner={`${spinner}`} {...props}/>}/>
                <Footer/>
            </Wrapper>
        </Router>
       )
   } 
}
module.exports = App;