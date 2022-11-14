import { Route, Routes } from "react-router-dom";

import "./App.css";
import Cart from "./components/ui/Cart";
// import MyNav from "./components/MyNav";
import NavBar from "./components/ui/NavBar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import BookDetails from "./pages/BookShop/BookDetails";
import Home from "./pages/Home";
import BooksShop from "./pages/BookShop/index";
import Footer from "./components/ui/Footer";
import About from "./pages/About";

function App() {
   return (
      <div>
         {/* <MyNav /> */}
         <NavBar/>
         <ToastContainer />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
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
