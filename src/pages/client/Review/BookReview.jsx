import React from "react";
import { FaComments } from "react-icons/fa";

export default function BookReview() {
   return (
      <div className=" mx-4 border-top">
         <div className="my-4 row">
            {/* Date */}
            <div className="col-lg-2 col-sm-12 mt-4 d-flex flex-column ">
               <p className="text-uppercase ">novamber 15, 2022</p>
               <p>
                  0 <FaComments />
               </p>
            </div>
            {/* Title & Review */}
            <div className="col-lg-6 col-sm-12 d-flex flex-column">
               <p className="text-uppercase">book review</p>
               <p className="text-capitalize fs-3">book review: endangered</p>
               <p className="text-lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem, inventore. Commodi ducimus qui vel ab corporis quidem
                  vitae quo quisquam mollitia. Expedita, voluptate! Adipisci,
                  aspernatur numquam cum veritatis sunt natus!
               </p>
            </div>
            {/* Img */}
            <div className="col-lg-4 col-sm-12">
               <div className=" h-75 w-100 mt-2">
                  <img
                     className="h-100 w-100 "
                     src="https://i0.wp.com/independentbookreview.com/wp-content/uploads/2022/11/Siena-My-Love-featured.png?w=1200&ssl=1"
                     alt=""
                  />
               </div>
            </div>
         </div>
      </div>
   );
}
