import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const { login } = useAuth();

  const handleLogin = () => {
    login({ name: "John Doe", email: "john@example.com" });
  };

  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login as John Doe</button>
    </div>
  );
}
