import React from "react";
import axios from "axios";

import { useQuery } from "react-query";

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
      <div>
        {data.map((feedback, index) => {
          return <div key={index} className={index === 0? "carousel-item active": "carousel-item" }>
          <div className="perant row p-2 d-flex ">
            <div className="feed1 col m-3 p-4  d-flex ">
              <div className="myImg col-2 d-flex justify-content-center p-1">
                <img
                  src={feedback.img}
                  className=""
                  alt=""
                />
              </div>
              <div className="myFeed col-10">
                <p className="">
                  {feedback.paragraph}
                </p>
                <h5>{feedback.title}</h5>
                <p>{feedback.desc}</p>
              </div>
            </div>
            <div className="feed2 d-sm-none d-lg-flex d-md-flex d-none col m-3 p-4 d-flex">
              <div className="myImg col-2 d-flex justify-content-center p-1">
                <img
                  src={feedback.img}
                  className=""
                  alt=""
                />
              </div>
              <div className="myFeed col-10">
                <p className="">
                {feedback.paragraph}
                </p>
                <h5>{feedback.title}</h5>
                <p>{feedback.desc}</p>
              </div>
            </div>
          </div>
        </div>
        })}
      </div>
    );
  }
      

export default FeedBackQuery
