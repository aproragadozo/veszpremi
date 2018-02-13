var React = require('React');
var {Link} = require('react-router-dom');

import styled from 'styled-components';

// ide kell majd egy kamulista is próbaképpen,
// and everything from DropdownMenu downwards needs to be mapped

const DropdownWrap = styled.div``;

const DropdownButton = styled.div``;

const Menu = styled.ul``;

const SubMenu = styled.ul``;

class Dropdown extends React.Component {
  render() {
    return (
      <DropdownWrap>
        <DropdownButton>
          <Menu>
            <span></span>
            <SubMenu>
              <li></li>
            </SubMenu>
          </Menu>
        </DropdownButton>
      </DropdownWrap>
    )
  }
}

module.exports = Dropdown;