import { Route, Routes } from "react-router-dom";

import "./App.css";
import Cart from "./components/ui/Cart";
// import MyNav from "./components/MyNav";
import Header from "./components/ui/Header";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import BooksShop from "./pages/BookShop/index";
import Footer from "./components/ui/Footer";
import About from "./pages/About";
import AuthorsHouse from "./pages/AuthorsHouse";
import BookDetails from "./pages/BookDetails";
import WishlistSideBar from "./pages/WishlistSideBar";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

function App() {
   const [showWishlist, setShowWishlist] = useState(false);
   const hideModal = () => {
      setShowWishlist(false);
   };
   const showModal = () => {
      setShowWishlist(true);
   };
   return (
      <>
         {/* <MyNav /> */}
         <Header showModal={showModal} />
         {showWishlist && (
            <WishlistSideBar hideModal={hideModal} showModal={showModal} />
         )}
         <AnimatePresence
            exitBeforeEnter
            onExitComplete={() => setShowWishlist(false)}
         >
            <ToastContainer />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/sidebar" element={<WishlistSideBar />} />
               <Route path="/home" element={<Home />} />
               <Route path="/cart" element={<Cart />} />
               <Route path="/book/:id" element={<BookDetails />} />
               <Route path="/about" element={<About />} />
               <Route path="/booksshop" element={<BooksShop />} />
               <Route path="/authorshouse" element={<AuthorsHouse />} />
            </Routes>
            <Footer />
         </AnimatePresence>
      </>
   );
}

export default App;
