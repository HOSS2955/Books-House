import React  from "react";
import axios from "axios";

import { useQuery } from "react-query";
import { motion } from "framer-motion";
import {TbBook2} from "react-icons/tb"
// import { resAction } from "../store/reducers/resSlice";
// import { useDispatch } from "react-redux";

const PackageQuery = ({pricingArray}) => {
        return (

<div className="pricing__cards row">
{pricingArray.map((service , index) =>{
        return <motion.div whileHover={{scale:1.05}} className="single-price col-lg-3 col-md-6 d-flex flex-column justify-content-center p-4" key={index}
            >
              <div>
              <div className="top-part transition-colors">
                {/* <h1 className="text-center fw-light mx-auto">{service.id}</h1> */}
                <div className="book__icon w-100"><TbBook2/></div>
                <h4 className="text-center text-sm">{service.name}</h4>
                <p className="text-center">For the individuals</p>
              </div>
              <div className="package-list text-center text-muted">
                <ul>
                  <hr />
                  <li className="">{service.details}</li>
                  <hr />
                  <li className="">{service.details}</li>
                  <hr />
                  <li className="">{service.details}</li>
                  <hr />
                </ul>
              </div>
              <div className="bottom-part text-center">
                <h1 className="text-center fs-2 fw-bold price">{service.price}</h1>
                <a
                  className="price-btn text-uppercase px-4 py-2 fw-bold"
                  href="#"
                  >Buy Now</a
                >
              </div>
              </div>
            </motion.div>
        })}
            </div>

        )
}

export default PackageQuery
