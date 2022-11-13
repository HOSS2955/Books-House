import React from "react";
import "./authorshouse.css";
import Pricing from "../Home/Pricing";

export default function AuthorsHouse() {
   return (
      <div>
         {/* SERVICE NAME AND DESCRIPTION */}
         <div className="mb-5">
            <div className="container">
               <div className="row">
                  <div className="col-6 d-flex flex-column justify-content-center align-items-center">
                     <h1 className="mb-3">Authors House</h1>
                     <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Voluptate sed rem saepe, hic facilis qui
                        reiciendis minima eveniet earum totam architecto? Optio
                        similique quam odio quasi vel eos obcaecati odit! Lorem,
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptate sed rem saepe, hic facilis qui reiciendis
                        minima eveniet earum totam architecto? Optio similique
                        quam odio quasi vel eos obcaecati odit!
                     </p>
                     <div>
                        <button className="px-4 btn btn-outline-dark rounded-0">
                           Packages
                        </button>
                     </div>
                  </div>
                  <div className="col-6 p-5">
                     <img src="./images/hero_1.jpg" className="col-12" alt="" />
                  </div>
               </div>
            </div>
         </div>

         {/* OUR SERVIECS GALLERY */}
         <div className="gallery mb-5">
            <h2 className="text-center my-5">Our Services Gallery</h2>
            <div className="row container mx-auto">
               <div className="col-8 row">
                  <div className="col-6">
                     <img
                        className="col-12 py-2"
                        src="./images/hero_1.jpg"
                        alt=""
                     />
                  </div>
                  <div className="col-6 py-2">
                     <img className="col-12" src="./images/hero_2.jpg" alt="" />
                  </div>
                  <div className="col-12 py-2">
                     <img className="col-12" src="./images/hero_3.jpg" alt="" />
                  </div>
               </div>
               <div className="col-4 py-2">
                  <img
                     className="w-100 h-100  "
                     src="./images/hero_2.jpg"
                     alt=""
                  />
               </div>
            </div>
         </div>

         {/* PACKAGES */}
         <Pricing />
      </div>
   );
}
