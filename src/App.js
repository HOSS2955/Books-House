import { Route, Routes } from "react-router-dom";

import "./App.css";
import Cart from "./components/ui/Cart";
import MyNav from "./components/MyNav";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import BookDetails from "./pages/BookShop/BookDetails";
import Home from "./pages/Home";
import BooksShop from "./pages/BookShop";

function App() {
  return (
    <div>
      <MyNav />
      <ToastContainer />
      <Routes>
        <Route path="/books" element={<BooksShop />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/bookdetails/:id" element={<BookDetails />} />
      </Routes>
      {/* <Counter /> */}
    </div>
  );
}

export default App;
