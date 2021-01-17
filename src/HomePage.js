import React from "react";
import Hero from "./Hero";
import Article from "./Article";
import Footer from "./Footer";
import "bootstrap";
function HomePage() {
  return (
    <div className="app-page">
      <Hero />
      <Article />
      <Footer />
    </div>
  );
}
export default HomePage;
