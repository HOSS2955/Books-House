import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { bookReviewActions } from "../store/client/reducers/bookReviewSlice";
const {
  getDataBookReview,
  addNewBookReview,
  setFilteredBookReview,
  getReviewById,
} = bookReviewActions;

// const initialState = postsAdapter.getInitialState();

export const bookReviewApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "/bookreview/" }),
  reducerPath: "reviewsApiSlice",
  tagTypes: ["REVIEWS"],

  endpoints: (builder) => ({
    getBookReviews: builder.query({
      query: () => "getall",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ _id }) => ({ type: "REVIEWS", id: _id })),
              { type: "REVIEWS", id: "REVIEWS_LIST" },
            ]
          : [{ type: "REVIEWS", id: "REVIEWS_LIST" }],

      async onQueryStarted(args, { dispatch, queryFulfilled, getCacheEntry }) {
        if (getCacheEntry().status === "fullfiled") {
          const cacheeee = getCacheEntry();
          console.log(cacheeee);
        }
      },
    }),

    getBookReviewById: builder.query({
      query: (id) => `${id}`,
      providesTags: (result, error, id) => [{ type: "REVIEWS", id: id }],
    }),

    deleteBookReview: builder.mutation({
      query(bookReview) {
        const { _id } = bookReview;
        console.log("ID INSIDE API ,", _id);
        return {
          url: `remove/${_id}`,
          method: "DELETE",
          // body: _id,
          // credentials: "include",
        };
      },
      invalidatesTags: (result, error, args) => [
        { type: "REVIEWS", id: args?._id },
      ],
    }),

    addBookReview: builder.mutation({
      query: (comingData) => ({
        url: "newbookreview",
        method: "POST",
        body: comingData,
        credentials: "include",
      }),
      invalidatesTags: [{ type: "REVIEWS", id: "REVIEWS_LIST" }],
    }),

    updateBookReview: builder.mutation({
      query: ({ id, formValue }) => ({
        url: `updateBookReview/${id}`,
        method: "PUT",
        body: formValue,
        credentials: "include",
      }),
      async onQueryStarted({ id, formValue }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          bookReviewApiSlice.util.updateQueryData(
            "getBookReviewById",
            id,
            (draft) => {
              Object.assign(draft, formValue);
            }
          )
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
      invalidatesTags: (result, error, { id }) => [{ type: "REVIEWS", id }],
    }),
  }),
});

export const {
  useGetBookReviewsQuery,
  useAddBookReviewMutation,
  useDeleteBookReviewMutation,
  useUpdateBookReviewMutation,
  useGetBookReviewByIdQuery,
} = bookReviewApiSlice;
