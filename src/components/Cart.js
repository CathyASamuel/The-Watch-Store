import React, { useRef } from "react";
import "../styles/cart.css";
import { useDetectOutsideClick } from "./useDetectOutsideClick";
import Modal from "../widgets/Modal";

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-a-dropdown-menu-component-with-react-hooks
 */
export default function Cart() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className="cart-container">
      <div className="cart-trigger">
          <button onClick={onClick} className="cart-trigger">
            <span>CLEAR CART </span>
          </button>
          <nav ref={dropdownRef} className={`cart ${isActive ? "active" : "inactive"}`}>
            <Modal/>
          </nav>
      </div>
    </div>
  );
}
