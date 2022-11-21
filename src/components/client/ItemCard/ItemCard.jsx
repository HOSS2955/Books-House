/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./ItemCard.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { IoBagHandleOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/client/reducers/cartSlice";
import { useNavigate } from "react-router-dom";

const container = {
  hidden: { opacity: 0 },
  show: {
    y: -150,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.6,
      delay: 0.1,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.3,
    },
  },
};

export default function ItemCard({ book }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const detailsOfBook = () => {
    navigate(`bookdetails/${book.id}`);
  };
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };
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
        <img src={book.imageSource} alt="" className="col-12" />

        {showbtns && (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            exit="exit"
            className="btnsCont d-flex justify-content-center align-items-center"
          >
            <motion.button
              className="itemBtns btn btn-light mx-1 rounded-5"
              type="submit"
              variants={item}
              onClick={() => handleAddToCart(book)}
            >
              <AiOutlinePlus />
            </motion.button>
            <motion.button
              className="itemBtns btn btn-light mx-1 text-bold rounded-5"
              type="submit"
              variants={item}
            >
              <IoBagHandleOutline />
            </motion.button>
            <motion.button
              className="itemBtns btn btn-light mx-1 rounded-5"
              type="submit"
              variants={item}
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
