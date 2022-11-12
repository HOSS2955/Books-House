import React , {useEffect} from "react";
import { Navigation, Pagination, A11y , FreeMode , Autoplay } from "swiper";
import { useDispatch , useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-fade"
import 'swiper'
import "swiper/css/bundle";
import ItemCard from "../../ItemCard/ItemCard";
import BookList from "../../../pages/BookShop/BookList";
import { getBooks } from "../../../store/reducers/bookSlice";

const WhatWillWeDiscoverSwiper = () => {

    const dispatch = useDispatch();
   const { books } = useSelector((state) => state.books);
   useEffect(() => {
      dispatch(getBooks());
   }, [dispatch]);
    return (
        <div>
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, A11y , FreeMode , Autoplay]}
            spaceBetween={100}
            centeredSlides={false}
            loop={true}
            slidesPerView={3}
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
            
            {books.map((book , index) => (
                <SwiperSlide className="bg-light text-dark ">
               <ItemCard className="m-3 p-4 col d-flex w-100" key={index} book={book} />
               </SwiperSlide>
            ))}
          </Swiper>
        </div>
      );
    }

export default WhatWillWeDiscoverSwiper





// import React from "react";
// import { Navigation, Pagination, A11y , FreeMode , Autoplay } from "swiper";

// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperData from "./SwiperData";
// import "swiper/css/effect-fade"
// import 'swiper'
// import "swiper/css/bundle";
// // import FeedBackQuery from "../../../services/feedBackQuery";


// export default function FeedBackSwiper(Data) {
  
//   // const feedbacksList = "s";
  