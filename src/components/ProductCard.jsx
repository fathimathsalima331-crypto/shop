import "./ProductCard.css";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

export default function ProductCard({ id, title, price, image, dark }) {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isWishlisted } = useWishlist();

  const product = { id, title, price, image };
  const wishlisted = isWishlisted(id);

  const handleWishlist = () => {
    if (wishlisted) {
      removeFromWishlist(id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className={`product-card ${dark ? "dark" : ""}`}>
      {/* IMAGE WRAPPER */}
      <div className="product-image-wrapper">
        <img src={image} alt={title} className="product-image" />

        {/* WISHLIST BUTTON */}
        <button
          className="wishlist-btn"
          onClick={handleWishlist}
          aria-label="Add to wishlist"
        >
          {wishlisted ? "♥" : "♡"}
        </button>

        {/* ADD TO BAG */}
        <button
          className="add-to-bag"
          onClick={() => addToCart(product)}
        >
          Add to Bag
        </button>
      </div>

      {/* PRODUCT INFO */}
      <div className="product-info">
        <h3>{title}</h3>
        <p>₹{price}</p>
      </div>
    </div>
  );
}
