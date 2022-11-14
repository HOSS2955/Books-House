import { Route, Routes } from "react-router-dom";

import "./App.css";
import Cart from "./components/client/Cart/Cart";
// import MyNav from "./components/client/MyNav";
import NavBar from "./components/client/ui/NavBar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import BooksShop from "./pages/BookShop/index";
import Service from "./pages/Service/Service";
import Contactus from "./pages/Contactus/Contactus";
import AuthorsHouse from "./pages/AuthorsHouse";
import BookDetails from "./pages/BookDetails";
import WishlistSideBar from "./pages/WishlistSideBar";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import MyProfile from "./pages/Profile/MyProfile";
import Footer from "./components/client/ui/Footer";
import About from "./pages/About";

function App() {
   const [showWishlist, setShowWishlist] = useState(false);
   const hideModal = () => {
      setShowWishlist(false);
   };
   const showModal = () => {
      setShowWishlist(true);
   };
   return (
      <div>
         {/* <MyNav /> */}
         <NavBar showModal={showModal} />
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
               <Route path="/bookdetails/:id" element={<BookDetails />} />
               <Route path="/about" element={<About />} />
               <Route path="/service" element={<Service />} />
               <Route path="/contactus" element={<Contactus />} />
               <Route path="/profile" element={<MyProfile />} />
               <Route path="/booksshop" element={<BooksShop />} />
               <Route path="/authorshouse" element={<AuthorsHouse />} />
            </Routes>
            {/* <Counter /> */}
            <Footer />
         </AnimatePresence>
      </div>
   );
}

export default App;
