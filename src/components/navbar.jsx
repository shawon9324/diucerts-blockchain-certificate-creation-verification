import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../nav.css";
class Navhead extends Component {
  state = {};
  render() {
    return (
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">DIUcerts</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Create Certificate</Nav.Link>
            <Nav.Link as={Link} to="/verify">Verify Certificate</Nav.Link>
            <Nav.Link as={Link} to="/verify-trx">Verify Transaction</Nav.Link>
            <Nav.Link as={Link} to="/view">View Certificate</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://github.com/shawon9324/diucerts-blockchain-certificate-creation-verification" target="_blank">Project Github Repo</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
  
}

export default Navhead;
