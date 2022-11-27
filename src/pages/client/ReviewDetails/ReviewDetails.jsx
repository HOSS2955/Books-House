import React, { useEffect, useState } from "react";
import ReviewContent from "./ReviewContent";
import ReviewHeader from "../../../components/client/ui/ReviewHeader/ReviewHeader";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { bookReviewApiSlice} from "../../../features/bookReviewApiSlice";
import { bookApiSlice } from "../../../features/bookApiSlice";
import { bookReviewActions } from "../../../store/client/reducers/bookReviewSlice";
import { gridColumnsTotalWidthSelector } from "@mui/x-data-grid";

export default function ReviewDetails() {
  const params = useParams();
  console.log(params.id)
  // const [getBookReviewById , { data:review, isError, isLoading , isSuccess}] = useGetBookReviewByIdQuery();
  const {data , isLoading , isFetching}= bookReviewApiSlice.endpoints.getBookReviewById.useQuery(params.id)

  const review= bookReviewApiSlice.endpoints.getBookReviewById.useQueryState(params.id , {selectFromResult:({data})=>data})
  if(!isLoading && !isFetching){
    console.log(data)
    console.log(review)
  }
  //  console.log(review)

   useEffect(()=>{
  // if(params.id){getBookReviewById(params.id); console.log("new rtk query")}
  if(review){
    console.log("review", review)
    }
 },[params])
// if(isSuccess){console.log("Rtk success",review )}
  // useEffect(() => {
  //   const data = items?.filter((item) => {
  //     return item?._id === params?.id;
  //   });
  //   setItems(data);
  // }, [dispatch]);
  // console.log(items[0]);

  return (
    <div className="mt-5 pt-4">
      {/* {isSuccess && <> */}
      <ReviewHeader data={review} className="mt-5 pt-5" />
      <ReviewContent data={review} />
      {/* </>} */}
    </div>
  );
}
