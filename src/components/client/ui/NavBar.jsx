import React, { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../../../assets/css/NavBar.css";
// import logo from '../../assets/images/eco-logo.png'

import { motion } from "framer-motion";
import { FiHeart } from "react-icons/fi";
import { BsBag } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

// import { Container , Row} from 'reactstrap';

const nav__links = [
   {
      path: "home",
      display: "Home",
   },
   {
      path: "service",
      display: "service",
   },
   {
      path: "about",
      display: "about",
   },
   {
      path: "booksshop",
      display: "Shop",
   },
   {
      path: "authorshouse",
      display: "Authors House",
   },
];
const NavBar = ({ showModal }) => {
   const headerRef = useRef(null);

   const stickyHeaderFunc = () => {
      window.addEventListener("scroll", () => {
         headerRef.current.classList.add("sticky__header");
      });
   };
   // }

   useEffect(() => {
      stickyHeaderFunc();
      return () => window.removeEventListener("scroll", stickyHeaderFunc);
   });
   return (
      <div ref={headerRef}>
         {/* Large screen */}
         <header className="header large__screen">
            <div className="container">
               <div className="row">
                  <div className="nav__wrapper">
                     <div className="logo">
                        <img src="./images/hero_1.jpg" alt="logo" />
                        <div>
                           <h1>Books House</h1>
                        </div>
                     </div>

                     <div className="navigation">
                        <ul className="menu">
                           {nav__links.map((item, index) => (
                              <li className="nav__item" key={index}>
                                 <NavLink
                                    to={item.path}
                                    className={(navClass) =>
                                       navClass.isActive ? "nav__active" : ""
                                    }
                                 >
                                    {item.display}
                                 </NavLink>
                              </li>
                           ))}
                        </ul>
                     </div>
                     <div className="nav__icons">
                        <span onClick={showModal} className="fav__icon">
                           <FiHeart />
                           <span className="__badge">1</span>
                        </span>
                        <span className="cart__icon">
                           <BsBag />
                           <span className="__badge">1</span>
                        </span>
                        <span>
                           <motion.img
                              whileTap={{ scale: 1.2 }}
                              src="./images/user-icon.png"
                              alt="user icon"
                           />
                        </span>
                     </div>
                  </div>
                  <div></div>
               </div>
            </div>
         </header>
         {/* Small screen */}
         <Navbar bg="light" expand="lg" className="mb-3 small__screen">
            <Container fluid>
               <div className="logo">
                  <img src="./images/hero_1.jpg" alt="logo" />
                  <div>
                     <h1>Books House</h1>
                  </div>
               </div>
               <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
               <Navbar.Offcanvas
                  id="offcanvasNavbar-expand-lg"
                  aria-labelledby="offcanvasNavbarLabel-expand-lg"
                  placement="end"
               >
                  <Offcanvas.Header closeButton>
                     <span>
                        <motion.img
                           whileTap={{ scale: 1.2 }}
                           src="./images/user-icon.png"
                           alt="user icon"
                        />
                     </span>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                     <div className="nav__icons">
                        <span className="fav__icon me-3 mt-4">
                           <FiHeart />
                           <span className="__badge">1</span>
                        </span>
                        <span className="cart__icon me-3 mt-4">
                           <BsBag />
                           <span className="__badge">1</span>
                        </span>
                     </div>
                     <Nav className="justify-content-end flex-grow-1 pe-3">
                        {nav__links.map((item, index) => (
                           <li className="nav__item mt-4" key={index}>
                              <NavLink
                                 to={item.path}
                                 className={(navClass) =>
                                    navClass.isActive ? "nav__active" : ""
                                 }
                              >
                                 {item.display}
                              </NavLink>
                           </li>
                        ))}
                     </Nav>
                  </Offcanvas.Body>
               </Navbar.Offcanvas>
            </Container>
         </Navbar>
      </div>
   );
};

export default NavBar;
