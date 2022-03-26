import "../styles/modal.css";
import {useCart} from "../Provider/Provider"
import { useEffect } from "react";  

export const Modal= (props) => {

    const {cart} = useCart();

    console.log(props.show)

 
    useEffect(()=> {
//        window.localStorage.getItem.removeItem('cart')
        /*if (cart.length){
            window.localStorage.setItem('cart', JSON.stringify(cart));
            const cartItem = window.localStorage.getItem('cart');
        }*/
    }, [cart]); 
 


if (!props.show){
    return null;
}


    return(
        
        <div className="modal">
            <div className="modal-content">
                <div className="m.odal-header">
                    <h4 className = "modal-title">
                        CLEARED...
                    </h4>
                   
                </div>
                <div className="modal-body">
                    Ooops! Your cart is now empty!                   
                </div>
                <div className = "modal-footer">
                    <button onClick = {props.onClose} className = "button">
                        close
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Modal;