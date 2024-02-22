import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/Dashboard/SideBar/SideBar";

const DashBoardLayout = () => {
  return (
    <div className="relative min-h-screen md:flex">
      <SideBar></SideBar>
      <div className="flex-1 md:ml-64">
        <div className="p-5">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
