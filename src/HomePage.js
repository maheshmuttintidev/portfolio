import React from "react";
import Header from "./Header";
import Article from "./Article";
import Footer from "./Footer";
import "bootstrap";
export default function HomePage() {
  return (
    <div className="app-page">
      <Header />
      <Article />
      <Footer />
    </div>
  );
}
