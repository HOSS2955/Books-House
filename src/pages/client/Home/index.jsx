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
import FullScreenLoader from "../../../components/FullScreenLoader";

export default function Home() {
  const { data, isError, isLoading } = useGetHomepageDataQuery();
  const dispatch = useDispatch();
  const { setDataInLocalState } = homepageActions;
  const { wallOfFamesData, clientsTestimonialsData, serviceData } = useSelector(
    (state) => state.homepage
  );
  useEffect(() => {
    if (data) {
      dispatch(setDataInLocalState(data));
    }
  }, [dispatch, data]);
  return (
    <>
      {isLoading && <FullScreenLoader />}
      <div className="home__style">
        <Banner headerArray={serviceData} />

        <section className="section pb-0">
          <AboutUs />
          <DiscoverBooks />
          <ClientsTestimonials
            clientsTestimonialsArray={clientsTestimonialsData}
          ></ClientsTestimonials>
        </section>

        <Service serviceArray={serviceData}></Service>
        {/* <Pricing/> */}

        <WallOfFames wallOfFamesArray={wallOfFamesData}></WallOfFames>
      </div>
    </>
  );
}
