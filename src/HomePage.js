import React from "react";
import Hero from "./Hero";
import Footer from "./Footer";
import LogRocket from 'logrocket';

LogRocket.init('3hchfb/mahesh-muttinti-portfolio');

function HomePage() {
  return (
    <>
      <Hero />
      <Footer />
    </>
  );
}
export default HomePage;
