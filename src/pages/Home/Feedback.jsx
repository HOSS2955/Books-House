import React from "react";
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
              <div className="carousel-item active">
                <div className="perant row p-2 d-flex">
                  <div className="feed1 m-3 p-4  col d-flex   ">
                    <div className="myImg col-2 d-flex justify-content-center p-1">
                      <img
                        src="./alexi-romano-CCx6Fz_CmOI-unsplash.jpg"
                        className=""
                        alt=""
                      />
                    </div>
                    <div className="myFeed col-10">
                      <p className="">
                        Do you want to be even more successful? Learn to love
                        learning and growth. The more effort you put into
                        improving your skills, the bigger the payoff you.
                      </p>
                      <h5>Harriet Maxwell</h5>
                      <p>CEO at Google</p>
                    </div>
                  </div>
                  <div className="feed2 d-sm-none d-lg-flex d-md-flex d-none col m-3 p-4 d-flex">
                    <div className="myImg col-2 d-flex justify-content-center p-1">
                      <img
                        src="./alexi-romano-CCx6Fz_CmOI-unsplash.jpg"
                        className=""
                        alt=""
                      />
                    </div>
                    <div className="myFeed col-10">
                      <p className="">
                        Do you want to be even more successful? Learn to love
                        learning and growth. The more effort you put into
                        improving your skills, the bigger the payoff you.
                      </p>
                      <h5>Harriet Maxwell</h5>
                      <p>CEO at Google</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="perant row p-2 d-flex ">
                  <div className="feed1 col m-3 p-4  d-flex ">
                    <div className="myImg col-2 d-flex justify-content-center p-1">
                      <img
                        src="/assets/imgs/projects/xb1.jpg.pagespeed.ic.kt2tbOEfuO.webp"
                        className=""
                        alt=""
                      />
                    </div>
                    <div className="myFeed col-10">
                      <p className="">
                        Do you want to be even more successful? Learn to love
                        learning and growth. The more effort you put into
                        improving your skills, the bigger the payoff you.
                      </p>
                      <h5>Harriet Maxwell</h5>
                      <p>CEO at Google</p>
                    </div>
                  </div>
                  <div className="feed2 d-sm-none d-lg-flex d-md-flex d-none col m-3 p-4 d-flex">
                    <div className="myImg col-2 d-flex justify-content-center p-1">
                      <img
                        src="./alexi-romano-CCx6Fz_CmOI-unsplash.jpg"
                        className=""
                        alt=""
                      />
                    </div>
                    <div className="myFeed col-10">
                      <p className="">
                        Do you want to be even more successful? Learn to love
                        learning and growth. The more effort you put into
                        improving your skills, the bigger the payoff you.
                      </p>
                      <h5>Harriet Maxwell</h5>
                      <p>CEO at Google</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="perant row p-2 d-flex ">
                  <div className="feed1  col m-3 p-4  d-flex ">
                    <div className="myImg col-2 d-flex justify-content-center p-1">
                      <img
                        src="./alexi-romano-CCx6Fz_CmOI-unsplash.jpg"
                        className=""
                        alt=""
                      />
                    </div>
                    <div className="myFeed col-10">
                      <p className="">
                        Do you want to be even more successful? Learn to love
                        learning and growth. The more effort you put into
                        improving your skills, the bigger the payoff you.
                      </p>
                      <h5>Harriet Maxwell</h5>
                      <p>CEO at Google</p>
                    </div>
                  </div>
                  <div className="feed2 d-sm-none d-lg-flex d-md-flex d-none col m-3 p-4 d-flex ">
                    <div className="myImg col-2 d-flex justify-content-center p-1">
                      <img
                        src="./alexi-romano-CCx6Fz_CmOI-unsplash.jpg"
                        className=""
                        alt=""
                      />
                    </div>
                    <div className="myFeed col-10">
                      <p className="">
                        Do you want to be even more successful? Learn to love
                        learning and growth. The more effort you put into
                        improving your skills, the bigger the payoff you.
                      </p>
                      <h5>Harriet Maxwell</h5>
                      <p>CEO at Google</p>
                    </div>
                  </div>
                </div>
                <img
                  src="marissa-grootes-D4jRahaUaIc-unsplash.jpg"
                  className="d-block w-50"
                  alt="..."
                />
              </div>
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
