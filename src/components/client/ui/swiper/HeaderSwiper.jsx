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
        modules={[A11y, FreeMode, Autoplay]}
        spaceBetween={100}
        centeredSlides={true}
        loop={true}
        slidesPerView={1}
        autoplay={{
          delay: 350000,
          disableOnInteraction: false,
        }}
        className="container"
        freeMode
        a11y
      >
        {/* <Mapping header data/> */}
        {headerArray.map((item, index) => {
          return (
            <SwiperSlide className="bg-transparent" key={index}>
              <div className="hero__content">
                <h2 className="hero__subtitle mb-5 fw-bold">Our Services</h2>
                <h4 className="pb-5">{item.title}</h4>
                <p className="pb-5">{item.desc}</p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="buy__btn mb-5 btn btn-warning"
                >
                  <Link to={item.path}>{item.btn}</Link>
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
