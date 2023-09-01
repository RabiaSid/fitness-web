import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import PrimaryButton from "../button/primary-button";
import { AppLogo } from "../../assets";
import { Styles } from "../../style";

export default function AppHeader() {

  const [colorChange, setColorchange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 400) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []); 

  const handleResize = () => {
    if (window.innerWidth < 992) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <>
      <Navbar data-bs-theme="dark" 
      className={colorChange ? "navbar colorChange px-5 py-0" : "navbar px-5 py-0"}
      variant={colorChange ? "dark" : "light"}
      style={Styles.headerDiv}>
        <Container fluid >
          <Navbar.Brand href="#home" className="col "><img src={AppLogo} height='55rem' width='auto'/></Navbar.Brand>
          <Nav className="col-8 justify-content-between align-items-center ">
            <Nav.Link className="d-none d-md-block" href="#home" style={Styles.headerItem} >Home</Nav.Link>
            <Nav.Link className="d-none d-md-block" href="#features" style={Styles.headerItem} >Features</Nav.Link>
            <Nav.Link className="d-none d-md-block" href="#pricing" style={Styles.headerItem} >Pricing</Nav.Link>
            <Nav.Link className="d-none d-md-block" href="#home" style={Styles.headerItem} >Home</Nav.Link>
            <Nav.Link className="d-none d-md-block" href="#features" style={Styles.headerItem} >Features</Nav.Link>
            <Nav.Link className="d-none d-md-block" href="#pricing" style={Styles.headerItem} >Pricing</Nav.Link>
            <Nav.Link className="d-none d-md-block" href="#pricing" style={Styles.headerItem} >Pricing</Nav.Link>
            <Nav.Link className="d-none d-md-block" href="#pricing" style={Styles.headerItem} >
            <PrimaryButton ></PrimaryButton>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary d-block d-md-none">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
}
