import { useState } from 'react';

import Cart from './Cart.tsx';
import { useCartSelector } from "../store/hooks.ts";
import { useSelector } from "react-redux";

export default function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  function handleOpenCartClick() {
    setCartIsVisible(true);
  }

  function handleCloseCartClick() {
    setCartIsVisible(false);
  }

  // const cartQuantity = useCartSelector(state => state.)

  const cartQuantity = useCartSelector((state) =>
    state.cart.cart.reduce((val, item) => val + item.quantity, 0)
  );

  return (
    <>
      {cartIsVisible && <Cart onClose={handleCloseCartClick} />}
      <header id="main-header">
        <div id="main-title">
          <img src="logo.png" alt="Elegant model" />
          <h1>Elegant Redux</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart ( {cartQuantity} )</button>
        </p>
      </header>
    </>
  );
}
