import React from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import MenuItems from "./MenuItems";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="bg-slate-200 ">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
          <span className="text-slate-500">Cozy</span>
          <span className="text-slate-700">Estate</span>
        </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-600" />
        </form>

        <MenuItems />
      </div>
    </header>
  );
};

export default Header;
