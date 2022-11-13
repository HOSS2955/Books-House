import React from "react";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile">
      <div className="container-xl px-4 mt-4 rounded">
        <div className="row ">
          <div className="col-xl-4 col-md-4">
            <div className="card mb-4 mb-xl-0 pb-5">
              <div className="card-header">Profile Picture</div>
              <div className="card-body text-center">
                <img
                  className="img-account-profile rounded-circle mb-2 pt-4"
                  src="http://bootdey.com/img/Content/avatar/avatar1.png"
                  alt=""
                />
                <button className="btn btn-primary" type="button">
                  Change Avatar
                </button>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-md-8">
            <div className="card mb-4">
              <div className="card-header">Account Details</div>
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label className="small mb-1" for="inputUsername">
                      Username (how your name will appear to other users on the
                      site)
                    </label>
                    <input
                      className="form-control"
                      id="inputUsername"
                      type="text"
                      placeholder="Enter your username"
                    />
                  </div>

                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label className="small mb-1" for="inputFirstName">
                        First name
                      </label>
                      <input
                        className="form-control"
                        id="inputFirstName"
                        type="text"
                        placeholder="Enter your first name"
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="small mb-1" for="inputLastName">
                        Last name
                      </label>
                      <input
                        className="form-control"
                        id="inputLastName"
                        type="text"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <label className="small mb-1" for="inputLocation">
                      Location
                    </label>
                    <input
                      className="form-control"
                      id="inputLocation"
                      type="text"
                      placeholder="Enter your location"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="small mb-1" for="inputEmailAddress">
                      Email address
                    </label>
                    <input
                      className="form-control"
                      id="inputEmailAddress"
                      type="email"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label className="small mb-1" for="inputPhone">
                        Phone number
                      </label>
                      <input
                        className="form-control"
                        id="inputPhone"
                        type="tel"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="small mb-1" for="inputBirthday">
                        Birthday
                      </label>
                      <input
                        className="form-control"
                        id="inputBirthday"
                        type="text"
                        name="birthday"
                        placeholder="Enter your birthday"
                      />
                    </div>
                  </div>

                  <button className="btn btn-primary" type="button">
                    Save changes
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
