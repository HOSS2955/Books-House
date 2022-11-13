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
            <Route path="/book/:id" element={<BookDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/booksshop" element={<BooksShop />} />
            <Route path="/authorshouse" element={<AuthorsHouse />} />
         </Routes>
         {/* <Counter /> */}
         <Footer />
      </div>
   );
}

export default App;
