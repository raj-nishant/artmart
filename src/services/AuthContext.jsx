import React, { createContext, useContext, useState, useEffect } from "react";

// Create a new context
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

// AuthProvider component to wrap your application
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  // Added state to track if the authentication status check has been completed
  const [authChecked, setAuthChecked] = useState(false);

  // Function to fetch user details
  const fetchUserDetails = async () => {
    try {
      const jwtData = JSON.parse(localStorage.getItem("jwt"));
      const response = await fetch(
        "https://artist-shop-back-end.onrender.com/api/user/detail",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${jwtData.jwt}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch user details");
      }

      const userDetails = await response.json();
      setUserDetails(userDetails);
    } catch (error) {
      console.error("Error fetching user details:", error.message);
      // Optionally, handle errors such as clearing auth state or notifying the user
    }
  };

  // Function to handle login
  const login = async (email, password) => {
    try {
      const formData = new FormData();
      formData.append("username", email);
      formData.append("password", password);

      const response = await fetch(
        "https://artist-shop-back-end.onrender.com/api/user/authenticate",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        // Handle specific error cases
        if (response.status === 401) {
          throw new Error("Invalid email or password");
        } else {
          throw new Error("Failed to authenticate user");
        }
      }

      const jwt = await response.json();
      localStorage.setItem("jwt", JSON.stringify(jwt));
      setUser(jwt);
      fetchUserDetails();
    } catch (error) {
      console.error("Error logging in:", error.message);
      throw error; // Rethrowing the error for the calling component to handle
    }
  };

  // Function to handle logout
  const logout = () => {
    localStorage.removeItem("jwt");
    setUser(null);
    setUserDetails(null);
  };

  // Function to check if user is authenticated
  const isAuthenticated = () => !!user;

  useEffect(() => {
    const storedUserData = localStorage.getItem("jwt");
    if (storedUserData) {
      setUser(JSON.parse(storedUserData));
    }
    setAuthChecked(true); // Mark that the auth status check has been completed
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        userDetails,
        authChecked, // Providing authChecked state to context consumers
        login,
        logout,
        isAuthenticated,
        fetchUserDetails,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
