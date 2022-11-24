import React, { useState } from "react";
import "./MainProfile.css";
import MyOrder from "./MyOrder";
import MyPackages from "./MyPackages";
import MyProfile from "./MyProfile";

export default function MainProfile() {
  const [active, setActive] = useState("profile");
  const clickHandler = (data) => {
    setActive(data);
  };
  return (
    <div className="profile">
      <div className="container-xl px-4 mt-4 rounded">
        <div className="row ">
          <div className="col-xl-3 col-md-3 col-sm-12">
            <div className="card mb-4 mb-xl-0 ">
              <div className="card-header">My Account </div>
              <div className="card-body">
                <nav className="mProfile nav flex-lg-column nav-pills  ">
                  <button
                    className="btn btn-outline-warning active rounded my-2"
                    onClick={() => {
                      clickHandler("profile");
                    }}
                  >
                    Profile setting
                  </button>
                  <button
                    className="btn btn-outline-warning text-dark rounded my-2"
                    onClick={() => {
                      clickHandler("order");
                    }}
                  >
                    My Orders
                  </button>
                  <button
                    className="btn btn-outline-warning text-dark  rounded my-2"
                    onClick={() => {
                      clickHandler("packages");
                    }}
                  >
                    My Packages Payment
                  </button>
                  <button className="btn btn-outline-secondary  rounded my-2">
                    Log out
                  </button>
                </nav>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-md-8 col-sm-12">
            <div className="card mb-4">
              <div className="card-header">Information</div>
              <div className="card-body">
                {active === "profile" && <MyProfile />}
                {active === "order" && <MyOrder />}
                {active === "packages" && <MyPackages />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
