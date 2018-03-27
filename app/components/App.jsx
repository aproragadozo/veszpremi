var React = require('react');

import {BrowserRouter as Router, Route} from 'react-router-dom';

import styled from 'styled-components';

var Header = require('Header');
var Nav = require('Nav');
var Home = require('Home');
var About = require('About');
var Collections = require('Collections');
var Videos = require('Videos');
var Footer = require('Footer');

class App extends React.Component{
   render() {
       var Wrapper = styled.div`
        height: 96vh;
        max-height: 96vh;
        display: grid;
        grid-template-rows: repeat(11, [wrapperNav] minmax(5vh, 100px)) 1fr [wrapperFooter] minmax(4vmax, 60px);
        grid-template-columns: repeat(6, [wrapperCol] 1fr);
        grid-gap: 1vmin;

        @media only screen and (min-width: 760px) {
            grid-template-rows: [top] 80px [meat] 1fr [bottom] 3vmax;
            grid-template-columns: [cal] 23vw repeat(6, [col] 1fr);
            grid-gap: 1.5vmax;
        }
       `;
       return (
            <Router>
                <Wrapper>
                    <Header/>
                    <Nav/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/collections/:id" component={Collections}/>
                    <Route path="/videos" component={Videos}/>
                    <Footer/>
                </Wrapper>
            </Router>
       )
   } 
}
module.exports = App;