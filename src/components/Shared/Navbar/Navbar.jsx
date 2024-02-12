import React from "react";
import Container from "../Container/Container";
import Logo from "./Logo";
import Search from "./Search";
import MenuDropDown from "./MenuDropDown";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-x-0.5">
            <div>
              <Logo></Logo>
            </div>
            <div>
              <Search></Search>
            </div>
            <div>
              <MenuDropDown></MenuDropDown>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
