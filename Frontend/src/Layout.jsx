import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
function Layout() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
