var React = require('react');
var {Link} = require('react-router-dom');

import styled from 'styled-components';

const DropdownButton = styled(Link)`
  background-color: #050505;
  font-size: 0.9vw;
  display: inline-block;
  position: relative;
  max-height: initial;
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

  ${DropdownButton}:hover & {
    display: flex;
  }
`;
const MenuItem = styled.li`
  position: relative;
  margin: 0.5vmax 0 0 0;
  direction: ltr;
  list-style-type: none;
`;

const SubMenu = styled.ul`
  display: none;
  position: absolute;
  left: -5.5vmax;
  top: 0.5vmin;
  background-color: #f87e64;
  overflow-y: scroll;
  padding: 0.5vmax 1vmax;
  height: 5vmax;
  direction: rtl;
  unicode-bidi: bidi-override;
  z-index: 45;

  ${MenuItem}:hover & {
    display: block;
  }
`;
// this.props.sets az objektek arrayje
const MenuItems = ({sets}) => (
  <Menu>
    {
      sets.map(set => (
        <MenuItem>
          <span style={{display: "inline-block", backgroundColor: "mediumseagreen", padding: "2vmin 4vmax"}}>{set.name}</span>
          <SubMenu>
          {set.sets.map(elem => (
            <li style={{listStyleType: "none"}}>
              <Link to={`/collections/_${set.name}`}>{elem}</Link>
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
        <DropdownButton to="/collections/barack">Collections
        <MenuItems sets={this.props.sets}/>
        {/*
          <Menu>
            <MenuItem>
              <span style={{display: "inline-block", backgroundColor: "mediumseagreen", padding: "2vmin 4vmax"}}>alma</span>
              <SubMenu>
                <li style={{listStyleType: "none"}}>
                  <Link to="/collections">barack</Link>
                </li>
              </SubMenu>
            </MenuItem>
          </Menu>
          */}
        </DropdownButton>
    )
  }
}

module.exports = Dropdown;