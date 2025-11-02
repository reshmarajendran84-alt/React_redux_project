import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        gap: "1rem",
        marginBottom: "20px",
        background: "#f0f0f0",
        padding: "10px",
      }}
    >
      <Link to="/">🏠 Dashboard</Link>
      <Link to="/add">➕ Add User</Link>
      <Link to="/users">📋 User List</Link>
    </nav>
  );
}
