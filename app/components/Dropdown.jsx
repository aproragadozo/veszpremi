var React = require('react');
var {Link} = require('react-router-dom');

import styled from 'styled-components';

const DropdownButton = styled.div`
  background-color: transparent;
  font-size: 0.9vw;
  display: inline-block;
  position: relative;
  max-height: initial;
  color: #443A9E;
  text-transform: uppercase;
  text-decoration: none;
  grid-row: row;
  line-height: 4vw;
`;

const Menu = styled.ul`
  display: none;
  flex-wrap: wrap;
  width: 20vmax;
  background-color: transparent;
  align-items: start;
  justify-content: space-between;
  padding:0;
  margin:0;
  position: absolute;
  top: 2.6vmax;
  left: -6vmax;
  list-style: none;
  z-index: 40;
  line-height: initial;
  opacity: 0.6;
  font-weight: bold;

  ${DropdownButton}:hover & {
    display: flex;
  }
`;
const MenuItem = styled.li`
  position: relative;
  margin: 0.5vmax 0 0 0;
  direction: ltr;
  list-style-type: none;
  background-color: #f1f1f1;
  width: 180px;
  transition-property: font-weight, font-size;
  transition-duration: 0.3s;
`;

const SubMenu = styled.ul`
  display: none;
  position: absolute;
  /*left: -6.5vmax;*/
  top: 0;
  background-color: transparent;
  padding: 0.5vmax 1vmax;
  height: 5vmax;
  direction: rtl;
  unicode-bidi: bidi-override;
  z-index: 45;
  text-decoration: none;
  

  a:hover {
    font-weight: bold;
    font-size: larger;
  }

  ${MenuItem}:hover & {
    display: block;
  }
`;
// this.props.sets az objektek arrayje
const MenuItems = ({sets}) => (
  <Menu>
    {
      sets.map((set, index) => (
        <MenuItem key={set.name}>
          <span style={{display: "inline-block", backgroundColor: "transparent", padding: "2vmin 4vmax"}}>{set.name}</span>
          <SubMenu style={(index%2==0) ? {left:'-6.5vmax'} : {left: '9vmax'}}>
          {set.sets.map(elem => (
            <li style={{listStyleType: "none", textDecoration: "none"}} key={index}>
              <Link to={`/collections/_${set.name}/${elem}`}>{elem}</Link>
            </li>
          ))}
          </SubMenu>
        </MenuItem>
      ))
    }
  </Menu>
);

/* a renderen belül mappoljuk a kollekcióobjektekhez a MenuItemeket,
  azokon belül pedig mappeljük a 'sets' array-t a SubMenun belül a Linkekhez */
class Dropdown extends React.Component {
  render() {
    return (
        <DropdownButton>Collections
          <MenuItems sets={this.props.sets}/>
        </DropdownButton>
    )
  }
}

module.exports = Dropdown;