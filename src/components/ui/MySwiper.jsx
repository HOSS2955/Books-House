import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperData from "./SwiperData";
import "swiper/css/bundle";
import "../../assets/css/swiper.css";

export default function MySwiper(Data) {
  const feedbacksList = "s";
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        className="container"
        navigation
        a11y
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={(e) => console.log("slide change")}
      >
        <SwiperSlide>
          <SwiperData
            feedTitle="Kareem Fahmy"
            feedPosition="CEO of BooksHouse"
            imgSrc="images/hero_1.jpg"
          >
            The more effort you put into improving your skills, the bigger the
            payoff you.
          </SwiperData>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
