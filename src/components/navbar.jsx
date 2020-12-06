import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../nav.css";
import logo from "../wifi.png";
class Navhead extends Component {
  state = {};
  render() {
    return (
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="https://diucerts.creative-lab.xyz/">DIUcerts</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Create Certificate</Nav.Link>
            <Nav.Link as={Link} to="/view">View Certificate</Nav.Link>
            <Nav.Link as={Link} to="/verify">Verify Certificate</Nav.Link>
            <Nav.Link as={Link} to="/verify-trx">Verify Transaction</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://github.com/shawon9324/diucerts-blockchain-certificate-creation-verification" target="_blank">Github Repo</Nav.Link>
            {/* <Nav.Link href="https://diucerts.creative-lab.xyz/" target="_blank"> Go Live Server</Nav.Link> */}
            <img  className="d-inline-block align-top" src={logo} alt="" height="30px" widht="30px"/>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
  
}

export default Navhead;
