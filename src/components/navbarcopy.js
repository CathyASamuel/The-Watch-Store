import {BsCart } from 'react-icons/bs';
import {GiHamburgerMenu} from "react-icons/gi"
import "../styles/navbar.css";
import { useNavigate } from 'react-router-dom';
import Menu from "../widgets/Menu";
import { useState, useRef, useEffect } from 'react';



export const Navbar =({counter}) => {

  const navigate = useNavigate();

  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  

  const onClick = () => setIsActive(!isActive);

  
    
  useEffect(() => {
    const pageClickEvent = (e) => {
    // If the active element exists and is clicked outside of
    if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
      setIsActive(!isActive);
    }
      
       }
      if (isActive) {
        window.addEventListener('click', pageClickEvent);
      }
      return () => {
        window.removeEventListener('click', pageClickEvent);
      }
    }, [isActive]);

       
    
        
  
    return (
      <nav className="navbar">
        <div className = "menu-container">
        
        <GiHamburgerMenu onClick={onClick} className="menu-trigger"/>
        <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
          <Menu/>
        </nav>
        
        </div>
        <span>
        <div className="cart"><BsCart/></div>
        <div className="cartcounter">{counter}</div>
        <button className="seeCartButton" onClick={() => navigate("/cart")}>See Cart</button>
        </span>
      
    </nav>
)
}



export default Navbar;