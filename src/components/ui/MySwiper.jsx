import React from "react";
import { Navigation, Pagination, Scrollbar, A11y , EffectFade , FreeMode } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperData from "./SwiperData";
import "../../assets/css/swiper.css";
// import 'swiper/css/effect-fade';
import "swiper/css/effect-fade"
import 'swiper'
import "swiper/css/bundle";


export default function MySwiper(Data) {
  
  // const feedbacksList = "s";
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, A11y , EffectFade , FreeMode]}
        spaceBetween={50}
        slidesPerView={3}
        className="container bg-light"
        navigation
        freeMode
        a11y
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={(e) => console.log("slide change")}
        grapCursor
        effect="fade"
      >
        {/* Map for data from backend
        <Swiper modules={[EffectFade]} effect="fade">
      {[1, 2, 3].map((i, el) => {
        return <SwiperSlide>

        </SwiperSlide>;
      })}
    </Swiper> */}


        <SwiperSlide className="bg-light text-dark">
          <SwiperData
            feedTitle="Kareem Fahmy"
            feedPosition="CEO of BooksHouse"
            imgSrc="images/hero_1.jpg"
          >
            The more effort you put into improving your skills, the bigger the
            payoff you.
          </SwiperData>
        </SwiperSlide>
        <SwiperSlide>
          <SwiperData
            feedTitle="Mirna Milad"
            feedPosition="CEO of BooksHouse"
            imgSrc="images/hero_1.jpg"
          >
            The more effort you put into improving your skills, the bigger the
            payoff you.
          </SwiperData>
        </SwiperSlide>
        <SwiperSlide>
          <SwiperData
            feedTitle="Norhan AbdElhamed"
            feedPosition="CEO of BooksHouse"
            imgSrc="images/hero_1.jpg"
          >
            The more effort you put into improving your skills, the bigger the
            payoff you.
          </SwiperData>
        </SwiperSlide>
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
