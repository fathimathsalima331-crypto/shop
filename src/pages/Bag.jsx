import { useCart } from "../context/CartContext";
import "./Bag.css";

export default function Bag() {
  const { cart, removeFromCart, addToCart, decreaseQty } = useCart();

  if (cart.length === 0) {
    return (
      <section className="bag">
        <h1>Shopping Bag</h1>
        <p className="empty">Your bag is currently empty.</p>
      </section>
    );
  }

  return (
    <section className="bag">
      <h1>Shopping Bag</h1>

      <div className="bag-list">
        {cart.map(item => (
          <div className="bag-item" key={item.id}>
            <img src={item.image} alt={item.title} />

            <div className="bag-info">
              <h3>{item.title}</h3>
              <p>₹{item.price}</p>

              <div className="qty-controls">
                <button onClick={() => decreaseQty(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => addToCart(item)}>+</button>
              </div>
            </div>

            <button
              className="remove-btn"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
