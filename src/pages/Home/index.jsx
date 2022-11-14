import React , {useEffect} from "react";
import { Button } from "react-bootstrap";
import "../../assets/css/Home.css";
// import { Carousel } from "react-bootstrap";
import HomeCarousel from "./HomeCarousel";
import Feedback from "./Feedback";
// import MyButton from "../../components/ui/MyButton";
import Pricing from "./Pricing";
import WallOfFames from "./WallOfFames";
import { useGetHomepageDataQuery, useUpdateHomepageDataMutation } from "../../features/homeApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { homepageActions } from "../../store/reducers/homepageSlice";
import { useUpdateHomepageDataQuery } from "../../features/apiSlice";
import { useCallback } from "react";
import AboutUs from "../About/AboutUs";
import DiscoverBooks from "./DiscoverBooks";
import Header from "./Header";
// import useHomePageData from "../../services/useHomePageData";

export default function Home() {
  const { data, isError, isLoading } = useGetHomepageDataQuery();
  const dispatch = useDispatch();
  const { setDataInLocalState } = homepageActions;
  const { wallOfFamesData , feedbackData , packagesData } = useSelector((state) => state.homepage);
  useEffect(() => {
    if (data) {
      dispatch(setDataInLocalState(data));
      console.log(data)
    }
  }, [dispatch, data]);










// const {wallOfFamesData , aboutData} = useHomePageData();




//   const [updateHomepageData]=useUpdateHomepageDataMutation();
// const updateHandler=useCallback((slider)=>
//   updateHomepageData({...slider , title:"Mirna Milad"}),[updateHomepageData]
// )


  return (
    <div>
      {/* <div >
    {sliderData.map((slider , index) => (<div key={index}><p>{slider.title}</p> <button onClick={()=>updateHandler(slider)}>click here</button></div>) )}
    
        </div> */}
        {/* <p>{wallOfFamesData.feedTilte}</p> */}
        <Header/>
        <section className="section">
        <AboutUs/>
        </section>
      <WallOfFames wallOfFamesArray={wallOfFamesData}></WallOfFames>
    <Pricing pricingArray = {packagesData}/>
    <Feedback feedBackArray = {feedbackData}></Feedback>
    <DiscoverBooks/>
      {/* <MyButton>Hello</MyButton> */}
{/* 
      <Button variant="outline-success">Hello</Button> */}
    </div>
  );
}
