import "../styles/modal.css";
import {useCart} from "../Provider/Provider"
 

export const Modal= (props) => {

    const {cart} = useCart();
    

    if (!props.show){
        return null;
    } 
        
    
        
        
    window.localStorage.setItem('cart', JSON.stringify(cart));
        
        
    window.localStorage.getItem("cart")
    
    window.localStorage.removeItem('cart')

    return(
      
        <div className="modal" onClick={props.onClose}>
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
                    <button  onClick={props.onClose} className = "button">
                        close
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Modal;