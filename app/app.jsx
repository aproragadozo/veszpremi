var React = require('react');
var ReactDOM = require('react-dom');
var {Route, BrowserRouter, Switch, HashRouter, Link} = require('react-router-dom');
var {styled} = require('styled-components');

var Main = require('Main');
var App = require('App');

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.querySelector('#app') );