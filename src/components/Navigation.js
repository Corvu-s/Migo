import React from "react";
import { NavLink } from "react-router-dom";
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
class Navigate extends React.Component {
  state = {
    isOpen: true
  };

  render() {
    return (
      <div>
        <Navbar colour="light" light expand="md">
          <NavbarBrand href="/">Migo</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink to="/">Home</NavLink>{" "}
              </NavItem>
              <NavItem>
                <NavLink to="/about">About</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigate; //changejghghg
