import React from "react";
import "./authorshouse.css";
import Pricing from "../Home/Package";
import { useEffect } from "react";
import "../../../assets/css/Home.css";
import { useGetHomepageDataQuery } from "../../../features/homeApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { homepageActions } from "../../../store/client/reducers/homepageSlice";

export default function AuthorsHouse() {
  const { data, isError, isLoading } = useGetHomepageDataQuery();
  const dispatch = useDispatch();
  const { setDataInLocalState } = homepageActions;
  const { wallOfFamesData, feedbackData, packagesData } = useSelector(
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
    <div className="mt-5">
      {/* SERVICE NAME AND DESCRIPTION */}
      <div className="mb-5">
        <div className="container">
          <div className="row">
            <div className="col-6 d-flex flex-column justify-content-center align-items-center">
              <h1 className="mb-3">Authors House</h1>
              <p>
                You’re in the right place.No matter how you publish your book
                Give us your book and we will provide you with real reviews
                about your book
              </p>
              <div>
                <button className="px-4 btn btn-outline-dark rounded-0">
                  Packages
                </button>
              </div>
            </div>
            <div className="col-6 p-5">
              <img src="./images/hero_1.jpg" className="col-12" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* OUR SERVIECS GALLERY */}
      <div className="gallery mb-5">
        <h2 className="text-center my-5">Our Services Gallery</h2>
        <div className="row container mx-auto">
          <div className="col-8 row">
            <div className="col-6">
              <img className="col-12 py-2" src="./images/hero_1.jpg" alt="" />
            </div>
            <div className="col-6 py-2">
              <img className="col-12" src="./images/hero_2.jpg" alt="" />
            </div>
            <div className="col-12 py-2">
              <img className="col-12" src="./images/hero_3.jpg" alt="" />
            </div>
          </div>
          <div className="col-4 py-2">
            <img className="w-100 h-100  " src="./images/hero_2.jpg" alt="" />
          </div>
        </div>
      </div>

      {/* PACKAGES */}
      <Pricing pricingArray={packagesData} />
    </div>
  );
}
