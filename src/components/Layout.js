import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Layout({children}) {
  return (
    <div className="auto-adjust">
        <Header />
          <article className="my-3 auto-adjust-margins reset-font-size">
            {children}
          </article>
        <Footer /> 
    </div>
  );
}
