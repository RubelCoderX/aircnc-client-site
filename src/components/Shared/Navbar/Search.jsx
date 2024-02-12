import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";

const Search = () => {
  return (
    <div className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
      <div className="flex flex-row items-center justify-between">
        <div className="text-sm font-semibold px-6">Anywhere</div>
        <div className="hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center">
          Any week
        </div>
        <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-y-3">
          Add Guests
        </div>
        <div className="p-2 mr-2 bg-rose-500 rounded-full text-white">
          <BiSearchAlt2 size={18}></BiSearchAlt2>
        </div>
      </div>
    </div>
  );
};

export default Search;
