import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useAuth } from "../services/AuthContext";

const ManageProfile = () => {
  const navigate = useNavigate();
  const { logout, isAuthenticated, fetchUserDetails, userDetails } = useAuth();

  useEffect(() => {
    if (isAuthenticated && !userDetails) {
      fetchUserDetails(); // Fetch user details only if authenticated and userDetails is not already fetched
    }
  }, [isAuthenticated]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const copyReferralLink = () => {
    const referralLink = `http://localhost:5173/register?referral=${userDetails.referral_code}`;
    navigator.clipboard.writeText(referralLink);
    alert("Referral link copied to clipboard!");
  };

  return (
    <div
      className="bg-gray-100 w-full flex justify-center items-center"
      style={{ height: "calc(100vh - 78px)" }}
    >
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Manage Your Profile
        </h1>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Your Details
          </h2>
          {userDetails && (
            <div className="border border-gray-300 rounded-md p-4">
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Name:</span> {userDetails.name}
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Email:</span>{" "}
                {userDetails.email}
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Instagram URL:</span>{" "}
                {userDetails.instagramUrl}
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">LinkTree URL:</span>{" "}
                {userDetails.linkTreeUrl}
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Referral Code:</span>{" "}
                {userDetails.referralCode}
              </p>
            </div>
          )}
        </div>

        <div className="mb-4">
          <button
            onClick={handleLogout}
            className="block w-full bg-red-600 text-white px-4 py-2 text-sm rounded-md hover:bg-red-700 focus:outline-none focus:bg-red-700"
          >
            Logout
          </button>
        </div>

        {userDetails && (
          <div>
            <button
              onClick={copyReferralLink}
              className="block w-full bg-blue-600 text-white px-4 py-2 text-sm rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
            >
              Copy Referral Link
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageProfile;
