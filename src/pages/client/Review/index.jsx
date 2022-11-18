import React from "react";
import BreadCrumb from "../../../components/client/ui/Breadcrump/BreadCrumb";
import AsideBooks from "./AsideBooks";
import BookReview from "./BookReview";

export default function Reviews() {
   return (
      <div className="">
         <BreadCrumb title="Reviews" breadCrumb="Reviews" />
         <div className="container ">
            {/* BUTTONS */}
            <div className="px-0 mt-5  col-lg-12 col-sm-6  d-flex justify-content-between flex-wrap">
               <a href="" className="mx-0  btn btn-outline-dark rounded-0">
                  Literary & General Fiction
               </a>
               <a href="" className="btn btn-outline-dark rounded-0">
                  Sci-Fi & Fantasy
               </a>
               <a href="" className="btn btn-outline-dark rounded-0">
                  Mystery, Thriller, & Suspense
               </a>
               <a href="" className="btn btn-outline-dark rounded-0">
                  Short Story Collections
               </a>
               <a href="" className="btn btn-outline-dark rounded-0">
                  Middle Grade & Yound Adult
               </a>
               <a href="" className="btn btn-outline-dark rounded-0">
                  Non-Fiction
               </a>
               <a href="" className="btn btn-outline-dark rounded-0 ">
                  Poetry
               </a>
            </div>
            {/* REVIEWS */}
            <div className="row mt-5  px-0">
               {/* Componants */}
               <div className="col-lg-8 col-sm-12">
                  <BookReview />
                  <BookReview />
                  <BookReview />
               </div>
               {/* ASIDE */}
               <div className="col-lg-4 col-sm-12 px-0 ">
                  {/* Aside Section 1 */}
                  <div className="col-12 mb-5  border-top">
                     <img
                        className="mt-2 w-100 h-100"
                        alt=""
                        src="https://i0.wp.com/independentbookreview.com/wp-content/uploads/2022/11/books-of-the-month-1080-%C3%97-1080-px.png?w=1080&ssl=1"
                     />
                  </div>
                  {/* Aside Section 2 */}
                  <div className=" p-0  col-lg-12  mb-5 border-top ">
                     <div className="row mt-4">
                        <AsideBooks src="https://i0.wp.com/independentbookreview.com/wp-content/uploads/2022/11/Braiding-Sweetgrass.jpeg?w=647&ssl=1" />
                        <AsideBooks src="https://i0.wp.com/independentbookreview.com/wp-content/uploads/2022/11/Braiding-Sweetgrass.jpeg?w=647&ssl=1" />
                        <AsideBooks src="https://i0.wp.com/independentbookreview.com/wp-content/uploads/2022/11/Braiding-Sweetgrass.jpeg?w=647&ssl=1" />
                        <AsideBooks src="https://i0.wp.com/independentbookreview.com/wp-content/uploads/2022/11/Braiding-Sweetgrass.jpeg?w=647&ssl=1" />
                        <AsideBooks src="https://i0.wp.com/independentbookreview.com/wp-content/uploads/2022/11/Braiding-Sweetgrass.jpeg?w=647&ssl=1" />
                        <AsideBooks src="https://i0.wp.com/independentbookreview.com/wp-content/uploads/2022/11/Braiding-Sweetgrass.jpeg?w=647&ssl=1" />
                        <AsideBooks src="https://i0.wp.com/independentbookreview.com/wp-content/uploads/2022/11/Braiding-Sweetgrass.jpeg?w=647&ssl=1" />
                        <AsideBooks src="https://i0.wp.com/independentbookreview.com/wp-content/uploads/2022/11/Braiding-Sweetgrass.jpeg?w=647&ssl=1" />
                        <AsideBooks src="https://i0.wp.com/independentbookreview.com/wp-content/uploads/2022/11/Braiding-Sweetgrass.jpeg?w=647&ssl=1" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
