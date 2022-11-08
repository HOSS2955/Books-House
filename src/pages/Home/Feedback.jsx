import React from "react";

export default function Feedback() {
  return (
    <section class="feedback d-flex flex-column align-items-center">
      <div class="feedbackHeader d-flex flex-column  ">
        <h1 class="fw-semibold d-flex justify-content-center mt-5">
          Client’s Testmonials
        </h1>
        <p class="mb-4 d-flex justify-content-center">
          It is very easy to start smoking but it is an uphill task to quit it.
          Ask any chain smoker or even a person.
        </p>
      </div>
      <div class="myslider d-lg-flex flex-md-column justify-content-center ms-auto ps-5 pt-4 pb-4 pe-auto">
        <div
          id="carouselExampleControls"
          class="carousel slide  d-flex flex-lg-row flex-md-column flex-sm-column flex-column"
          data-bs-ride="carousel"
        >
          <div class="col-10">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="perant row p-2 d-flex">
                  <div class="feed1 m-3 p-4  col d-flex   ">
                    <div class="myImg col-2 d-flex justify-content-center p-1">
                      <img
                        src="./alexi-romano-CCx6Fz_CmOI-unsplash.jpg"
                        class=""
                        alt=""
                      />
                    </div>
                    <div class="myFeed col-10">
                      <p class="">
                        Do you want to be even more successful? Learn to love
                        learning and growth. The more effort you put into
                        improving your skills, the bigger the payoff you.
                      </p>
                      <h5>Harriet Maxwell</h5>
                      <p>CEO at Google</p>
                    </div>
                  </div>
                  <div class="feed2 d-sm-none d-lg-flex d-md-flex d-none col m-3 p-4 d-flex">
                    <div class="myImg col-2 d-flex justify-content-center p-1">
                      <img
                        src="./alexi-romano-CCx6Fz_CmOI-unsplash.jpg"
                        class=""
                        alt=""
                      />
                    </div>
                    <div class="myFeed col-10">
                      <p class="">
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

              <div class="carousel-item">
                <div class="perant row p-2 d-flex ">
                  <div class="feed1 col m-3 p-4  d-flex ">
                    <div class="myImg col-2 d-flex justify-content-center p-1">
                      <img
                        src="/assets/imgs/projects/xb1.jpg.pagespeed.ic.kt2tbOEfuO.webp"
                        class=""
                        alt=""
                      />
                    </div>
                    <div class="myFeed col-10">
                      <p class="">
                        Do you want to be even more successful? Learn to love
                        learning and growth. The more effort you put into
                        improving your skills, the bigger the payoff you.
                      </p>
                      <h5>Harriet Maxwell</h5>
                      <p>CEO at Google</p>
                    </div>
                  </div>
                  <div class="feed2 d-sm-none d-lg-flex d-md-flex d-none col m-3 p-4 d-flex">
                    <div class="myImg col-2 d-flex justify-content-center p-1">
                      <img
                        src="./alexi-romano-CCx6Fz_CmOI-unsplash.jpg"
                        class=""
                        alt=""
                      />
                    </div>
                    <div class="myFeed col-10">
                      <p class="">
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
              <div class="carousel-item">
                <div class="perant row p-2 d-flex ">
                  <div class="feed1  col m-3 p-4  d-flex ">
                    <div class="myImg col-2 d-flex justify-content-center p-1">
                      <img
                        src="./alexi-romano-CCx6Fz_CmOI-unsplash.jpg"
                        class=""
                        alt=""
                      />
                    </div>
                    <div class="myFeed col-10">
                      <p class="">
                        Do you want to be even more successful? Learn to love
                        learning and growth. The more effort you put into
                        improving your skills, the bigger the payoff you.
                      </p>
                      <h5>Harriet Maxwell</h5>
                      <p>CEO at Google</p>
                    </div>
                  </div>
                  <div class="feed2 d-sm-none d-lg-flex d-md-flex d-none col m-3 p-4 d-flex ">
                    <div class="myImg col-2 d-flex justify-content-center p-1">
                      <img
                        src="./alexi-romano-CCx6Fz_CmOI-unsplash.jpg"
                        class=""
                        alt=""
                      />
                    </div>
                    <div class="myFeed col-10">
                      <p class="">
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
                  class="d-block w-50"
                  alt="..."
                />
              </div>
            </div>
          </div>

          <div class="col-1 myControls d-flex justify-content-center align-items-center flex-lg-column flex-md-row flex-sm-row  ">
            <button
              class="carousel-control-prev  hover-shadow pt-2 pb-2 pl-4 pr-4  bg-body "
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <i class="fa-solid fa-arrow-up-long"></i>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next hover-overlay  pt-2 pb-2 pl-4 pr-4   bg-body "
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <i class="fa-solid fa-arrow-down-long  "></i>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
