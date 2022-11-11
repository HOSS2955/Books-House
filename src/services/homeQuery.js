import React, { useEffect } from "react";
import { useGetHomepageDataQuery } from "../features/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import { homepageActions } from "../store/reducers/homepageSlice";

export default function HomeQuery() {
  const { data, isError, isLoading } = useGetHomepageDataQuery();
  const dispatch = useDispatch();
  const { setDataInLocalState } = homepageActions;
  const { sliderData } = useSelector((state) => state.homepage);
  useEffect(() => {
    if (data) {
      dispatch(setDataInLocalState(data));
    }
  }, [dispatch, data]);

  return (
    <div className="container">
      <div className="raw">
        {isError ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <>
            {sliderData.map((item, index) => (
              <p key={index}>{item.title}</p>
            ))}
          </>
        ) : null}
      </div>
    </div>
  );
}
