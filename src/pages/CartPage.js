import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { cart, increaseQty, decreaseQty, getTotal } = useCart();

  return (
    <section className="cart">
      <h3>Your Cart</h3>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div className="cart-card" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div>
                  <h4>{item.name}</h4>
                  <p>₹{item.price}</p>

                  <div className="cart-controls">
                    <button onClick={() => decreaseQty(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQty(item.id)}>+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="checkout-box">
            <h4>Total: ₹{getTotal()}</h4>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </>
      )}

      <Link to="/merch" className="back-link">
        ← Continue Shopping
      </Link>
    </section>
  );
}
