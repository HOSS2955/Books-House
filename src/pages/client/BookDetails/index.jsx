import React from "react";
import BreadCrumb from "../../../components/client/ui/Breadcrump/BreadCrumb";
import CommentSection from "../../../components/client/comments/CommentSection";

export default function BookDetails() {
   return (
      <div>
         <BreadCrumb title="{book.title}" breadCrumb="{book.title}" />
         <div className="my-5 container">
            <div className="row">
               <div className="col-6">
                  <img src="/images/hero_1.jpg" className="col-12 " alt="" />
               </div>
               <div className="col-6 p-5">
                  <div className="row">
                     <h2 className="fw-bolder text-capitalize ">Title</h2>
                     <p className="mb-5 text-secondary">By "Author"</p>
                     <h3 className="fw-bold mb-5">$55.00</h3>
                     <p>Description : lorem</p>
                  </div>
                  <div className="row m-3">
                     <button className="btn btn-outline-dark rounded-0 col-2 ">
                        -
                     </button>
                     <div className="count col-1 text-center mt-2">0</div>
                     <button className="btn btn-outline-dark rounded-0 col-2 ">
                        +
                     </button>
                  </div>
               </div>
            </div>
            
          <CommentSection/>
         </div>
      </div>
   );
}
