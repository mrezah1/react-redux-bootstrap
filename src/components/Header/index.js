import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./style.css";

function Header() {
  return (
    <header>
      <Navbar className="bg-nav" variant="light">
        <Container>
          <Navbar.Brand href="#">Custom Market</Navbar.Brand>
          <Nav>
            <Nav.Link href="/cart">
              <i className="me-2 fa fa-shopping-cart"></i>
              Cart
            </Nav.Link>
            <Nav.Link href="/account">
              <i className="fa me-2 fa-user"></i>
              Account
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
