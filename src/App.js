import { Route, Routes } from "react-router-dom";

import "./App.css";
import Cart from "./components/Cart/Cart";
// import MyNav from "./components/MyNav";
import Header from "./components/ui/Header";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import BookDetails from "./pages/BookShop/BookDetails";
import Home from "./pages/Home";
import BooksShop from "./pages/BookShop/index";
import Footer from "./components/ui/Footer";
import About from "./pages/About";
import Service from "./pages/Service/Service";
import Contactus from "./pages/Contactus/Contactus";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <div>
      {/* <MyNav /> */}
      <Header />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/bookdetails/:id" element={<BookDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/booksshop" element={<BooksShop />} />
      </Routes>
      {/* <Counter /> */}
      <Footer />
    </div>
  );
}

export default App;
