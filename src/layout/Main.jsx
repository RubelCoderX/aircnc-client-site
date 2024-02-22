import React from "react";
import Navbar from "../components/Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="pb-20 pt-28">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
