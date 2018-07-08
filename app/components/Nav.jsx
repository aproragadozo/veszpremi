var React = require('react');
var {Link} = require('react-router-dom');
var MobileCollections = require('MobileCollections');
var Dropdown = require('Dropdown');
const hamburger = require('../img/hamburger.png');

import MediaQuery from 'react-responsive';

import styled from 'styled-components';

const NavWrapper = styled.div`
    grid-row: wrapperNav 2 / span 5;
    grid-column: wrapperCol 6;
    display: flex;
    flex-direction: column;
    justify-content: start;
    z-index: 5;

    >a {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: right;
      flex: 1 2 5vmin;
      justify-self: start;
      text-transform: uppercase;
      cursor: pointer;
      transition-property: font-weight, background-color;
      transition-duration: 0.3s;
      background-color: transparent;
      opacity: 0.8;
      font-weight: normal;
      max-height: 8vmin;
    }
    >a:hover {
      background-color: #f1f1f1;
      font-weight: bold;
    }
    /*
    @media only screen and (min-width: 760px) {
      display: grid;
      grid-template-rows: [row] 3vmax [filler] 1fr;
      grid-template-columns: repeat(6, [button] minmax(70px, 10vmax));
      grid-row: top;
      grid-gap: 1vmax;
      grid-column: col 3 / span 4;

      >a {
        grid-row: row;
        display: inline-block;
        background-color: #050505;
        font-size: 0.9vw;
        flex: none;
        max-height: initial;
        justify-self: auto;
        position: relative;
      }
    }
    */
  `;

// the Mobile comp reimagined as an offscreen toggleable sidebar

class Menu extends React.Component{
  render() {
    const hiddenStyle = {
      backgroundColor: "#ededed",
      position: "fixed",
      left: 0,
      top: 0,
      width: "100vw",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "start",
      alignItems: "end",
      transform: "translate(0, -100vh)",
      transition: "transform .3s cubic-bezier(0, .52, 0, 1)",
      zIndex: 1000,
      padding: 0,
      marginTop: 0
    }
    const showingStyle = {
      backgroundColor: "#ededed",
      position: "fixed",
      left: 0,
      top: 0,
      width: "100vw",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "start",
      alignItems: "end",
      transform: "translate(0, 0)",
      transition: "transform .3s cubic-bezier(0, .52, 0, 1)",
      overflow: "hidden",
      zIndex: 1000,
      padding: 0,
      marginTop: 0,
      border: 0
    }

    const linkStyle = {
      display: "flex",
      justifyContent: "end",
      textAlign: "center",
      justifySelf: "start",
      textTransform: "uppercase",
      cursor: "pointer",
      backgroundColor: "transparent",
      opacity: "0.8",
      fontWeight: "normal",
      textDecoration: "none",
      position: "relative",
      listStyle: "none",
      flexDirection: "column",
      width: "100%"
    }
    
    const nestedListStyle = {
      display: "none",
      top: "8vmin",
      backgroundColor: "tomato",
      padding: 0
    }

    const nestedListItemStyle = {
      display: "block",
      width: "100%"
    }
    const nestedLinkStyle = {
      display: "inline-block",
      padding: "0 20px"
    }

    var style = this.props.menuVisibility ? showingStyle : hiddenStyle;
    return (
      <div style={style}>
        <Hamburger handleMouseDown = {this.props.handleMouseDown}/>
        <ul style={{width: "100%", marginLeft: "-40px"}}>
          <li style ={linkStyle}>
            <Link to="/about" style={{display: "block"}}>About</Link>
          </li>

          <MobileCollections sets={this.props.sets}/>

          <li style ={linkStyle}>
            <Link to="/press" style={{display: "block"}}>Press</Link>
          </li>
          
          <li style ={linkStyle}>
            <Link to="/videos" style={{display: "block"}}>Videos</Link>
          </li>
          
          <li style ={linkStyle}>
            <Link to="/shop" style={{display: "block"}}>Shop</Link>
          </li>

          <li style ={linkStyle}>
            <Link to="/contact" style={{display: "block"}}>Contact</Link>
          </li>
          
        </ul>
      </div>
    )
  }
}

class Hamburger extends React.Component{
  render() {
    const hambiStyle = {
      cursor: "pointer",
      justifySelf: "start",
      background: `url(${hamburger}) no-repeat center`,
      backgroundSize: "contain",
      width: "5vmax",
      height: "8vmax",
      border: "0",
      position: "absolute",
      top: "4vmax",
      right: "5vmax",
      transition: "all .2s cubic-bezier(0, 1.26, .8, 1.28)"
    }
    return (
      <button style={hambiStyle} onMouseDown = {this.props.handleMouseDown}/>
    )
  }
}


class Mobile extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
  }

  toggleMenu() {
    this.setState((prevState, props) => ({
      visible: !prevState.visible
    }))
  }

  handleMouseDown(e) {
    this.toggleMenu();
    e.stopPropagation();
  }

  render() {

    return (
      <div>
        <Hamburger handleMouseDown = {this.handleMouseDown}/>
        <Menu handleMouseDown = {this.handleMouseDown}
          menuVisibility= {this.state.visible} sets={this.props.sets}/>
      </div>
    )
  }
}

class Nav extends React.Component{
  render(){
    var NewWrapper = styled.div`
    grid-row: wrapperNav 1 / span 6;
    grid-column: wrapperCol 6;
    color: #443A9E;
    text-transform: uppercase;
    background-color: transparent;

    @media only screen and (min-width: 760px) {
      grid-row: top;
      grid-column: col 3 / span 4;
    }
    `;
  var Desktop = styled.div`
      display: grid;
      grid-template-rows: [row] 3vmax [filler] 1fr;
      grid-template-columns: repeat(6, [button] minmax(70px, 10vmax));
      grid-row: top;
      grid-gap: 1vmax;
      grid-column: col 3 / span 4;
      text-transform: uppercase;
      background-color: transparent;

      >a {
        grid-row: row;
        display: inline-block;
        background-color: transparent;
        font-size: 0.9vw;
        flex: none;
        max-height: initial;
        justify-self: auto;
        text-decoration: none;
        font-weight: bold;
        text-align: center;
        line-height: 4vw;
      }
  `;
    return (
      <NewWrapper>
        <MediaQuery maxWidth={760}>
          <Mobile sets={this.props.sets}/>
        </MediaQuery>
        <MediaQuery minWidth={760}>
          <Desktop>
            <Link to="/about">About</Link>
            <Dropdown sets={this.props.sets}/>
            <Link to="/press">Press</Link>
            <Link to="/videos">Video</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/contact">Contact</Link>
            
          </Desktop>
        </MediaQuery>
      </NewWrapper>
    );
  }
};

module.exports = Nav;