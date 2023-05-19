import { Container, Row, Col } from "react-bootstrap";
import bannerBg from "../Assets/img/banner-bg.jpg";
import "./CSS Components/Banner.css";
import React, { useState, useRef, useEffect } from "react";
import "animate.css";

const Banner = () => {
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
    <div className="banner">
      <img
        className={!scrolled ? "scrolled-banner" : ""}
        alt="bg-banner"
        src={bannerBg}
      ></img>
      <div className="overlay">
        <Container
          className="overlay-container"
          style={{
            position: "absolute",
            top: "50%",
            transform: "translate(0px, -50%)",
            height: "300px",
            borderRadius: "35px",
          }}
        >
          <div className="overlay-text">Welcome to RecipeBank!</div>
        </Container>
      </div>
    </div>
  );
};
export default Banner;
