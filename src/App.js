import { Route, Routes } from "react-router-dom";

import "./App.css";
import Cart from "./components/ui/Cart";
// import MyNav from "./components/MyNav";
import Header from "./components/ui/Header";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import BookDetails from "./pages/BookShop/BookDetails";
import Home from "./pages/Home";
import BooksShop from "./pages/BookShop";
import Footer from "./components/ui/Footer";

function App() {
  return (
    <div>
      {/* <MyNav /> */}
      <Header/>
      <ToastContainer />
      <Routes>
        <Route path="/books" element={<BooksShop />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/bookdetails/:id" element={<BookDetails />} />
      </Routes>
      {/* <Counter /> */}
      <Footer/>
    </div>
  );
}

export default App;
