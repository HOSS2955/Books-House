import React from "react";
import { Button } from "react-bootstrap";
import "../../assets/css/Home.css";
// import { Carousel } from "react-bootstrap";
import HomeCarousel from "./HomeCarousel";
import Feedback from "./Feedback";
// import MyButton from "../../components/ui/MyButton";
import Pricing from "./Pricing";
import WallOfFames from "./WallOfFames";
export default function Home() {
  return (
    <div>
      <HomeCarousel></HomeCarousel>
      
      <WallOfFames></WallOfFames>
    <Pricing/>
    <Feedback></Feedback>
      {/* <MyButton>Hello</MyButton> */}
{/* 
      <Button variant="outline-success">Hello</Button> */}
    </div>
  );
}
