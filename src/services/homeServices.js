import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { homepageActions } from "../store/reducers/homepageSlice";
// import { useDispatch } from "react-redux";

export const FetchHome = () => {
  // const dispatch = useDispatch();
  const [myData, setMyData] = useState([""]);
  const baseUrl = " http://localhost:3005/sliders";
  // const dispatch = useDispatch();

  const { setDataInLocalState } = homepageActions;
  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.get(baseUrl).then((response) => {
          setMyData(response.data);
          console.log(response.data);
        });
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {myData.map((item, index) => (
        <span key={index}>{item.title}</span>
      ))}
    </div>
  );
};
// .get(baseUrl)
// (response) => {
//   const data = response.json;
//   // dispatch(setDataInLocalState(data));
//   console.log("slider Data ", data);
// })

// .catch((error) => console.log(error.message));
