import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Women from "./pages/Women";
import Men from "./pages/Men";
import Kids from "./pages/Kids";
import Sale from "./pages/Sale";
import Bag from "./pages/Bag";
import Wishlist from "./pages/Wishlist";

import Login from "./pages/account/Login";
import Profile from "./pages/account/Profile";
import Orders from "./pages/account/Orders";

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/women" element={<Women />} />
              <Route path="/men" element={<Men />} />
              <Route path="/kids" element={<Kids />} />
              <Route path="/sale" element={<Sale />} />
              <Route path="/bag" element={<Bag />} />
              <Route path="/wishlist" element={<Wishlist />} />

              {/* Account */}
              <Route path="/account/login" element={<Login />} />
              <Route path="/account/profile" element={<Profile />} />
              <Route path="/account/orders" element={<Orders />} />
            </Routes>
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
