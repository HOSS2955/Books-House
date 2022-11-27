import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { bookReviewActions } from "../store/client/reducers/bookReviewSlice";
const { getDataBookReview, setFilteredBookReview } = bookReviewActions;

export const bookReviewApiSlice = createApi({
   baseQuery: fetchBaseQuery({ baseUrl: "/bookreview/" }),
   reducerPath: "reviewsApiSlice",
   tagTypes: [{ title: "REVIEWS", id: "REVIEWS_LIST" }],

   endpoints: (builder) => ({
      getBookReviews: builder.query({
         query() {
            return {
               url: "getall",
               credentials: "include",
            };
         },
         transformResponse: (result) => result,
         async onQueryStarted({ dispatch, queryFulfilled }) {
            try {
               const { data } = await queryFulfilled;
               dispatch(getDataBookReview(data));
            } catch (error) {
               console.log(error);
            }
         },
      }),

      deleteBookReview: builder.mutation({
         query(bookReview) {
            const { _id } = bookReview;
            return {
               url: `remove/${_id}`,
               method: "DELETE",
               body: _id,
               credentials: "include",
            };
         },
         async onQueryStarted(bookReview, { dispatch, getState }) {
            try {
               const state = getState();
               const filterArr = state.bookReviews.bookReviews.filter(
                  (ele) => ele._id !== bookReview._id
               );
               dispatch(setFilteredBookReview(filterArr));
            } catch (error) {
               console.log(error);
            }
         },
      }),
      // add in proxy after edit route in backend
      addBookReview: builder.mutation({
         query(comingData) {
            return {
               url: "newbookreview",
               method: "POST",
               body: comingData,
               credentials: "include",
            };
         },
      }),

      updateBookReview: builder.mutation({
         query({ id, formValue }) {
            return {
               url: `updateBookReview/${id}`,
               method: "PUT",
               body: formValue,
               credentials: "include",
            };
         },
      }),
   }),
});

export const {
   useGetBookReviewsQuery,
   useAddBookReviewMutation,
   useDeleteBookReviewMutation,
   useUpdateBookReviewMutation,
} = bookReviewApiSlice;
