import React from "react";
import "../../../../assets/css/ReviewHeader.css";
export default function ReviewHeader({ data }) {
  return (
    <div className="">
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark w-100 h-50 d-inline-block "
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active  ">
            <img src={data.src} className="d-block  w-100  rounded" alt="..." />
            <div className="text-start bottom-left container">
              <div className=" w-75 d-md-block text-light mb-5">
                <h1 className="fs-1">{data.header}</h1>
                <p className="fs-3 ">{data.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
