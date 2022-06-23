import { useEffect, useState } from "react";

export default function Navbar() {
  const hash = window.location.hash.split("#")
  const [path, setPath] = useState(hash[1] || null) ;
  

  useEffect(()=>{
    
  },[])
  return (
    <nav>
      <div className="logo">
        LaserClinic
      </div>
      <div className="links">
        <a href="#about" className={path === "about"? "active":""} onClick={()=>setPath("about")}>About</a>
        <a href="#services" className={path === "services"? "active":"" } onClick={()=>setPath("services")} >Services</a>
        <a href="#contact" className={path === "contact"? "active":""} onClick={()=>setPath("contact")}>Contact</a>
      </div>
    </nav>
  );
}
