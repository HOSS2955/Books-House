import React from "react";
import "./SwiperData.css";
export default function SwiperData({
  children,
  feedTitle,
  feedPosition,
  imgSrc,
}) {
  const sds = "sd";
  return (
    <div className="feed1 m-3 p-4 col d-flex">
      <div className="myImg col-2 d-flex justify-content-center p-1">
        <img src={imgSrc} alt="profile" />
      </div>
      <div className="myFeed col-10">
        <p className="">{children}</p>
        <h5>{feedTitle}</h5>
        <p>{feedPosition}</p>
      </div>
    </div>
  );
}
