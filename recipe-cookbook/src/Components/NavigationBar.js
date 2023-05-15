import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./CSS Components/NavigationBar.css";

const NavigationBar = () => {
  return (
    <>
      <Navbar // creating a Navbar component
        collapseOnSelect // Navbar will collapse on smaller screens
        expand="lg" // Navbar will expand on larger screens
        bg="dark" // Navbar will have a light background
        variant="dark" // Navbar will have a light variant
        sticky="top" // Navbar will stick to the top of the page
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
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />{" "}
        {/* Navbar Toggle for reponsive navigation */}
        <Navbar.Collapse id="responsive-navbar-nav">
          {" "}
          {/* Navbar Collapse for reponsive navigation for mobile phones*/}
          <Nav>
            <Nav.Link
              eventKey={2}
              className="SIGNUPBAR"
              href="/signup"
              style={{
                // inline styling for the Sign Up button
                backgroundColor: "#fc4903", // orange
                color: "white",
                borderRadius: "20px", // rounded corners
                padding: "10px 20px 10px",
              }}
            >
              Sign Up
            </Nav.Link>
            <Nav.Link
              eventKey={2}
              href="/login"
              style={{
                // inline styling for the Sign Up button
                backgroundColor: "#fc4903", // orange
                color: "white",
                borderRadius: "20px", // rounded corners
                padding: "10px 20px 10px",
                marginLeft: "10px",
              }}
            >
              {" "}
              {/* eventKey is used to identify the component */}
              {" Login"}
              {/* FontAwesomeIcon component for icons(User icon) */}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
export default NavigationBar;
