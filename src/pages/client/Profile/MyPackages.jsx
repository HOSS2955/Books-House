import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getprofilePackage } from "../../../store/client/reducers/profilePaymet";

export default function MyPackages() {
  const dispatch = useDispatch();
  const email = "hoss2955@gmail.com";
  const { profilePackage } = useSelector((state) => state.ProfilePayment);
  useEffect(() => {
    dispatch(getprofilePackage(email));
  }, []);
  console.log(profilePackage);

  return (
    <>
      {profilePackage?.map((item, index) => (
        <div className="card border-primary">
          <div className="card-body">
            <header className="d-lg-flex">
              <div className="flex-grow-1">
                <h6 className="mb-0">
                  Package ID: {item.package.id}
                  <i className="dot"></i>
                </h6>
                <span className="text-muted">
                  Date:{profilePackage[0].updatedAt}{" "}
                </span>
              </div>
            </header>
            <hr />
            <div className="row">
              <div className="col-lg-4">
                <p className="mb-0 text-muted">Your Data</p>
                <p className="m-0">
                  {item.authorData.firstName + " " + item.authorData.lastName}{" "}
                  <br /> Phone: {item.authorData.phoneNumber} <br /> Email:
                  {item.authorData.authorEmail}{" "}
                </p>
              </div>
              <div className="col-lg-4 border-start">
                <p className="mb-0 text-muted">Book Info</p>
                <p className="m-0">
                  {" "}
                  Books Number : {item.authorData.booksnumber} <br />
                  Book Doc Types :{" "}
                  {item.authorData.bookDocType[0] +
                    " " +
                    item.authorData.bookDocType[1]}
                </p>
              </div>
              <div className="col-lg-4 border-start">
                <p className="mb-0 text-muted">Package Data</p>
                <p className="m-0">
                  Package Name : {item.package.name} <br />
                  Package Price: ${item.package.price}
                </p>
              </div>
            </div>
          </div>{" "}
        </div>
      ))}
    </>
  );
}
