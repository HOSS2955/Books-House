import React from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import { Button } from "react-bootstrap";

import { useQuery } from "react-query";
import "../pages/Home/Homecarousel.css"
export default function SliderQuery() {

    const baseUrl ="http://localhost:3005/slider";
  async function fetchSlider() {
    const { data } = await axios.get(baseUrl);
    console.log(data)
    return data;
    
  }

  const { data, error, isError, isLoading } = useQuery("slider", fetchSlider);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error! {error.message}</div>;
  }

  return (

<div className="customHeight">
      <Carousel className="customHeight text-center">
        {data.map((imgDetail , index)=>{
            return(
            <Carousel.Item>
                <Button variant="warning" className="position-absolute mt-5 p-3 ">
                  Buy Now
                </Button>
                <img
                  className="d-block w-100"
                  src={imgDetail.imgUrl}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>{imgDetail.title}</h3>
                  <p>{imgDetail.desc}</p>
                </Carousel.Caption>
              </Carousel.Item>)
        })}
      </Carousel>
    </div>



  )
}