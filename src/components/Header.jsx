import React from "react";
import { Link } from "react-router-dom";

const Header = ({ showExtraButtons }) => {
  return (
    <header className="bg-gray-100 text-black w-full px-7 py-4 flex items-center justify-between">
      <img className="w-28" src="/logo.png" alt="" />
      <div className="flex items-center">
        {showExtraButtons && (
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4">
            Extra Button
          </button>
        )}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
          Shop
        </button>
        <Link to={"/register"}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
            Join us
          </button>
        </Link>

        <img className="w-12" src="/profile.svg" alt="User Profile" />
      </div>
    </header>
  );
};

export default Header;
