import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { SwiperSlide} from 'swiper/react';
import SwiperData from "../components/ui/swiper/SwiperData";
import "swiper/css/bundle";


const WallOfFamesQuery = () => {
    const baseUrl ="http://localhost:3005/wallOfFames";

    async function fetchWallOfFames() {
        const { data } = await axios.get(baseUrl);
        return data;
        
      }
      const { data, error, isError, isLoading } = useQuery("wallOfFames", fetchWallOfFames);
      if (isLoading) {
  return <div>Loading...</div>;
}
if (isError) {
  return <div>Error! {error.message}</div>;
}
  return (
    <>
    {data.map((post , index)=>{
        return(
            <SwiperSlide className="bg-light text-dark"  key={index}>
          <SwiperData
            feedTitle={post.feedTitle}
            feedPosition={post.feedPosition}
            imgSrc={post.imgSrc}
          >
            The more effort you put into improving your skills, the bigger the
            payoff you.
          </SwiperData>
        </SwiperSlide>
        
        )
    })}
    </>
  )
}

export default WallOfFamesQuery
