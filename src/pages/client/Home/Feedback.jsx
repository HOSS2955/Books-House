import React from "react";
import FeedBackSwiper from "../../../components/client/ui/swiper/FeedBackSwiper";
// import Swiper from "swiper";

export default function Feedback({ feedBackArray }) {
   return (
      <div className="container">
         <section className="section bg-white">
            <div className="row d-flex justify-content-center">
               <div className="menu-content pb-70 col-lg-8 mb-4">
                  <div className="title text-center">
                     <h1 className="fw-semibold">Client’s Testmonials</h1>
                     <p className="text-muted text-sm">
                        It is very easy to start smoking but it is an uphill
                        task to quit it. Ask any chain smoker or even a person.
                     </p>
                  </div>
               </div>
            </div>
            <FeedBackSwiper feedBackArray={feedBackArray} />
         </section>
      </div>
   );
}

{
   /* <div className="myslider d-lg-flex flex-md-column justify-content-center ms-auto ps-5 pt-4 pb-4 pe-auto">
        <div
          id="carouselExampleControls"
          className="carousel slide  d-flex flex-lg-row flex-md-column flex-sm-column flex-column"
          data-bs-ride="carousel"
        >
          <div className="col-10">
            <div className="carousel-inner bg-white">
            <FeedBackQuery/>
            </div>
          </div> */
}

{
   /* <div className="col-1 myControls d-flex justify-content-center align-items-center flex-lg-column flex-md-row flex-sm-row  ">
            <button
              className="carousel-control-prev  hover-shadow pt-2 pb-2 pl-4 pr-4  bg-body "
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <i className="fa-solid fa-arrow-up-long"></i>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next hover-overlay  pt-2 pb-2 pl-4 pr-4   bg-body "
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <i className="fa-solid fa-arrow-down-long  "></i>
              <span className="visually-hidden">Next</span>
            </button>
          </div> */
}
{
   /* </div>
      </div>
    </section> */
}
