var React = require('react');
var {Link} = require('react-router-dom');
var MobileCollections = require('MobileCollections');
var Dropdown = require('Dropdown');

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
      marginTop: 0
    }

    const linkStyle = {
      display: "flex",
      justifyContent: "end",
      textAlign: "right",
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
        <ul style={{width: "100%"}}>
          <li style ={linkStyle}>
            <Link to="/" style={{display: "table", margin: "0 0 0 auto"}}>Home</Link>
          </li>
            <MobileCollections/>
          <li style ={linkStyle}>
            <Link to="/videos" style={{display: "table", margin: "0 0 0 auto"}}>Videos</Link>
          </li>
          <li style ={linkStyle}>
            <Link to="/about" style={{display: "table", margin: "0 0 0 auto"}}>About</Link>
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
      background: "url('https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg') no-repeat center",
      width: "8vmax",
      height: "8vmax",
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
          menuVisibility= {this.state.visible}/>
      </div>
    )
  }
}

class Nav extends React.Component{
  render(){
    var NewWrapper = styled.div`
    grid-row: wrapperNav 1 / span 6;
    grid-column: wrapperCol 6;

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

      >a {
        grid-row: row;
        display: inline-block;
        background-color: #050505;
        font-size: 0.9vw;
        flex: none;
        max-height: initial;
        justify-self: auto;
        text-decoration: none;
      }
  `;
    return (
      <NewWrapper>
        <MediaQuery maxWidth={760}>
          <Mobile />
        </MediaQuery>
        <MediaQuery minWidth={760}>
          <Desktop>
            <Link to="/">Home</Link>
            <Dropdown/>
            {/*<Link to="/collections">Collections</Link>*/}
            <Link to="/videos">Videos</Link>
            <Link to="/about">About</Link>
          </Desktop>
        </MediaQuery>
      </NewWrapper>
    );
  }
};

module.exports = Nav;