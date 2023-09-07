import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import PrimaryButton from "../button/primary-button";
import { AppLogo } from "../../assets";
import { Styles } from "../../style";
import { Link, useNavigate } from "react-router-dom";
import color from "../../constant";

export default function AppHeader() {
  const navigate = useNavigate();
  const [colorHover, setcolorHover] = useState(false);
  const [colorChange, setColorchange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 300) {
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

  const linkStyle = {
    color: colorHover ? `${color.pink}` : `${color.white}`, // Change color when colorChange is true
    fontWeight: "300",
    fontSize: "1.4rem",
    fontFamily: `Teko,sans-serif`,
    letterSpacing: "0.1rem",
    textDecoration: "none",
  };

  return (
    <>
      <div>
        <Navbar
          data-bs-theme="dark"
          className={
            colorChange
              ? "navbar colorChange px-5 py-3 py-lg-0"
              : "navbar px-5 py-3 py-lg-0"
          }
          variant={colorChange ? "dark" : "light"}
          style={Styles.headerDiv}
        >
          <Container fluid>
            <Navbar.Brand href="#home" className="col ">
              <img src={AppLogo} height="55rem" width="auto" />
            </Navbar.Brand>
            <Nav className="col-8 justify-content-between align-items-center headerItem">
              <Link
                className="d-none d-md-block border-none headerItem"
                // onClick={(e) => setcolorHover(true)}
                to="/"
                // style={linkStyle}
                style={Styles.headerItem}
              >
                Home
              </Link>
              <Link
                className="d-none d-md-block border-none headerItem"
                // onClick={() => navigate('/about')}
                to="/about"
                style={Styles.headerItem}
              >
                About
              </Link>
              <Link
                className="d-none d-md-block border-none headerItem"
                // onClick={() => navigate('/service')}
                to="/service"
                style={Styles.headerItem}
              >
                Service
              </Link>
              <Link
                className="d-none d-md-block border-none headerItem"
                // onClick={() => navigate('/schedule')}
                to="/schedule"
                style={Styles.headerItem}
              >
                Schedule
              </Link>
              <Link
                className="d-none d-md-block border-none headerItem"
                // onClick={() => navigate('/gallery')}
                to="/gallery"
                style={Styles.headerItem}
              >
                Gallery
              </Link>
              <Link
                className="d-none d-md-block border-none headerItem"
                // onClick={() => navigate('/blog')}
                to="/blog"
                style={Styles.headerItem}
              >
                Blog
              </Link>
              <Link
                className="d-none d-md-block border-none headerItem"
                // onClick={() => navigate('/contact')}
                to="/contact"
                style={Styles.headerItem}
              >
                Contact
              </Link>

              <PrimaryButton
                title="BECOME A MEMBER"
                onClick={() => navigate("/become-a-member")}
                // to=""
              >
                <Link
                  className="d-none d-md-block border-none "
                  // onClick={() => navigate('/become-a-member')}
                  to="/become-a-member"
                  style={Styles.headerItem}
                ></Link>
              </PrimaryButton>
            </Nav>
          </Container>
        </Navbar>
        <Navbar
          bg="dark"
          data-bs-theme="dark"
          collapseOnSelect
          expand="lg"
          className="bg-body-tertiary d-block d-md-none text-white mx-3 px-2 mt-1 mb-0 py-0"
          style={{ top: -15, backgroundColor: "#4c4c4c", borderRadius: "2px" }}
        >
          <Container className="py-3 justify-content-end">
            {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="responsive-navbar-nav " />
            <Navbar.Collapse id="responsive-navbar-nav" className="mb-5 pt-0">
              <Nav className="me-auto ">
                <Nav.Link
                  style={Styles.headerItem2}
                  onClick={() => navigate("/")}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  style={Styles.headerItem2}
                  onClick={() => navigate("/about")}
                >
                  About
                </Nav.Link>
                <Nav.Link
                  style={Styles.headerItem2}
                  onClick={() => navigate("/service")}
                >
                  Service
                </Nav.Link>
                <Nav.Link
                  style={Styles.headerItem2}
                  onClick={() => navigate("/schedule")}
                >
                  Schedule
                </Nav.Link>
                <Nav.Link
                  style={Styles.headerItem2}
                  onClick={() => navigate("/gallery")}
                >
                  Gallery
                </Nav.Link>
                <Nav.Link
                  style={Styles.headerItem2}
                  onClick={() => navigate("/blog")}
                >
                  Blog
                </Nav.Link>
                <Nav.Link
                  style={Styles.headerItem2}
                  onClick={() => navigate("/contact")}
                  className="mb-3"
                >
                  Contact
                </Nav.Link>
                <PrimaryButton
                  title="BECOME A MEMBER"
                  onClick={() => navigate("/become-a-member")}
                  // to=""
                >
                  <Link
                    className="d-none d-md-block border-none "
                    // onClick={() => navigate('/become-a-member')}
                    to="/become-a-member"
                    style={Styles.headerItem}
                  ></Link>
                </PrimaryButton>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}
