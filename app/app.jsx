var React = require('react');
var ReactDOM = require('react-dom');
var {Route, BrowserRouter, Switch, HashRouter, Link} = require('react-router-dom');
var {styled} = require('styled-components');

// this should take care of font loading
import 'app/body.css';

// var Main = require('Main');
var App = require('App');

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.querySelector('#app') );