import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null); // null = logged out

  const login = (userData) => {
    setUser(userData);               // store user info
    navigate("/account/profile");    // redirect to profile page
  };

  const logout = () => {
    setUser(null);                   // clear user info
    navigate("/");                   // redirect home
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
