import React from "react";

const AboutUs = () => {
  return (
    <div className="container">
      <div className="row mb-5">
        <div className="col-md-6 col-sm-12">

          <img src="./images/4185.jpg" className="homeAbout__img w-75 h-75"/>
        </div>
        <div className="home__about col-md-6 col-sm-12 pt-5">
        <h5 className="fw-bold mb-4 pt-5">Who We Are ?</h5>
          <p className="text-muted">
          Our company is a comprehensive online bookstore for both books and other products of every point of knowledge. Our philosophy is based on information, communication and education, which we feel should be balanced out with a daily dose of knowledge, wisdom, understanding (overstanding, and innerstanding).
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
