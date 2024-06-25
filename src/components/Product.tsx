import { useDispatch } from "react-redux";
import { addToCart, CartData } from "../store/CartSlice";
import { useCartDispatch } from "../store/hooks";

type ProductProps = {
  id: string;
  image: string;
  title: string;
  price: number;
  description: string;
};

export default function Product({
  image,
  id,
  title,
  price,
  description,
}: ProductProps) {
  function handleAddToCart() {
    const dispatch = useCartDispatch();

    const data: CartData = {
      id,
      title,
      price,
    };

    dispatch(addToCart(data));
  }

  return (
    <article className="product">
      <img src={image} alt={title} />
      <div className="product-content">
        <div>
          <h3>{title}</h3>
          <p className="product-price">${price}</p>
          <p>{description}</p>
        </div>
        <p className="product-actions">
          <button onClick={handleAddToCart}>Add to Cart</button>
        </p>
      </div>
    </article>
  );
}
