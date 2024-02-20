import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import dpLogo from "../assets/images/dp-logo.png";

const Header = () => {
  return (
    <Navbar className="header">
      <Container className="nav-content">
        <Navbar.Brand>
          <Link to="/home" className="brand">
            {/* <h2>Durgesh Pandey</h2> */}
            <img src={dpLogo} alt="" style={{}} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="links">
            <Link className="link" to="/home">
              Home
            </Link>
            <Link className="link" to="/about">
              About
            </Link>
            <Link className="link" to="/contact">
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    // <Navbar bg="light" className="header">
    //   <Container className="nav-content">
    //     <Navbar.Brand href="#home" className="bg-light brand">
    //       Durgesh Pandey
    //     </Navbar.Brand>
    //     <Navbar.Toggle />
    //     <Navbar.Collapse className="justify-content-end">
    //       <Nav className="nav bg-light">
    //         <Nav.Link href="#home">Home</Nav.Link>
    //         <Nav.Link href="#features">About</Nav.Link>
    //         <Nav.Link href="#pricing">Contact</Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
};

export default Header;
