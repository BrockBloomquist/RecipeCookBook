import { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./CSS Components/NavigationBar.css";

export const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Navbar // creating a Navbar component
        collapseOnSelect // Navbar will collapse on smaller screens
        expand="md" // Navbar will expand on larger screens
        bg="dark" // Navbar will have a light background
        variant="dark" // Navbar will have a light variant
        sticky="top" // Navbar will stick to the top of the page
        className={scrolled ? "scrolled" : ""}
      >
        <Navbar.Brand href="/">
          {" "}
          {/* Navbar Brand  */}
          <div className="logo">
            {" "}
            {/* logo class to style in css */}
            <span className="title">RecipeBank</span>{" "}
            {/* cofo class to style in css */}
            {/* concept class to style in css */}
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* Navbar Toggle for reponsive navigation */}
        <Navbar.Collapse id="basic-navbar-nav">
          {" "}
          {/* Navbar Collapse for reponsive navigation for mobile phones*/}
          <Nav className="ms-auto">
            <Nav.Link
              eventKey={2}
              className="SIGNUPBAR"
              href="/signup"
              style={{
                // inline styling for the Sign Up button
                backgroundColor: "#fc4903", // orange
                borderRadius: "20px", // rounded corners
                padding: "10px 20px 10px",
              }}
            >
              <button
                className="nav-btn"
                style={{
                  color: "white",
                }}
              >
                Sign Up
              </button>
            </Nav.Link>
            <Nav.Link
              eventKey={2}
              href="/login"
              style={{
                // inline styling for the Sign Up button
                color: "white",
                borderRadius: "20px", // rounded corners
                padding: "10px 20px 10px",
                marginLeft: "10px",
                backgroundColor: "#fc4903", // orange
              }}
            >
              <button
                className="nav-btn"
                style={{
                  color: "white",
                }}
              >
                Login
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
