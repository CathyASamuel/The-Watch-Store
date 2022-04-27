import "../styles/modal.css";
import {useCart} from "../Provider/Provider"
import { useEffect } from "react";
 

export const Modal= ({onClose, show}) => {

    const {cart, setCart} = useCart();
    
    useEffect(()=>{
        if(show){
            setCart([]);
            window.localStorage.removeItem('cart');
        }
        else{
            return null;
        }
    }, [show])

    return(
        
        <div style={{display: !show && 'none'}} className="modal" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()} >
                <div className="modal-header">
                    <h4 className = "modal-title">
                        CLEARED...
                    </h4>
                
                </div>
                <div className="modal-body">
                    Ooops! Your cart is now empty!                   
                </div>
                <div className = "modal-footer">
                    <button  onClick={onClose} className = "button">
                        close
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Modal;