import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { IoBagHandleOutline } from "react-icons/io5";

export default function WishlistItem({ hideModal }) {
   return (
      <div className="row mb-3">
         <div className="col-4">
            <img
               className="col-12"
               src="https://helendo.jamstacktemplates.dev/images/products/nancy-chair/585x585.jpg"
               alt=""
            />
         </div>
         <div className="col-6 d-flex flex-column justify-content-around align-items-start">
            <h5>Title</h5>
            <p className="m-0">
               Price: <span className="fw-normal">$00.00</span>
            </p>
         </div>
         <div className="col-2 d-flex flex-column justify-content-around ">
            <div className="m-0">
               <AiOutlineClose />
            </div>
            <div>
               <a className="">
                  <IoBagHandleOutline />
               </a>
            </div>
         </div>
      </div>
   );
}
