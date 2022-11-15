import React from "react";
import { motion } from "framer-motion";
import "../../../assets/css/About.css";

const AboutImg = () => {
  return (
    <div className="mt-5">
      <div className="aboutimgParent">
        <img
          className="about__img w-100 h -100  "
          src="https://images.pexels.com/photos/68562/pexels-photo-68562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </div>
    </div>
  );
};

export default AboutImg;
