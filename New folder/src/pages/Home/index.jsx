import React , {useEffect} from "react";
import { Button } from "react-bootstrap";
import "../../assets/css/Home.css";
// import { Carousel } from "react-bootstrap";
import HomeCarousel from "./HomeCarousel";
import Feedback from "./Feedback";
// import MyButton from "../../components/ui/MyButton";
import Pricing from "./Pricing";
import WallOfFames from "./WallOfFames";
import { useGetHomepageDataQuery, useUpdateHomepageDataMutation } from "../../features/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import { homepageActions } from "../../store/reducers/homepageSlice";
import { useUpdateHomepageDataQuery } from "../../features/apiSlice";
import { useCallback } from "react";

export default function Home() {


  const { data, isError, isLoading } = useGetHomepageDataQuery();
  const dispatch = useDispatch();
  const { setDataInLocalState } = homepageActions;
  const { sliderData } = useSelector((state) => state.homepage);
  useEffect(() => {
    if (data) {
      dispatch(setDataInLocalState(data));
      console.log(data)
    }
  }, [dispatch, data]);


  const [updateHomepageData]=useUpdateHomepageDataMutation();
const updateHandler=useCallback((slider)=>
  updateHomepageData({...slider , title:"Mirna Milad"}),[updateHomepageData]
)

  return (
    <div>
      <HomeCarousel></HomeCarousel>
      {/* <div >
    {sliderData.map((slider , index) => (<div key={index}><p>{slider.title}</p> <button onClick={()=>updateHandler(slider)}>click here</button></div>) )}
    
        </div> */}
      <WallOfFames></WallOfFames>
    <Pricing/>
    <Feedback></Feedback>
      {/* <MyButton>Hello</MyButton> */}
{/* 
      <Button variant="outline-success">Hello</Button> */}
    </div>
  );
}
