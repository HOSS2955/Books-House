import React from "react";
import AboutHeader from "./AboutHeader";
import "../../../assets/css/About.css";
import AboutImg from "./AboutImg";
import OurGoals from "./OurGoals";

const index = () => {
  return (
    <div>
      <AboutHeader />
      <div className="container">
        <AboutImg />
        <OurGoals />
      </div>
    </div>
  );
};

export default index;
