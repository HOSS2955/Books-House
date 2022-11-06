import { Route, Routes } from "react-router-dom";

import "./App.css";
import BooksShop from "./components/BooksShop";
import Cart from "./components/Cart";
import MyNav from "./components/MyNav";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import BookDetails from "./components/BookDetails";
import Login from "./components/login/Login";
import PasswordPage from "./components/passwordPage/PasswordPage"

function App() {
   return (
      <div>
         <MyNav />
         <ToastContainer />
         <Routes>
            <Route path="/" element={<BooksShop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/bookdetails/:id" element={<BookDetails />} />
            <Route path="login" element={<Login/>}/>
      <Route path="PasswordPage" element={<PasswordPage/>}/>
         </Routes>
         {/* <Counter /> */}
      </div>
   );
}

export default App;
