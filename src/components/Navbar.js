import {BsCart } from 'react-icons/bs';
import {GiHamburgerMenu} from "react-icons/gi"
import "../styles/navbar.css";
import { useNavigate } from 'react-router-dom';
import Menu from "../widgets/Menu"




export const Navbar =({counter}) => {

    const navigate = useNavigate();
    return (
    <div className="navbar">
    <div className = "menu-style"><GiHamburgerMenu onClick={() => {callMenu()}}/></div>
    <div className="navtext"><h1>WATCHES FOR SALE</h1></div>
    
    <div className="cart"><BsCart/></div>
    <div className="cartcounter">{counter}</div>
    <button className="seeCartButton" onClick={() => navigate("/cart")}>See Cart</button>
</div>
)
}

const callMenu = () => {
    <Menu/>
    
}

export default Navbar;