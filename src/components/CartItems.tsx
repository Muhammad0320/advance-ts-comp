import { addToCart, CartData, removeFromCart } from "../store/CartSlice";
import { useCartDispatch, useCartSelector } from "../store/hooks";

export default function CartItems() {
  const cartItems = useCartSelector((state) => state.cart.cart);

  const dispatch = useCartDispatch();

  if (!cartItems.length) return <p>No items in cart!</p>;

  const handleRemoveFromCart = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleAddToCart = (item: CartData) => {
    dispatch(addToCart(item));
  };

  const formattedTotalPrice = useCartSelector((state) =>
    state.cart.cart.reduce((val, item) => val + item.price, 0)
  ).toFixed(2);

  return (
    <div id="cart">
      <ul id="cart-items">
        {cartItems.map((item) => {
          const formattedPrice = `$${item.price.toFixed(2)}`;

          return (
            <li key={item.id}>
              <div>
                <span>{item.title}</span>
                <span> ({formattedPrice})</span>
              </div>
              <div className="cart-item-actions">
                <button onClick={() => handleRemoveFromCart(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleAddToCart(item)}>+</button>
              </div>
            </li>
          );
        })}
      </ul>

      <p id="cart-total-price">
        Cart Total: <strong>$ {formattedTotalPrice}</strong>
      </p>
    </div>
  );
}
