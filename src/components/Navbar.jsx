import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Dashboard</Link>
      <Link to="/UserList">Users</Link>
      <Link to="/UserDetails">Details</Link>
    </nav>
  );
}
