import React from "react";
import DiscoverBooksSwiper from "../../components/client/ui/swiper/DiscoverBooksSwiper";
// import Swiper from "swiper";

export default function DiscoverBooks() {
   return (
      <section className="section">
         <div className="container">
            <section className="section bg-white">
               <div className="row d-flex justify-content-center">
                  <div className="menu-content pb-70 col-lg-8 mb-4">
                     <div className="title text-center">
                        <h1 className="fw-semibold">What will we discover ?</h1>
                        <p className="text-muted text-sm text-dark">
                           It is very easy to start smoking but it is an uphill
                           task to quit it. Ask any chain smoker or even a
                           person.
                        </p>
                     </div>
                  </div>
               </div>
               <DiscoverBooksSwiper />
            </section>
         </div>
      </section>
   );
}
