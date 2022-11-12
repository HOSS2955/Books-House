// import React, { useEffect } from "react";
// import "../assets/css/MyNav.css";
// import { Container, Nav, Navbar } from "react-bootstrap";
// import { NavLink, Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { getTotals } from "../store/reducers/cartSlice";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
// export default function MyNav() {
//   const { cartTotalQuantity } = useSelector((state) => state.cart);
//   const cart = useSelector((state) => state.cart);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getTotals());
//   }, [cart, dispatch]);
//   return (
//     <Navbar bg="light" expand="lg" className="sticky-top">
//       <Container>
//         <Navbar.Brand as={Link} to="home">
//           <FontAwesomeIcon icon={faCoffee} />
//           BooksHouse
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             <NavLink className="nav-link" to="/books">
//               Shop
//             </NavLink>
//             <NavLink to="cart" className="nav-link">
//               Shop Cart
//             </NavLink>
//             <NavLink to="cart" className="nav-link">
//               <i className="fa fs-5">&#xf07a;</i>
//               {cartTotalQuantity === 0 ? (
//                 false
//               ) : (
//                 <span className="badge " id="lblCartCount">
//                   {cartTotalQuantity}
//                 </span>
//               )}
//             </NavLink>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }
