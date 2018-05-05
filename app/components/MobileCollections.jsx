var React = require('react');
var {Link} = require('react-router-dom');

import styled from 'styled-components';

const Darab = styled.ul`
  display: ${props => props.show ? 'flex' : 'none'};
  padding: 0;
  list-style: none;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;

const Season = styled.li`
  background-color: #f1f1f1;
  font-weight: bold;
  display: inline-block;
  text-align: center;
  width: 100%;
`;

const Collection = styled.ul`
  padding: 0;
  display: ${props => props.active ? 'flex' : 'none'};
  list-style: none;
  flex-direction: column;
  justify-content: start;
  align-items: center;  
`;
/*
class Season extends React.Component{
  render() {
    return (
      <li style={{backgroundColor: "#f1f1f1", fontWeight: "bold", display: "inline-block", textAlign: "center", width: "100%"}}
          onClick={(e) => {this.props.toggler(e, this.props.index)}}>
          {this.props.text}
          <Darab show={this.props.activeArray[this.props.index]}/>
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
*/

/*  just as in the Dropdown comp, here's a func component
    that maps the collection sets and subsets to nested menus and submenus  */
const MobileMenuItems = ({sets, active, activeArray, toggler}) => (
  <Collection active={active}>
    {
      sets.map((set, index) => (
        <Season key={set.name} onClick={(e) => {toggler(e, index)}}>
          {set.name}
          <Darab show={activeArray[index]}>
          {set.sets.map(elem => (
            <li key={index} style={{display: "list-item", width: "100%", height: "8vmin", backgroundColor: "#f1f1f1", padding: "0 3vmax", marginTop: "1vmax"}}>
              <Link to={`/collections/_${set.name}/${elem}`} style={{display:"inline-block", width:"100%", textDecoration: "none"}}>{elem}</Link>
            </li>
          ))}
          </Darab>
        </Season>
      ))
    }
  </Collection>
);

const MakeActiveArray = (array) => {array.map(item => 0)};

class MobileCollections extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      on: false,
      show: false,
      activeArray: this.props.sets.map(item => 0)
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
        activeArray: this.props.sets.map(item => 0)
      })
    }
    else {
      var arr = this.props.sets.map(item => 0);
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
        <MobileMenuItems sets={this.props.sets} active={this.state.on} activeArray={this.state.activeArray} toggler={this.toggler}/>
      </li>
    )
  }
};
module.exports = MobileCollections;