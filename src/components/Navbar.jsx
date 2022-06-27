import { useState } from "react";
import MenuButton from "./MenuButton";
import NavLinks from "./NavLinks";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleClick = () => {
    toggleMenu();
  };
  return (
    <nav>
      <div className="logo">LaserClinic</div>
      <div className="links">
        <NavLinks />
      </div>
      <div className="mobile-nav">
        <span onClick={toggleMenu}>
          <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
        </span>
        <div
          onClick={handleClick}
          className={isOpen ? "mobile-nav-links open-nav" : "mobile-nav-links"}
        >
          {<NavLinks />}
        </div>
      </div>
    </nav>
  );
}
