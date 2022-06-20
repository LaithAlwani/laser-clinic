import React from "react";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="hero">
        <Hero />
      </div>
      <main className="main">{children}</main>
      <Footer />
    </>
  );
}
