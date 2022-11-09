import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import AuthRoutes from "./routes/AuthRoutes";
import ComponentsRoutes from "./routes/ComponentsRoutes";
import Login from "./authPages/login/Login";
import PasswordPage from "./authPages/passwordPage/PasswordPage";
import BooksShop from "./components/BooksShop";
import Cart from "./components/Cart";
import BookDetails from "./components/BookDetails";
import ProtectedRoute from "./components/ProtectedRoute";
import { useNavigate } from "react-router-dom";
import Register from "./pages/Register/Register";
import HomeQuery from "./services/homeQuery";
function App() {
  // const navigate = useNavigate();
  // // const user ={
  // //    id: '1',
  // //    name: 'robin',
  // // }
  // // const user = null
  // const [userData, setUserData] = useState(null);
  // const handleLogin = () => {
  //   setUserData({
  //     id: "1",
  //     name: "robin",
  //   });
  //   console.log("logged in");
  //   navigate("/auth");
  // };
  // const handleLogout = () => {
  //   setUserData({});
  //   navigate("/login");
  // };
  return (
    <>
      {/* {userData ? <p>{userData.name}</p> : <p>Hello</p>} */}
      {/* {userData ? (
        <button onClick={handleLogout}>Sign Out</button>
      ) : (
        <button onClick={handleLogin}>Sign In</button>
      )} */}
      <Routes>
        {/* <Route path="register" element={<Register />} /> */}
        <Route path="query" element={<HomeQuery />} />

        <Route path="auth" element={<AuthRoutes />}>
          <Route path="login" element={<Login />} />
          <Route path="password" element={<PasswordPage />} />
        </Route>
        <Route
          path="components"
          element={
            <ProtectedRoute
              // userData={userData}
              //       user={{
              //          id: '1',
              // name: 'robin'
              //       }}
              redirectPath="/auth/password"
              // isAllowed={
              //   //   !!user && user.permissions.includes('analyze')
              // }
            >
              <ComponentsRoutes />
            </ProtectedRoute>
          }
        >
          <Route path="booksShop" element={<BooksShop />} />
          <Route path="cart" element={<Cart />} />
          <Route path="bookdetails/:id" element={<BookDetails />} />
        </Route>
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </>
  );
}

export default App;

// import React from "react";
// import { Route, Routes} from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

// import "./App.css";
// import "react-toastify/dist/ReactToastify.css";
// import AuthRoutes from "./routes/AuthRoutes";
// import ComponentsRoutes from "./routes/ComponentsRoutes";
// import Login from "./authPages/login/Login"
// import PasswordPage from "./authPages/passwordPage/PasswordPage"
// import BooksShop from "./components/BooksShop";
// import Cart from "./components/Cart";
// import BookDetails from "./components/BookDetails";
// import ProtectedRoute from "./components/ProtectedRoute";
// import {userActions} from "./store/reducers/userSlice"

// function App() {
//    const {user} = useSelector((state)=>state.user)
//    console.log(user)

//    const {login , logout} = userActions

//    const handleLogin = ()=>{
//        dispatch(login({id:'1' , name:'robin'}))
//    }
//    const handleLogout = ()=>{
//        dispatch(logout({}))
//    }
//    let dispatch = useDispatch()

//    return (
//       <>
//       {user ? (
//         <button onClick={handleLogout}>Sign Out</button>
//       ) : (
//         <button onClick={handleLogin}>Sign In</button>
//       )}
//          <Routes>
//             <Route path="auth" element={<AuthRoutes />}>
//                <Route path="login" element={<Login />} />
//                <Route path="password" element={<PasswordPage />} />
//             </Route>

//             <Route path="components" element={

//             <ProtectedRoute

//             redirectPath="/auth/password"
//             // isAllowed={
//             //   !!user && user.permissions.includes('analyze')
//             // }
// >
//                 <ComponentsRoutes/>
//                 </ProtectedRoute>}>

//                <Route path="booksShop" element={<BooksShop />} />
//                <Route path="cart" element={<Cart />} />
//                <Route path="bookdetails/:id" element={<BookDetails />} />
//             </Route>
//             <Route path="*" element={<p>There's nothing here: 404!</p>} />
//          </Routes>
//       </>
//    );
// }

// export default App;
