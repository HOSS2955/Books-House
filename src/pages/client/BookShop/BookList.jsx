import { TextField } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemCard from "../../../components/client/ItemCard/ItemCard";
import { getBooks } from "../../../store/client/reducers/bookSlice";

export default function BookList() {
   const [search, setSearch] = useState("");
   const dispatch = useDispatch();
   const { books } = useSelector((state) => state.books);
   useEffect(() => {
      dispatch(getBooks());
   }, [dispatch]);
   return (
      <div>
         {/* <h2 className="text-center mb-5">Book List</h2> */}
         <div className="ms-3 mb-3">
            <TextField
               id="standard-basic"
               onChange={(e) => setSearch(e.target.value)}
               label="Search"
               variant="standard"
            />
         </div>
         <div className="row ms-2">
            <AnimatePresence>
               {books
                  .filter((item) => {
                     return search.toLowerCase() === ""
                        ? item
                        : item.title.toLowerCase().includes(search);
                  })
                  .map((book, index) => (
                     <motion.div
                        layout
                        key={index}
                        className=" col-sm-12 col-md-4 mb-3"
                     >
                        <ItemCard key={index} book={book} />
                     </motion.div>
                  ))}
            </AnimatePresence>
         </div>
      </div>
   );
}
