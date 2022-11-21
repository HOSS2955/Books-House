import React, { useEffect, useState } from "react";
import "../../../assets/css/Home.css";
import ClientsTestimonials from "./ClientsTestimonials";
import WallOfFames from "./WallOfFames";
import { useGetHomepageDataQuery } from "../../../features/homeApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { homepageActions } from "../../../store/client/reducers/homepageSlice";
import AboutUs from "./AboutUs";
import DiscoverBooks from "./DiscoverBooks";
import Service from "./Service";
import Banner from "./Banner";

export default function Home() {
   const { data, isError, isLoading } = useGetHomepageDataQuery();
   const dispatch = useDispatch();
   const { setDataInLocalState } = homepageActions;
   const { wallOfFamesData, clientsTestimonialsData , serviceData} = useSelector(
      (state) => state.homepage
   );
   useEffect(() => {
      console.log(data);
      if (data) {
         dispatch(setDataInLocalState(data));
         console.log(data);
      }
   }, [dispatch, data]);
   return (
      <div className="home__style">
         <Banner headerArray={serviceData} />
         <section className="section">
            <AboutUs />
         </section>
         <WallOfFames wallOfFamesArray={wallOfFamesData}></WallOfFames>
         <Service serviceArray = {serviceData}></Service>
         {/* <Pricing/> */}
         <DiscoverBooks />
         <ClientsTestimonials
            clientsTestimonialsArray={clientsTestimonialsData}
         ></ClientsTestimonials>
      </div>
   );
}
