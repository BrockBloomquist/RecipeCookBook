import { Container, Row, Col } from "react-bootstrap";
import bannerBg from "../Assets/img/banner-bg.jpg";
import "./CSS Components/Banner.css";
import React, { useState, useRef, useEffect } from "react";
import "animate.css";
import TrackVisibility from "react-on-screen";

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
    <TrackVisibility>
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
            <div className="overlay-text">
              <h1
                className={true ? "animate__animated animate__bounce" : ""}
                style={{
                  margin: "0",
                  inset: "0",
                  padding: "100px 0",
                  fontWeight: "bold",
                }}
              >
                Welcome to RecipeBank!
              </h1>
            </div>
          </Container>
        </div>
      </div>
    </TrackVisibility>
  );
};
export default Banner;
