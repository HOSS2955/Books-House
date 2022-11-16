import React, { useRef, useEffect ,useState } from "react";
import { useSelector , useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import "../../../assets/css/NavBar.css";

import { motion } from "framer-motion";
import { FiHeart } from "react-icons/fi";
import { BsBag } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { checkAuthActions } from "../../../store/client/reducers/checkAuth";
import Dropdown from 'react-bootstrap/Dropdown';

const nav__links = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "about",
    display: "About",
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
  // Check if the user is Authorized
  const {checkAuth} = useSelector((state) => state.checkAuth);
console.log("checkAuth : " , checkAuth)
  // change nav color when scrolling
  const [color , setColor] = useState(false)
  const changeColor = ()=>{
    if(window.scrollY>=700){
      setColor(true)
    }else{
      setColor(false)
    }
  }
  window.addEventListener("scroll" , changeColor)
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
      <header className= {color ? "header-bg header large__screen" : "header large__screen"}>
        <div className="container">
          <div className="row">
            <div className="nav__wrapper">
              <div className="logo">
                <img src="./images/hero_1.jpg" alt="logo" />
                <div>
                  <h1 className="mb-0">Books House</h1>
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
              {!checkAuth && 
              <Dropdown>
      <Dropdown.Toggle variant="warning" id="dropdown-basic">
      <BiUserCircle/>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Log-in</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Sign-up</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>}
               {checkAuth && <div className="nav__icons">
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
              </div>}
            </div>
            <div></div>
          </div>
        </div>
      </header>
      {/* Small screen */}
      <Navbar bg="light" expand="lg" className="small__screen">
        <Container fluid className="pb-3 pt-3">
          <div className="logo">
            <img src="./images/hero_1.jpg" alt="logo" />
            <div>
              <h1 className="mb-0">Books House</h1>
            </div>
          </div>
          <div className="w-50 d-flex align-items-baseline justify-content-end">
          <div className="nav__icons ">
                <span onClick={showModal} className="fav__icon me-3">
                  <FiHeart />
                  <span className="__badge">1</span>
                </span>
                <span className="cart__icon me-3">
                  <BsBag />
                  <span className="__badge">1</span>
                </span>
              </div>
          
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="end"
            className="w-50"
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
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
