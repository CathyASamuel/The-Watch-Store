import React from "react";


export const Menu = () =>{

    const menuItems = [
        {
            id: 1,
            title: "List of Watches",
            link: "/",
            
        },
    
        {
            id: 2,
            title: "Watches in Cart",
            link: "/cart",
        },
    ]
    

    return(
        <div className="menu">
            {menuItems.map((submenu) => (
            <div className="title">{submenu.title}</div>
            ))}
        </div>
    
    )
}


export default Menu;