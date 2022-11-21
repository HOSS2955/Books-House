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
  }, [dispatch]);

  return (
    <div className="mt-5">
      {/* SERVICE NAME AND DESCRIPTION */}
      <div className="mb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
              <h1 className="mb-3">Authors House</h1>
              <p>
                re in the right place.No matter how you publish your book Give
                us your book and we will provide you with real reviews about
                your book
              </p>
              <div>
                <button className="px-4 btn btn-outline-dark rounded-0">
                  Packages
                </button>
              </div>
            </div>
            <div className="col-md-6 p-5">
              <img src="./images/hero_1.jpg" className="col-12" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
