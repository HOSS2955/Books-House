import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../store/reducers/bookSlice";
import BookCard from "./BookCard";

export default function BookList() {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.books);
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const BooksList = books.map((book) => <BookCard key={book.id} book={book} />);
  return (
    <div>
      <h1 className="text-center my-5">Book List</h1>
      <div className="row ms-2">{BooksList}</div>
      
      
    </div>
  );
}
