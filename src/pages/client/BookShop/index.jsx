import React from "react";
import BookList from "./BookList";
import "../../../assets/css/BookShop.css";
import BreadCrumb from "../../../components/client/ui/Breadcrump/BreadCrumb";
import Aside from "../../../components/client/Aside/Aside";
export default function BooksShop() {
   return (
      <div className="mb-5">
         <div className="  mx-auto">
            <div>
               <BreadCrumb title="product" breadCrumb="shop" />
            </div>
         </div>
         <div className="container">
            <div className="row  my-5 mx-auto">
               <div className="col-md-3 mb-3  ">
                  <Aside />
               </div>
               <div className="col-md-9">
                  <BookList />
               </div>
            </div>
         </div>
      </div>
   );
}
