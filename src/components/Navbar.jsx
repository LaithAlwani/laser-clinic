import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Link to="/">LaserClinic</Link>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/Contact">Contact Us</Link>
      </div>
    </nav>
  );
}
