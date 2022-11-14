import React from "react";
import "./wishlistSideBar.css";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import WishlistItem from "../../../components/client/ui/WishlistItem";

const backdrop = {
   visible: { opacity: 1 },
   hidden: { opacity: 0 },
};
const modal = {
   hidden: { x: "100vw", opacity: 0 },
   visible: { x: "0", opacity: 1, transition: { delay: 0.5 } },
};

export default function WishlistSideBar({ hideModal }) {
   return (
      <AnimatePresence exitBeforeEnter>
         <motion.div
            className="backdrop"
            variants={backdrop}
            animate="visible"
            initial="hidden"
            exit="hidden"
            onClick={hideModal}
         ></motion.div>
         <motion.div
            variants={modal}
            className="sidebarmodal"
            initial="hidden"
            animate="visible"
         >
            <div className="d-flex flex-column align-items-start">
               <div onClick={hideModal} className="mb-4">
                  <a className="fs-5  fw-bold">
                     <AiOutlineClose />
                  </a>
               </div>
               <WishlistItem hideModal={hideModal} />
               <WishlistItem hideModal={hideModal} />
            </div>
            <div>
               <div>
                  <a className="btn btn-outline-dark rounded-0 mt-5">
                     Clear Wishlist
                  </a>
               </div>
               <div>
                  <a to="/cart" className="btn btn-outline-dark rounded-0 mt-5">
                     Shop Cart
                  </a>
               </div>
            </div>
         </motion.div>
      </AnimatePresence>
   );
}
