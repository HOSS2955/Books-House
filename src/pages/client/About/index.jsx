import React from "react";
import "../../../assets/css/About.css";
import BreadCrumb from "../../../components/client/ui/Breadcrump/BreadCrumb";
import AboutImg from "./AboutImg";
import OurGoals from "./OurGoals";

const index = () => {
   return (
      <div>
         {/* <BreadCrumb title="About" breadCrumb="About" /> */}
         <div className="container">
            <AboutImg />
            <OurGoals />
         </div>
      </div>
   );
};

export default index;
