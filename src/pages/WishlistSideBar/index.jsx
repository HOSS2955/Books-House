import React from "react";
import "./wishlistSideBar.css";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const backdrop = {
   visible: { opacity: 1 },
   hidden: { opacity: 0 },
};
const modal = {
   hidden: { x: "1600vw", opacity: 0 },
   visible: { x: "0", opacity: 1, transition: { delay: 0.5 } },
};

export default function WishlistSideBar({ hideModal, showModal }) {
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
            onClick={showModal}
            initial="hidden"
            animate="visible"
         >
            <i className="ri-close-fill"></i>
            <p className="text-dark">Wishlist </p>
            <Link to="/booksshop">
               <button className="">Shop</button>
            </Link>
         </motion.div>
      </AnimatePresence>
   );
}
