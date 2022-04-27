import "../styles/modal.css";
import {useCart} from "../Provider/Provider"
//import { useEffect } from "react";
 

export const Modal= ({show}) => {

    const {setCart} = useCart();
    
    /*useEffect(()=>{
        if(show){
            setCart([]);
            window.localStorage.removeItem('cart');
        }
        else{
            return null;
        }
    }, [show])*/


    const onClose = () => {
    if(show){ 
        setCart([]);
        window.localStorage.removeItem('cart'); 
        show=false
    }}

    const content = (show) && ( 
         
        <div className="modal" onClick={onClose}>
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
        return content;
}

export default Modal;