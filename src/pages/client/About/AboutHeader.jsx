import React from "react";
import { Link } from "react-router-dom";

const AboutHeader = () => {
  return (
    <div className="about__title">
      <div className="container h-100">
        <div className="d-flex justify-content-between align-items-center h-100">
          <h2>About Us</h2>
          <div>
            <Link to="home">HOME</Link>
            <span>/</span>
            <p className="d-inline-block text-secondary">About Us</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;
