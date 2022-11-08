import { Route, Routes } from "react-router-dom";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import AuthRoutes from "./routes/AuthRoutes";
import ComponentsRoutes from "./routes/ComponentsRoutes";
import Login from "./authPages/login/Login"
import PasswordPage from "./authPages/passwordPage/PasswordPage"
import BooksShop from "./components/BooksShop";
import Cart from "./components/Cart";
import BookDetails from "./components/BookDetails";
import Login from "./components/login/Login";
import PasswordPage from "./components/passwordPage/PasswordPage"


function App() {
   return (
      <>
         <Routes>
            <Route path="auth" element={<AuthRoutes />}>
               <Route path="login" element={<Login />} />
               <Route path="password" element={<PasswordPage />} />
            </Route>
            <Route path="components" element={<ComponentsRoutes />}>
               <Route path="booksShop" element={<BooksShop />} />
               <Route path="cart" element={<Cart />} />
               <Route path="bookdetails/:id" element={<BookDetails />} />
            </Route>
         </Routes>
      </>
   );
}

export default App;
