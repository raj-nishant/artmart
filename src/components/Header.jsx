import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../services/AuthContext";
import { Avatar } from "@mui/material";

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

        {isAuthenticated && userDetails ? (
          <div
            className="relative"
            onMouseEnter={handleTooltipMouseEnter}
            onMouseLeave={handleTooltipMouseLeave}
          >
            <Avatar alt={userDetails.name} src={userDetails.profilePhotoUrl} />
            {showUserDetails && userDetails && (
              <div className="absolute flex flex-col items-center bg-white shadow-md rounded-md p-5 w-40 gap-2 right-0 top-full">
                <div>
                  Hi,
                  <span className="text-yellow-600">{userDetails.name}</span>
                </div>
                {/* <div>{userDetails.email}</div> */}

                <Link to={"/profile"}>
                  <button className="text-gray-700 p-2  underline hover:text-gray-900">
                    My Account
                  </button>
                </Link>

                <button
                  onClick={handleLogoutClick}
                  className="text-red-500 p-2 underline hover:text-red-700"
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
