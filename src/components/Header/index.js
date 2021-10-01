import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./style.css";

function Header() {
  return (
    <header>
      <Navbar className="bg-nav" variant="light">
        <Container>
          <LinkContainer to="#">
            <Navbar.Brand>Custom Market</Navbar.Brand>
          </LinkContainer>
          <Nav>
            <LinkContainer to="/cart">
              <Nav.Link>
                <i className="me-2 fa fa-shopping-cart"></i>
                Cart
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to="/account">
              <Nav.Link>
                <i className="fa me-2 fa-user"></i>
                Account
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
