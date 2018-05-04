var React = require('react');
var {Link} = require('react-router-dom');

import styled from 'styled-components';

class Darabok extends React.Component{
  render() {
    return (
      <ul style={{display: this.props.show?"flex":"none", padding: 0, listStyle:"none", flexDirection: "column", justifyContent:"start", alignItems:"start"}}>
        <li style={{display: "inline-block", width: "100%", height: "8vmin", backgroundColor: "#f1f1f1", padding: "0 3vmax", marginTop: "1vmax"}}>
          <Link to="/collections" style={{display:"inline-block", width:"100%", textDecoration: "none"}}>a</Link>
        </li>
        <li style={{display: "list-item", width: "100%", height: "8vmin", backgroundColor: "#f1f1f1", padding: "0 3vmax", marginTop: "1vmax"}}>
          <Link to="/collections" style={{display:"inline-block", width:"100%", textDecoration: "none"}}>b</Link>
        </li>
        <li style={{display: "list-item", width: "100%", height: "8vmin", backgroundColor: "#f1f1f1", padding: "0 3vmax", marginTop: "1vmax"}}>
          <Link to="/collections" style={{display:"inline-block", width:"100%", textDecoration: "none"}}>c</Link>
        </li>
        <li style={{display: "list-item", width: "100%", height: "8vmin", backgroundColor: "#f1f1f1", padding: "0 3vmax", marginTop: "1vmax"}}>
          <Link to="/collections" style={{display:"inline-block", width:"100%", textDecoration: "none"}}>d</Link>
        </li>
      </ul>
    )
    
  }
}

class Season extends React.Component{
  render() {
    return (
      <li style={{backgroundColor: "#f1f1f1", fontWeight: "bold", display: "inline-block", textAlign: "center", width: "100%"}}
          onClick={(e) => {this.props.toggler(e, this.props.index)}}>
          {this.props.text}
          <Darabok show={this.props.activeArray[this.props.index]}/>
        </li>
    )
  }
}

class Collection extends React.Component{
  render() {
    return (
      <ul style={{padding: 0, display: this.props.active?"flex":"none", listStyle:"none", flexDirection: "column", justifyContent:"start", alignItems: "center"}}>
        <Season index={0} toggler={this.props.toggler} text="2015" activeArray={this.props.activeArray} />
        <Season index={1} toggler={this.props.toggler} text="2016" activeArray={this.props.activeArray} />
        <Season index={2} toggler={this.props.toggler} text="2017" activeArray={this.props.activeArray} />
        <Season index={3} toggler={this.props.toggler} text="2018" activeArray={this.props.activeArray} />
      </ul>
    )
  }
}

class MobileCollections extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      on: false,
      show: false,
      activeArray: [0, 0, 0, 0],
      colors: ["#254fa0", "#e25f86", "#ee8788", "#a5adb6"]
    }
    this.clickHandler = this.clickHandler.bind(this);
    this.toggler = this.toggler.bind(this);
  }
  toggler(e, id) {
    e.preventDefault();
    e.stopPropagation();
    if(this.state.activeArray[id] === 1) {
      console.log(typeof id);
      this.setState({
        activeArray: [0, 0, 0, 0]
      })
    }
    else {
      var arr = [0, 0, 0, 0];
      arr[id] = 1;
      this.setState({
        activeArray: arr
      });
    }
  }
  
  clickHandler(e){
    e.preventDefault();
    e.stopPropagation();
    this.setState((prevState, props) => ({
      on: !prevState.on
    }));
  }
  render() {
    return (
      <li style={{width: "100vw", height: "8vmin", textAlign: "center", cursor: "pointer", display: "inline"}} onClick={this.clickHandler}>
        <span style={{display: "block"}}>Collections</span>
        <Collection active={this.state.on} activeArray={this.state.activeArray} toggler={this.toggler} colors={this.state.colors}/>
      </li>
    )
  }
};
module.exports = MobileCollections;