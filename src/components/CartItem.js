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
    const [list, setList] = useState(cart);

    let total = 0;
    let subTotal = 0;

    const removeFromCart = (item) => {
        console.log(item, cart, list, );
        setList(list.filter((cart) => item !== cart.id))
        console.log(list.id, item)
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
            {list.map((watch,index)=> (
                    <div key = {index}>
                        <div className="columnStyle">
                            <div>
                                <img className = "column-image-style" src={watch.img} alt="watch"/>
                            </div>
                            <div>
                                <div className="float-left">{watch.title}</div>
                            </div>
                            <div>
                                <div className="float-left">{watch.price}</div>
                            </div>
                            <div>
                                <div className="float-left">{watch.qty}</div>
                            </div>
                            <div>
                                <div className="float-left"><FaTrashAlt className = "remove-button" onClick = {() => removeFromCart(watch.id)}/></div>
                            </div>
                            <div>
                                <div className="float-left">${subTotal=watch.price * watch.qty}</div>
                            </div>
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
                        <Modal show = {show}/>
                    </div>
                        <div><button className = "button-style" onClick = {() => navigate('/')}>RETURN</button></div>
                    
        </div>
    )}
}

const CartColumns= () => {
    return (
        <div className="columnStyle">
            <div>products</div>
            <div>name of product</div>
            <div>price</div>
            <div>quantity</div>
            <div>remove</div>
            <div>total</div>
        </div>
    )
}

