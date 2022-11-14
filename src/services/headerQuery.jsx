import React from "react";
import { Navigation, Pagination, A11y , FreeMode , Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import "swiper/css/effect-fade"
import 'swiper'
import "swiper/css/bundle";
// import FeedBackQuery from "../../../services/feedBackQuery";


export default function HeaderSwiper(Data) {
    const year = new Date().getFullYear();
  // const feedbacksList = "s";
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, A11y , FreeMode , Autoplay]}
        spaceBetween={100}
        centeredSlides={true}
        loop={true}
        slidesPerView={1}
        autoplay={{
            delay: 3000,
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
        <SwiperSlide className="bg-transparent text-dark">
              {/* <div className="hero__content"> */}
                <p className="hero__subtitle">Trending product in {year}</p>
                <h2>Make your interior more minimalistic & modern</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore quae quam rerum at sed sit tenetur, necessitatibus natus? Ut, dolore.</p>

                <motion.button whileTap={{scale:1.2}} className="buy__btn"><Link to="/shop">Shop Now</Link></motion.button>
              {/* </div> */}
            
        </SwiperSlide>
        <SwiperSlide className="bg-transparent">
              {/* <div className="hero__content"> */}
                <p className="hero__subtitle">Trending product in {year}</p>
                <h2>Make your interior more minimalistic & modern</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore quae quam rerum at sed sit tenetur, necessitatibus natus? Ut, dolore.</p>

                <motion.button whileTap={{scale:1.2}} className="buy__btn"><Link to="/shop">Shop Now</Link></motion.button>
              {/* </div> */}
            
        </SwiperSlide>
        <SwiperSlide  className="bg-transparent">
              {/* <div className="hero__content"> */}
                <p className="hero__subtitle">Trending product in {year}</p>
                <h2>Make your interior more minimalistic & modern</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore quae quam rerum at sed sit tenetur, necessitatibus natus? Ut, dolore.</p>

                <motion.button whileTap={{scale:1.2}} className="buy__btn"><Link to="/shop">Shop Now</Link></motion.button>
              {/* </div> */}
            
        </SwiperSlide>
        <SwiperSlide  className="bg-transparent">
        
              {/* <div className="hero__content"> */}
                <p className="hero__subtitle">Trending product in {year}</p>
                <h2>Make your interior more minimalistic & modern</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore quae quam rerum at sed sit tenetur, necessitatibus natus? Ut, dolore.</p>

                <motion.button whileTap={{scale:1.2}} className="buy__btn"><Link to="/shop">Shop Now</Link></motion.button>
              {/* </div> */}
            
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
