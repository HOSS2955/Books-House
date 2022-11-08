import React from "react";
import Aside from "../../components/ui/Aside";
import BookList from "./BookList";
import "../../assets/css/BookShop.css";
import BooksQuery from "../../services/bookQuery";
export default function BooksShop() {
  return (
    <div className="mb-5">
      <div className="cover-img  container  mx-auto">
        <div>
          <img src="images/hero_2.jpg" className="col-12" alt="" />
        </div>
      </div>
      <div className="row container mx-auto">
        <div className="col-4 my-3 border border-1 ">
          <Aside />
        </div>
        <div className="col-8 ">
          {/* <BookList /> */}
          <BooksQuery></BooksQuery>
        </div>
      </div>
    </div>
  );
}
