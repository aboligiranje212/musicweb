import hoodie from "../assets/merch/hoodie.jpeg";
import cap from "../assets/merch/cap.jpeg";
import cropTop from "../assets/merch/crop-top.jpeg";
import sweatshirt from "../assets/merch/sweatshirt.jpeg";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function MerchPage() {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "NOIR WAVES Hoodie",
      price: 2499,
      image: hoodie,
    },
    {
      id: 2,
      name: "NOIR WAVES Cap",
      price: 799,
      image: cap,
    },
    {
      id: 3,
      name: "NOIR WAVES Crop Top",
      price: 1299,
      image: cropTop,
    },
    {
      id: 4,
      name: "NOIR WAVES Sweatshirt",
      price: 2199,
      image: sweatshirt,
    },
  ];

  const handleBuy = (product) => {
    addToCart(product);
    navigate("/cart");
  };

  return (
    <section className="merch">
      <h3>Official Merchandise</h3>

      <div className="merch-grid">
        {products.map((product) => (
          <div className="merch-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <span>₹{product.price}</span>

            <button className="merch-btn" onClick={() => handleBuy(product)}>
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
