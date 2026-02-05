import { useAuth } from "../../context/AuthContext";

export default function Orders() {
  const { user } = useAuth();

  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h1>Orders Page</h1>
      {user ? (
        <p>You have no orders yet.</p>
      ) : (
        <p>Please login to view your orders.</p>
      )}
    </div>
  );
}
