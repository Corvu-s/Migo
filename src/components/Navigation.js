import React from "react";
import image from "./images.png";
import { NavLink } from "react-router-dom";
import { Row, Collapse, Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
class Navigate extends React.Component {
  state = {
    isOpen: true
  };

  render() {
    return (
      <div style={{ widht: 1, height: 128, background: "#BACAC2" }}>
        <Row>
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
          <img src={image} alt="new" />
        </Row>
      </div>
    );
  }
}

export default Navigate; //changejghghg
