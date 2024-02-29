import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-100 text-black w-full px-7 py-4 flex items-center justify-between">
      <img className="w-28" src="/logo.png" alt="" />
      <div className="flex items-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
          Shop
        </button>
        <img className="w-12" src="/profile.svg" alt="User Profile" />
      </div>
    </header>
  );
};

export default Header;
