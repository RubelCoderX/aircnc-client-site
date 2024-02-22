import React from "react";
import Headings from "../Headings/Headings";

const Header = ({ roomData }) => {
  return (
    <>
      <Headings title={roomData.title} subtitle={roomData.location}></Headings>
      <div className="w-full md:h-[45vh] overflow-hidden rounded-xl">
        <img
          className="object-cover w-full"
          src={roomData.image}
          alt="header image"
        />
      </div>
    </>
  );
};

export default Header;
