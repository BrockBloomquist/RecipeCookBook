import bannerBg from "../Assets/img/banner-bg.jpg";
import "./CSS Components/Banner.css";
import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";

const Banner = () => {
  return (
    <div className="banner">
      <img alt="food" src={bannerBg} />
    </div>
  );
};
export default Banner;
