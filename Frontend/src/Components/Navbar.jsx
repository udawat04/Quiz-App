import { Bell, Search, UserRound } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white h-20 shadow-sm flex items-center justify-between  px-4">
      <div className="max-w-sm w-full flex items-center bg-[#f5f5f5] rounded px-4 py-2 shadow">
        <input
          type="search"
          placeholder="Search here..."
          className="flex-grow  outline-none bg-[#f5f5f5] text-gray-700 placeholder-gray-400"
        />
        <Search className="text-gray-600 ml-2" />
      </div>

      <div className="md:flex gap-7 pr-10 items-center hidden ">
        <button className="cursor-pointer">
          <Bell size={28} color="gray" />
        </button>

        <button className="cursor-pointer">
          <UserRound size={28} color="gray" />
        </button>

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH87TKQrWcl19xly2VNs0CjBzy8eaKNM-ZpA&s"
          className="w-8 h-8 rounded-full cursor-pointer"
          alt=""
        />
      </div>
    </div>
  );
};

export default Navbar;
