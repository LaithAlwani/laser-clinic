import {FaInstagram} from "react-icons/fa";
import {FaFacebookSquare} from "react-icons/fa";
import {FaFacebookF} from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="social-links">
        <a href="https://www.facebook.com/AlwaniLaith" target="_blank" rel="noreferrer noopener">
          {<FaFacebookSquare />}
        </a>
        <a href="https://www.instagram.com/laitho15/?hl=en" target="_blank" rel="noreferrer noopener">
          {<FaInstagram />}
        </a>
      </div>
      <span>Health Haven Asthetics &copy; 2022</span>
    </footer>
  );
}
