import { useWishlist } from "../context/WishlistContext";

export default function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <section style={{ padding: "80px 60px", maxWidth: "1100px", margin: "auto" }}>
      <h1 style={{ marginBottom: "40px" }}>Wishlist</h1>

      {wishlist.length === 0 ? (
        <p style={{ color: "#777" }}>Your wishlist is empty.</p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {wishlist.map(item => (
            <div
              key={item.id}
              style={{
                display: "flex",
                gap: "24px",
                alignItems: "center",
                borderBottom: "1px solid #eee",
                paddingBottom: "20px"
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{ width: "120px", borderRadius: "10px" }}
              />

              <div>
                <h3>{item.title}</h3>
                <p>₹{item.price}</p>
              </div>

              <button
                onClick={() => removeFromWishlist(item.id)}
                style={{
                  marginLeft: "auto",
                  background: "none",
                  border: "1px solid #111",
                  padding: "6px 16px",
                  cursor: "pointer"
                }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
