import { useState } from "react";
export default function NavLinks() {
  const hash = window.location.hash.split("#");
  const [path, setPath] = useState(hash[1] || null);
  return (
    <>
      <a
        href="#about"
        className={path === "about" ? "active" : ""}
        onClick={() => setPath("about")}
      >
        About
      </a>
      <a
        href="#services"
        className={path === "services" ? "active" : ""}
        onClick={() => setPath("services")}
      >
        Services
      </a>
      <a
        href="#contact"
        className={path === "contact" ? "active" : ""}
        onClick={() => setPath("contact")}
      >
        Contact
      </a>
    </>
  );
}
