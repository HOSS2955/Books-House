import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemCard from "../../components/ItemCard/ItemCard";
import { getBooks } from "../../store/reducers/bookSlice";

export default function BookList() {
   const dispatch = useDispatch();
   const { books } = useSelector((state) => state.books);
   useEffect(() => {
      dispatch(getBooks());
   }, [dispatch]);

   return (
      <div>
         <h2 className="text-center mb-5">Book List</h2>
         <div className="row ms-2">
            {books.map((book , index) => (
                <div className=" col-sm-12 col-md-4 mb-3">
               <ItemCard key={index} book={book} />
               </div>
            ))}
         </div>
      </div>
   );
}
