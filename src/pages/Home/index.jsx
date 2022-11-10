import React from "react";
import { Button } from "react-bootstrap";
import "../../assets/css/Home.css";
// import { Carousel } from "react-bootstrap";
import HomeCarousel from "./HomeCarousel";
import Feedback from "./Feedback";
// import MyButton from "../../components/ui/MyButton";
import MySwiper from "../../components/ui/MySwiper";
import Pricing from "./Pricing";
export default function Home() {
  return (
    <div>
      <HomeCarousel></HomeCarousel>
      <Feedback></Feedback>
      <MySwiper></MySwiper>
    <Pricing/>
      {/* <MyButton>Hello</MyButton> */}

      <Button variant="outline-success">Hello</Button>
    </div>
  );
}
