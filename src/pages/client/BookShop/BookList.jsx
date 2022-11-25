import { TextField } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect } from "react";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import ItemCard from "../../../components/client/ItemCard/ItemCard";
import NoProducts from "../../../components/client/ui/NoProducts/NoProducts";
import Pagination from "../../../components/client/ui/Pagination/Pagination";
import { getBooks, getBook } from "../../../store/client/reducers/bookSlice";

export default function BookList() {
   const dispatch = useDispatch();
   const {
      books,
      bookStoreCategory,
      maxPriceFilter,
      minPriceFilter,
      bookStoreType,
   } = useSelector((state) => state.books);

   useEffect(() => {
      dispatch(getBooks());
   }, [dispatch]);

   const [search, setSearch] = useState("");
   const [isNoProducts, setIsNoProducts] = useState(false);
   const [currentPage, setCurrentPage] = useState(1);
   const [itemsPerPage, setItemsPerPage] = useState(9);

   const lastItemIndex = currentPage * itemsPerPage;
   const firstItemIndex = lastItemIndex - itemsPerPage;
   const currentItems = books.slice(firstItemIndex, lastItemIndex);

   return (
      <div>
         {/* SEARCH BAR */}
         <div className="ms-3 mb-3 d-flex">
            <div className="pt-3 me-1">
               <IoSearchOutline />
            </div>
            <div>
               <TextField
                  id="standard-basic"
                  onChange={(e) => setSearch(e.target.value)}
                  label="Search"
                  variant="standard"
               />
            </div>
         </div>
         {/* ITEMS OF LIST */}
         <div className="row ms-2">
            <AnimatePresence>
               {currentItems
                  .filter((item) => {
                     return search.toLowerCase() === ""
                        ? item
                        : item.title.toLowerCase().includes(search);
                  })
                  .filter((item) => {
                     return bookStoreCategory === "all"
                        ? item
                        : item.category === bookStoreCategory;
                  })
                  .filter((item) => {
                     return bookStoreType === "all"
                        ? item
                        : item.type === bookStoreType;
                  })
                  .filter((item) => {
                     return (
                        maxPriceFilter >= Number(item.price) &&
                        Number(item.price) >= minPriceFilter
                     );
                  })
                  .map((book, index) => {
                     return (
                        <motion.div
                           layout
                           key={index}
                           className=" col-md-6 col-lg-4 mb-3"
                        >
                           <ItemCard book={book} />
                        </motion.div>
                     );
                  })}
            </AnimatePresence>
            <div>
               {bookStoreCategory === "all" && bookStoreType === "all" ? (
                  <Pagination
                     totalItems={books.length}
                     itemsPerPage={itemsPerPage}
                     setCurrentPage={setCurrentPage}
                     currentPage={currentPage}
                  />
               ) : (
                  false
               )}
            </div>
         </div>
      </div>
   );
}
