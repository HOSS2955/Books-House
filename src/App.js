import { Route, Routes } from "react-router-dom";

import "./App.css";
import Cart from "./components/client/Cart/Cart";
// import MyNav from "./components/client/MyNav";
import NavBar from "./components/client/ui/NavBar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Home from "./pages/client/Home";
import BooksShop from "./pages/client/BookShop/index";
import Service from "./pages/client/Service/Service";
import AuthorsHouse from "./pages/client/AuthorsHouse";
import BookDetails from "./pages/client/BookDetails";
import WishlistSideBar from "./pages/client/WishlistSideBar";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import MyProfile from "./pages/client/Profile/MyProfile";
import Footer from "./components/client/ui/Footer";

import Contactus from "./pages/client/Contactus/Contactus";
import About from "./pages/client/About";
import Register from "./pages/client/authPages/register/Register";
import ComponentsRoutes from "./routes/ComponentsRoutes";
import AuthRoutes from "./routes/AuthRoutes";
import VerifyPass from "./pages/client/authPages/passwordPage/VerifyPass";
import Login from "./pages/client/authPages/login/Login";
import Verification from "./pages/client/authPages/verification/Verification";
import { PrivateOutlet } from "./utils/privateRoutes";
import Reviews from "./pages/client/Review";

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
          <Route path="auth" element={<AuthRoutes />}>
            <Route path="verification" element={<Verification />} />
            <Route path="register" element={<Register />} />

            <Route path="login" element={<Login />} />
            <Route path="password" element={<VerifyPass />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/profile" element={<MyProfile />} />
          <Route path="/booksshop" element={<BooksShop />} />
          <Route path="/authorshouse" element={<AuthorsHouse />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
        {/* <Counter /> */}
        {/* <Footer /> */}
      </AnimatePresence>
    </div>
  );
}

export default App;
