import React from "react";
import { Navigation, Pagination, A11y , FreeMode , Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperData from "./SwiperData";
import "swiper/css/effect-fade"
import 'swiper'
import "swiper/css/bundle";
// import FeedBackQuery from "../../../services/feedBackQuery";


export default function FeedBackSwiper(Data) {
  
  // const feedbacksList = "s";
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, A11y , FreeMode , Autoplay]}
        spaceBetween={100}
        centeredSlides={true}
        loop={true}
        slidesPerView={2}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        className="container"
        navigation
        freeMode
        a11y
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={(e) => console.log("slide change")}
      >

{/* <FeedBackQuery/> */}
        <SwiperSlide className="bg-light text-dark">
          <SwiperData
            feedTitle="Hello"
            feedPosition="CEO of BooksHouse"
            imgSrc="https://images.pexels.com/photos/571169/pexels-photo-571169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          >
            Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills, the bigger the payoff you.
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
