import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <header
        id="header"
        className="header d-flex align-items-center fixed-top"
      >
        <Navbar />
      </header>

      <main className="main">
        <Outlet />
      </main>

      <Footer />

      {/* Scroll Top */}
      <a
        href="#"
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
};

export default Layout;
