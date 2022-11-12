import React from "react";
import axios from "axios";
import { SwiperSlide } from "swiper/react";

import { useQuery } from "react-query";
import SwiperData from "../components/ui/swiper/SwiperData";

const FeedBackQuery = () => {


    const baseUrl ="http://localhost:3005/feedback";
    // const {getResponse} = resAction;
    async function fetchSlider() {
      const { data } = await axios.get(baseUrl);
      console.log(data)
      return data;
      
    }
  
    const { data, error, isError, isLoading } = useQuery("feedback", fetchSlider);
    if (isLoading) {
      return <div>Loading...</div>;
    }
    if (isError) {
      return <div>Error! {error.message}</div>;
    }
  



    return (
      <>
        {data.map((feedback, index) => {
          return <SwiperSlide  className="bg-light"  key={index}>
          <SwiperData
            feedTitle={feedback.title}
            feedPosition={feedback.desc}
            imgSrc={feedback.img}
          >
            {feedback.paragraph}
          </SwiperData>
          </SwiperSlide>
        })}
      </>
    );
  }
      

export default FeedBackQuery
