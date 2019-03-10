import React from "react";
import image from "./Header.png";
import { NavLink } from "react-router-dom";
import { Row, Collapse, Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
class Navigate extends React.Component {
  state = {
    isOpen: true
  };

  render() {
    return (
      <div style={{ widht: 100, height: 128, backgroundColor: "#B0B1B1" }}>
        <Row>
          <img src={image} alt="new" />
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
        </Row>
      </div>
    );
  }
}

export default Navigate;
