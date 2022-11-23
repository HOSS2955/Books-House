import React, { useEffect, useState } from "react";
import {
   AiFillHeart,
   AiOutlineCheckCircle,
   AiOutlineHeart,
} from "react-icons/ai";
import { BsTruck } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BreadCrumb from "../../../components/client/ui/Breadcrump/BreadCrumb";
import { getBooks } from "../../../store/client/reducers/bookSlice";
import "./bookDetails.css";

export default function BookDetails() {
   const { books } = useSelector((state) => state.books);
   const dispatch = useDispatch();
   const [wishlistIcon, setWishlistIcon] = useState(false);

   useEffect(() => {
      dispatch(getBooks());
   }, [dispatch]);

   const addToWishlist = () => {
      setWishlistIcon(!wishlistIcon);
   };

   const { id } = useParams();
   const [book] = books.filter((item) => item._id === id);

   return (
      <div>
         <BreadCrumb title={book.title} breadCrumb={book.title} />
         <div className="my-5 container">
            <div className="row">
               <div className="col-6 row">
                  <div className="col-3"></div>
                  <div className="col-9">
                     <img
                        src={book.imageSource}
                        className="coverImage "
                        alt=""
                     />
                     <div className="d-flex flex-column justify-content-center align-items-center">
                        <a className="my-4 d-inline " onClick={addToWishlist}>
                           {wishlistIcon ? <AiFillHeart /> : <AiOutlineHeart />}{" "}
                           Add to wishlist
                        </a>
                        <div>
                           <span className="d-block">
                              <AiOutlineCheckCircle /> Shop the Holiday Gift
                              Guide
                           </span>
                           <span className="d-block">
                              <AiOutlineCheckCircle /> Explore the Best Books of
                              2022
                           </span>
                           <span className="d-block">
                              <AiOutlineCheckCircle /> Bookseller Favorites
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-6 px-5">
                  <div className="row">
                     <div className="border-bottom">
                        <h2 className="fw-bolder text-capitalize ">
                           {book.title}
                        </h2>
                        <p className="mb-3 text-secondary">By {book.author}</p>
                     </div>
                     <h3 className="fw-bold mb-4 mt-3">${book.price}.00</h3>
                     <p>Description : {book.bookDesc}</p>
                  </div>
                  <div className=" my-3">
                     <button className="btn btn-dark rounded-5 col-6 mb-3 text-uppercase">
                        add to cart
                     </button>
                     <div className="mt-3 border-bottom mb-5">
                        <span className="px-2  fs-6 ">
                           <BsTruck />
                        </span>
                        <span className="smallText   ">
                           Choose Expedited Shipping at checkout for delivery by
                           Monday ,November 28
                        </span>
                     </div>
                  </div>
               </div>
               {/* COMMENTS */}
               <div className="col-12"></div>
            </div>
         </div>
      </div>
   );
}
