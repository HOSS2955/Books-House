import React from "react";
import { Navigation, Pagination, A11y , FreeMode , Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperData from "./SwiperData";
import "swiper/css/effect-fade"
import 'swiper'
import "swiper/css/bundle";


export default function FeedBackSwiper({feedBackArray}) {

  
  
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
        breakpoints= {{
          // when window width is >= 200px
          200:{
            slidesPerView: 1
          },
          // when window width is >= 900px
          900: {
            slidesPerView: 2,
            spaceBetween: 40
          }
        }
      }
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={(e) => console.log("slide change")}
      >

{/* <FeedBackQuery/> */}
{feedBackArray.map((item , index)=>
  <SwiperSlide key={index}  className="bg-light">
    <SwiperData
            feedTitle={item.title}
            feedPosition={item.feedPosition}
            imgSrc={item.img}
          >
Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills, the bigger the payoff you.
          </SwiperData>
        </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
}
