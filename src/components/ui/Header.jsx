import React , {useRef , useEffect} from 'react';
import { NavLink} from "react-router-dom"
import '../../assets/css/Header.css';
// import logo from '../../assets/images/eco-logo.png'

import {motion} from 'framer-motion';
import { FaHeart , FaShoppingBag} from 'react-icons/fa';

// import { Container , Row} from 'reactstrap';

const nav__links=[
  {
    path : "home",
    display:"Home"
  },
  {
    path : "service",
    display:"service"
  },
  {
    path : "about",
    display:"about"
  }
]
const Header = () => {

  const headerRef = useRef(null)

  const stickyHeaderFunc =()=>{
    window.addEventListener('scroll' , ()=>{
        headerRef.current.classList.add('sticky__header')
      }
    )
    }
  // }

  useEffect(()=>{
    stickyHeaderFunc()
    return()=>window.removeEventListener('scroll' , stickyHeaderFunc)
  })
  return (
    <header className="header" ref={headerRef}>
      <div className='container'>
        <div className = "row">
          <div className="nav__wrapper">
            <div className="logo">
              <img src="./images/hero_1.jpg" alt="logo"/>
              <div>
                <h1>Books House</h1>
              </div>
            </div>

              <div className="navigation">
                <ul className="menu">
                  {nav__links.map((item , index)=>(
                    <li className='nav__item' key={index}>
                      <NavLink to={item.path} className={(navClass)=>navClass.isActive? 'nav__active':''}>
                        {item.display}</NavLink>
                    </li>
                  ))}
                </ul>
              </div>
                <div className="nav__icons">

                  <span className="fav__icon">
                    <FaHeart/>
                  <span className="badge">1</span>
                  </span>
                  <span className ="cart__icon"><FaShoppingBag/>
                  <span className="badge">1</span>
                  </span>
                  <span>
                    <motion.img whileTap={{scale:1.2}} src="./images/user-icon.png" alt="user icon"/>
                    </span>
                </div>

                {/* <div className="mobile__menu">
                  <span><BiMenu/></span> */}
                {/* </div> */}
          </div>
        <div>
      </div>
      </div>
      </div>
    </header>
  )
}

export default Header