import React from "react";
import FeedBackQuery from "../../services/feedBackQuery"
// import Swiper from "swiper";

export default function Feedback() {


  
  return (
    <section className="feedback d-flex flex-column align-items-center">
      <div className="feedbackHeader d-flex flex-column  ">
        <h1 className="fw-semibold d-flex justify-content-center mt-5">
          Client’s Testmonials
        </h1>
        <p className="mb-4 d-flex justify-content-center">
          It is very easy to start smoking but it is an uphill task to quit it.
          Ask any chain smoker or even a person.
        </p>
      </div>
      <div className="myslider d-lg-flex flex-md-column justify-content-center ms-auto ps-5 pt-4 pb-4 pe-auto">
        <div
          id="carouselExampleControls"
          className="carousel slide  d-flex flex-lg-row flex-md-column flex-sm-column flex-column"
          data-bs-ride="carousel"
        >
          <div className="col-10">
            <div className="carousel-inner">
            <FeedBackQuery/>
            </div>
          </div>

          <div className="col-1 myControls d-flex justify-content-center align-items-center flex-lg-column flex-md-row flex-sm-row  ">
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
          </div>
        </div>
      </div>
    </section>
  );
}
