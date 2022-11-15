import React, { useEffect } from "react";
import "../../../assets/css/Home.css";
import ClientsTestimonials from "./ClientsTestimonials";
import Pricing from "./Pricing";
import WallOfFames from "./WallOfFames";
import { useGetHomepageDataQuery } from "../../../features/homeApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { homepageActions } from "../../../store/client/reducers/homepageSlice";
import AboutUs from "./AboutUs";
import DiscoverBooks from "./DiscoverBooks";
import Header from "./Header";

export default function Home() {
  const { data, isError, isLoading } = useGetHomepageDataQuery();
  const dispatch = useDispatch();
  const { setDataInLocalState } = homepageActions;
  const { wallOfFamesData, clientsTestimonialsData, packagesData, headerData } =
    useSelector((state) => state.homepage);
  useEffect(() => {
    console.log(data);
    if (data) {
      dispatch(setDataInLocalState(data));
      console.log(data);
    }
  }, [dispatch, data]);

  return (
    <div className="home__style">
      <Header headerArray={headerData} />
      <section className="section">
        <AboutUs />
      </section>
      <WallOfFames wallOfFamesArray={wallOfFamesData}></WallOfFames>
      <Pricing pricingArray={packagesData} />
      <ClientsTestimonials
        clientsTestimonialsArray={clientsTestimonialsData}
      ></ClientsTestimonials>
      <DiscoverBooks />
    </div>
  );
}
