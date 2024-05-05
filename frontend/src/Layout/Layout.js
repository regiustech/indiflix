import React from "react";
import NavBar from "./Navbar/NavBar";
import Footer from "./Footer/Footer";
function Layout({ children }) {
  return (
    <>
      <div className="bg-main text-white px-8">
        <NavBar />
        {children}
        <Footer />
      </div>
    </>
  );
}

export default Layout;
