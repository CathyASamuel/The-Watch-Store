import React from 'react';
import {ProductList} from "./ProductList";
import pic from "../images/home.jpg";
import "../styles/home.css";




export const Home = () => {
    
    return (
    <div>
        <div><img className = "home-image" src={pic} alt='Shopping'/></div>
        <div><h1>WATCHES FOR SALE</h1></div>
        <div><h1>Shop Now!</h1></div>
        <hr/>
        <div><ProductList/></div>
    </div>
)
}