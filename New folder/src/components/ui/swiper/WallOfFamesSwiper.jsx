import React from "react";
import { Navigation, Pagination, A11y , FreeMode , Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperData from "./SwiperData"
import 'swiper'
import "swiper/css/bundle";
// import WallOfFamesQuery from "../../../services/wallOfFamesQuery";


export default function WallOfFamesSwiper(Data) {
  
  // const feedbacksList = "s";
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, A11y , FreeMode , Autoplay]}
        spaceBetween={100}
        slidesPerView={1}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        className="container"
        navigation
        freeMode
        a11y
        // pagination={{ clickable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={(e) => console.log("slide change")}
        // grapCursor
      >
        {/* Map for data from backend
        <Swiper modules={[EffectFade]} effect="fade">
      {[1, 2, 3].map((i, el) => {
        return <SwiperSlide>

        </SwiperSlide>;
      })}
    </Swiper> */}

{/* <WallOfFamesQuery/> */}
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
        <SwiperSlide className="bg-light">
          <SwiperData
            feedTitle="Mirna Milad"
            feedPosition="CEO of BooksHouse"
            imgSrc="images/hero_1.jpg"
          >
            The more effort you put into improving your skills, the bigger the
            payoff you.
          </SwiperData>
        </SwiperSlide>
        <SwiperSlide  className="bg-light">
          <SwiperData
            feedTitle="Norhan AbdElhamed"
            feedPosition="CEO of BooksHouse"
            imgSrc="images/hero_1.jpg"
          >
            The more effort you put into improving your skills, the bigger the
            payoff you.
          </SwiperData>
        </SwiperSlide>
        <SwiperSlide  className="bg-light">
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
