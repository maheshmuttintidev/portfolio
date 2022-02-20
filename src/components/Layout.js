import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children, active }) {
  return (
    <div className="auto-adjust container">
      <Header active={active} />
      <article className="my-3 auto-adjust-margins reset-font-size">
        {children}
      </article>
      <Footer />
    </div>
  );
}
