import { useAuth } from "../../context/AuthContext";

export default function Profile() {
  const { user } = useAuth();

  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h1>Profile Page</h1>
      {user ? (
        <p>Welcome, {user.name}! Email: {user.email}</p>
      ) : (
        <p>Please login to view your profile.</p>
      )}
    </div>
  );
}
