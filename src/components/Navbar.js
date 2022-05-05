import {BsCart } from 'react-icons/bs';
import {GiHamburgerMenu} from "react-icons/gi"
import "../styles/navbar.css";
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

export const Navbar =({counter}) => {

  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)



    const toggleNav = () => {
      setToggleMenu(!toggleMenu)
    }    
    
    useEffect(() => {
      const changeWidth = () => {
        setScreenWidth(window.innerWidth);
      }
      return () => {
        window.addEventListener('resize', changeWidth)
      }
    }, [screenWidth])    
  
    return (
      <nav className="navbar">
        {(toggleMenu || screenWidth > 600) && (
          <ul className = "menu-container">
            <li className="items" onClick={() => navigate("/")}>Home</li>
            <li className="items" onClick={() => navigate("/")}>Product</li>
            <li className="items" onClick={() => navigate("/cart")}>Cart</li>
            <li className="items" onClick={() => navigate("/cart")}><BsCart/></li>
            <li className="items" style={{border: "0.1rem solid lightblue", width:"100px", height:"40px",margin_right:"40rem"}} onClick={() => navigate("/cart")}>{counter}</li>
          </ul>
        )}
      <button onClick={toggleNav}><GiHamburgerMenu className="menu-btn"/></button>     
    </nav>
)
};



export default Navbar;