/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./ItemCard.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { IoBagHandleOutline } from "react-icons/io5";

export default function ItemCard({ book }) {
   const [showbtns, setShowbtns] = useState(false);
   return (
      <motion.div
         layout
         animate={{ opacity: 1 }}
         initial={{ opacity: 0 }}
         exit={{ opacity: 0, delay: 0.9 }}
         transition={{ duration: 0.9, type: "spring" }}
      >
         <motion.div
            onHoverStart={() => {
               setShowbtns(true);
            }}
            onHoverEnd={() => {
               setShowbtns(false);
            }}
            className="imgparentt"
            id="imgOne"
         >
            <img src={book.imageSrc} alt="" className="col-12" />

            {showbtns && (
               <motion.div
                  className="btnsCont d-flex justify-content-center align-items-center"
                  animate={{ y: -150 }}
                  transition={{ duration: 0.6 }}
               >
                  <motion.button
                     className="itemBtns btn btn-light mx-1 rounded-5"
                     type="submit"
                     transition={{ duration: 0.6 }}
                  >
                     <AiOutlinePlus />
                  </motion.button>
                  <motion.button
                     className="itemBtns btn btn-light mx-1 text-bold rounded-5"
                     type="submit"
                     transition={{ duration: 0.4 }}
                  >
                     <IoBagHandleOutline />
                  </motion.button>
                  <motion.button
                     className="itemBtns btn btn-light mx-1 rounded-5"
                     type="submit"
                     transition={{ duration: 0.3 }}
                  >
                     <AiOutlineHeart />
                  </motion.button>
               </motion.div>
            )}
            <div className="blackBG"></div>
         </motion.div>
         <div className="textitem mt-3">
            <div className="text-center mb-1">
               <a className=" textlink   fw-bolder textitem" href="#">
                  {book.title}
               </a>
            </div>
            <p className="textitem text-center fw-semibold">${book.price}.00</p>
         </div>
      </motion.div>
   );
}
