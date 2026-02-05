import "./Navbar.css";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

export default function Navbar() {
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const { user, logout } = useAuth();
  const [accountOpen, setAccountOpen] = useState(false);

  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  const toggleAccount = () => setAccountOpen(prev => !prev);

  return (
    <header className="navbar">
      <div className="nav-left">
        <Link to="/" className="logo">FARFETCH</Link>
      </div>

      <nav className="nav-center">
        <Link to="/women">Women</Link>
        <Link to="/men">Men</Link>
        <Link to="/kids">Kids</Link>
        <Link to="/sale">Sale</Link>
      </nav>

      <div className="nav-right">
        {/* ACCOUNT DROPDOWN */}
        <div
          className="account-dropdown"
          onMouseEnter={() => window.innerWidth > 768 && setAccountOpen(true)}
          onMouseLeave={() => window.innerWidth > 768 && setAccountOpen(false)}
        >
          <span className="account-link" onClick={toggleAccount}>
            {user ? `Hi, ${user.name} ▾` : "Account ▾"}
          </span>

          {accountOpen && (
            <div className="account-menu">
              {!user && <Link to="/account/login">Login</Link>}
              {user && <Link to="/account/profile">Profile</Link>}
              {user && <Link to="/account/orders">Orders</Link>}
              {user && (
                <button
                  onClick={logout}
                  className="logout-btn"
                  style={{
                    border: "none",
                    background: "none",
                    textAlign: "left",
                    padding: "10px 14px",
                    fontSize: "13px",
                    cursor: "pointer",
                    color: "#111"
                  }}
                >
                  Logout
                </button>
              )}
            </div>
          )}
        </div>

        {/* WISHLIST */}
        <Link to="/wishlist" className="wishlist-link">
          Wishlist
          {wishlist.length > 0 && (
            <span className="wishlist-count">{wishlist.length}</span>
          )}
        </Link>

        {/* BAG */}
        <Link to="/bag" className="bag-link">
          Bag
          {totalItems > 0 && (
            <span className="bag-count">{totalItems}</span>
          )}
        </Link>
      </div>
    </header>
  );
}
