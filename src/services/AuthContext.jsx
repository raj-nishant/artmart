import React, { createContext, useContext, useState } from "react";

// Create a new context
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

// AuthProvider component to wrap your application
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userDetails, setUserDetails] = useState(null);

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
      // Handle errors
    }
  };
  // Function to handle login
  const login = async (email, password) => {
    try {
      // Call your authentication API endpoint
      const response = await fetch(
        "https://artist-shop-back-end.onrender.com/api/user/authenticate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: email,
            password: password,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to authenticate user");
      }

      // If authentication is successful, set user data
      const jwt = await response.json();
      localStorage.setItem("jwt", JSON.stringify(jwt));
      setUser(jwt);
      fetchUserDetails();
    } catch (error) {
      console.error("Error logging in:", error.message);
      // Handle login errors
      throw error;
    }
  };

  // Function to handle logout
  const logout = () => {
    localStorage.removeItem("jwt");
    setUser(null);
  };

  // Function to check if user is authenticated
  const isAuthenticated = () => {
    return !!user;
  };

  React.useEffect(() => {
    const storedUserData = localStorage.getItem("jwt");
    if (storedUserData) {
      setUser(JSON.parse(storedUserData));
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated: isAuthenticated(),
        userDetails,
        fetchUserDetails,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
