import {BsCart } from 'react-icons/bs';
import {GiHamburgerMenu} from "react-icons/gi"
import "../styles/navbar.css";
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect} from 'react';

export const Navbar =({counter}) => {
  
  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  
    const scrollToShop= () => {
        navigate("/");
        window.scrollTo({top:200, left:100, behavior:"smooth"});
        setToggleMenu(!toggleMenu);

  }
    const scrollToProduct = () =>{
        navigate("/");
        window.scrollTo(0, window.innerHeight);
        setToggleMenu(!toggleMenu);
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
      
      <div className="navbar">
        <div>
            <GiHamburgerMenu style={{width:"50px", height:"50px", textAlign:"right"}} classname="menu-btn" onClick={()=>setToggleMenu(!toggleMenu)}/> 
        </div>
        {(toggleMenu || screenWidth > 600) && (
          <ul className = "menu-container">
              <li className="items" onClick={scrollToShop} >Home</li>
              <li className="items" onClick={scrollToProduct}>Product</li>
              <li className="items" onClick={() => navigate("/cart")}>Cart</li>
              <li className="items" onClick={() => navigate("/cart")}><BsCart/></li>
              <li className="items" style={{border: "0.1rem solid lightblue", width:"80px", 
            height:"20px", margin_right:"40rem"}} onClick={() => navigate("/cart")}>{counter}</li>
          </ul>
        )}
        
    </div>
)
};



export default Navbar;
