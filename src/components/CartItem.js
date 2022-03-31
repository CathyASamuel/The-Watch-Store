import {useCart} from "../Provider/Provider.js"
import "../styles/cartitem.css"
import {FaTrashAlt} from "react-icons/fa"
import { useNavigate } from "react-router-dom";
import Modal from "../widgets/Modal.js";
import { useState } from "react";


export const CartItem = () => {
    const {cart} = useCart();
    
    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const [list, updateList] = useState(cart);

    let total = 0;
    let subTotal = 0;

    const removeFromCart = (e) => {
        const id = e.target.getAttribute("id");
         updateList(list.filter(cart => cart.id !== id));
       };


    if (cart.length === 0) {
        return(
        <span><h1>THIS CART IS EMPTY</h1>
        <button className = "button-style" onClick = {() => navigate('/')}>RETURN</button></span>
        )
    }
    else {
    return (
        <div>
        
            <div><CartColumns/></div>
            {cart.map((watch,index)=> (
                    <div key = {index}>
                        <div className="columnItemStyle">
                            <img className = "column-image-style" src={watch.img} alt="watch"/>
                            <p style = {{marginLeft:"10rem", width:"40em"}}>{watch.title}</p>
                            <p style = {{marginLeft:"1rem"}}>{watch.price}</p>
                            <p style = {{marginLeft:"1rem"}}>{watch.qty}</p>
                            <p style = {{marginLeft:"1rem"}}><FaTrashAlt className = "remove-button" onClick = {removeFromCart}/></p>
                            <p style = {{marginLeft:"1rem"}}>${subTotal=watch.price * watch.qty}</p>
                        </div>
                        <div className="showSubTotal"> </div>
                        <div className="hideTotal">{total=total + subTotal}</div>
                    <br/>
                    </div>
            ))}  
                    <br/>
                  <div className="showTotal"><h2>GRAND TOTAL: ${total}</h2> </div>
                    <div>
                        <button className = "button-style" onClick = {() => setShow(true)} >CLEAR CART</button>  
                        <Modal onClose = {() => setShow(false)} show = {show}/>
                    </div>
                        <div><button className = "button-style" onClick = {() => navigate('/')}>RETURN</button></div>
                    
        </div>
    )}
}

const CartColumns= () => {
    return (
        <div className="columnStyle">
            <h1><p>products</p></h1>
            <h1><p>name of product</p></h1>
            <h1><p>price</p></h1>
            <h1><p>quantity</p></h1>
            <h1><p>remove</p></h1>
            <h1><p>total</p></h1>
        </div>
    )
}

