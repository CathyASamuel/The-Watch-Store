import React from "react";
import "../styles/menu.css";


export const Menu = () =>{

    const menuItems = [
        {
            id: 1,
            title: "Watches",
            link: "/",
            
        },
    
        {
            id: 2,
            title: "Cart",
            link: "/cart",
        },
    ]
    
   


    return(
        <ul>
            {menuItems.map((submenu, mid) => (
            <li key = {mid}   className="title"><a href={submenu.link}>{submenu.title}</a></li>
            ))}
        </ul>
    
    )
}


export default Menu;