var React = require('react');

var {Route, BrowserRouter, Switch, Link} = require('react-router-dom');

import styled from 'styled-components';

var Footer = require('Footer');
var Home = require('Home');
var Collections = require('Collections');
var Videos = require('Videos');

class Main extends React.Component{
   render() {
       return (
               <BrowserRouter>
                    <div>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/collections">Collections</Link></li>
                            <li><Link to="/videos">Videos</Link></li>
                        </ul>
                        <Route exact path="/" component={Home}/>
                        <Route path="/collections" component={Collections}/>
                        <Route path="/videos" component={Videos}/>
                        <Footer/>
                    </div>
                </BrowserRouter>
                
       )
   } 
}
module.exports = Main;