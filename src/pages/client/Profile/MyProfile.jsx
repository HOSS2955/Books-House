import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../../../store/client/reducers/userDataSlice";
import "./Profile.css";

export default function MyProfile() {
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getUserData());
   }, []);

   const { user } = useSelector((state) => state.userData);
   const [userData, setUserData] = useState({
      name: "",
      email: "",
      phone: "",
   });

   const inputHandler = (e) => {
      // console.log(e.target.name, ":", e.target.value);
      setUserData({ ...user, [e.target.name]: e.target.value });
   };

   const submitHandler = (e) => {
      e.preventDefault();
      console.log(userData);
   };

   return (
      <div className="profile">
         <div className="container-xl px-4 mt-4 rounded">
            <div className="row ">
               <div className="col-xl-4 col-md-4 col-sm-12">
                  <div className="card mb-4 mb-xl-0 pb-5">
                     <div className="card-header">Profile Picture</div>
                     <div className="card-body text-center">
                        <img
                           className="img-fluid img-account-profile rounded-circle mb-2 pt-4 "
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
                  {!user.confirmed && (
                     <h5 className="text-center text-danger text-capitalize">
                        please confirm your email
                     </h5>
                  )}
                  <div className="card mb-4">
                     <div className="card-header">Account Details</div>
                     <div className="card-body">
                        <form onSubmit={submitHandler}>
                           <div className="mb-3">
                              <label className="small mb-1" for="inputUsername">
                                 Username
                              </label>
                              <input
                                 className="form-control"
                                 id="name"
                                 type="text"
                                 //  value={user?.name}
                                 name="name"
                                 onChange={inputHandler}
                                 placeholder={user.name ? user?.name : ""}
                              />
                           </div>

                           {/* <div className="row gx-3 mb-3"> */}
                           {/* <div className="col-md-6">
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
                    </div> */}
                           {/* </div> */}

                           {/* <div className="col-md-12">
                              <label className="small mb-1" for="inputLocation">
                                 Location
                              </label>
                              <input
                                 className="form-control"
                                 id="inputLocation"
                                 type="text"
                                 placeholder="Enter your location"
                              />
                           </div> */}

                           <div className="mb-3">
                              <label
                                 className="small mb-1"
                                 for="inputEmailAddress"
                              >
                                 Email Address
                              </label>
                              <input
                                 className="form-control"
                                 id="inputEmailAddress"
                                 onChange={inputHandler}
                                 type="email"
                                 name="email"
                                 //  value={user.email}
                                 placeholder={user.email ? user?.email : ""}
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
                                    name="phone"
                                    onChange={inputHandler}
                                    // value={user.phone}
                                    placeholder={user.phone ? user?.phone : ""}
                                 />
                              </div>

                              {/* <div className="col-md-6">
                                 <label
                                    className="small mb-1"
                                    for="inputBirthday"
                                 >
                                    Birthday
                                 </label>
                                 <input
                                    className="form-control"
                                    id="inputBirthday"
                                    type="text"
                                    name="birthday"
                                    placeholder="Enter your birthday"
                                 />
                              </div> */}
                           </div>

                           <button type="submit" className="btn btn-primary">
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
