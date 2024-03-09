import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../services/AuthContext";

const Header = ({ extraButton }) => {
  const {
    user,
    login,
    logout,
    isAuthenticated,
    userDetails,
    fetchUserDetails,
  } = useAuth();

  const [showUserDetails, setShowUserDetails] = useState(false);

  useEffect(() => {
    if (isAuthenticated && !userDetails) {
      fetchUserDetails(); // Fetch user details only if authenticated and userDetails is not already fetched
    }
  }, [isAuthenticated]);

  const handleLogout = () => {
    logout();
  };

  const handleLogoutClick = () => {
    handleLogout();
    setShowUserDetails(false); // Close the tooltip after logout
  };

  const handleTooltipMouseEnter = () => {
    setShowUserDetails(true);
  };

  const handleTooltipMouseLeave = () => {
    setShowUserDetails(false);
  };

  return (
    <header className="bg-gray-100 text-black w-full px-7 py-4 flex items-center justify-between">
      <Link to={"/"}>
        <img className="w-28" src="/logo.png" alt="Logo" />
      </Link>
      <div className="flex items-center">
        {extraButton && <div>{extraButton}</div>}

        {isAuthenticated ? (
          <Link to={"/products"}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
              Shop
            </button>
          </Link>
        ) : (
          <Link to={"/login"}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
              Shop
            </button>
          </Link>
        )}

        {isAuthenticated ? (
          <div
            className="relative"
            onMouseEnter={handleTooltipMouseEnter}
            onMouseLeave={handleTooltipMouseLeave}
          >
            {console.log("jhfgjhgjhg")}
            <img
              className="w-12 cursor-pointer"
              src="/profile.svg"
              alt="User Profile"
            />
            {showUserDetails && userDetails && (
              <div className="absolute bg-gray-300 shadow-md rounded-md p-5 mt-3 right-0 top-full">
                <div>{userDetails.name}</div>
                <div>{userDetails.email}</div>
                <button
                  onClick={handleLogoutClick}
                  className="bg-red-500 p-2 rounded-md text-white hover:text-red-700"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link to={"/login"}>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
                Login
              </button>
            </Link>
            <Link to={"/register"}>
              <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-4">
                Join Us
              </button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
