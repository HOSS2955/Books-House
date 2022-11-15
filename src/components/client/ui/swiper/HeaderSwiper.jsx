import React from "react";
import { Navigation, Pagination, A11y, FreeMode, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "swiper/css/effect-fade";
import "swiper";
import "swiper/css/bundle";

const HeaderSwiper = ({ headerArray }) => {
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, A11y, FreeMode, Autoplay]}
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
      >
        {/* <Mapping header data/> */}
        {headerArray.map((item, index) => {
          return (
            <SwiperSlide className="bg-transparent text-dark">
              <div className="hero__content">
                <p className="hero__subtitle">Our Services</p>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="buy__btn"
                >
                  <Link to="/authorshouse">Show details</Link>
                </motion.button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HeaderSwiper;
