var React = require('React');
var {Link} = require('react-router-dom');

import styled from 'styled-components';

// ide kell majd egy kamulista is próbaképpen,
// and everything from DropdownMenu downwards needs to be mapped

const DropdownButton = styled.div`
  width: 8vmax;
  height: 4vmax;
  background-color: #decd89;
  display: inline-block;
  position: relative;
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
  top: 4vmax;
  left: -6vmax;
  list-style: none;

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

  ${MenuItem}:hover & {
    display: block;
  }
`;

class Dropdown extends React.Component {
  render() {
    return (
        <DropdownButton>
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
        </DropdownButton>
    )
  }
}

module.exports = Dropdown;