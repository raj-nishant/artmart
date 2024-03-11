import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import AboutPage from "./pages/AboutPage";
import ContactUs from "./pages/ContactUs";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import AddProduct from "./pages/AddProduct";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import { AuthProvider, useAuth } from "./services/AuthContext";
import ManageProfile from "./pages/ManageProfile";
import ProductsData from "./pages/ProductsData";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
};

const AppContent = () => {
  const { isAuthenticated } = useAuth();
  const [isNavigated, setIsNavigated] = useState(!isAuthenticated);

  const isLoginOrRegisterRoute = (pathname) =>
    pathname === "/login" || pathname === "/register";

  return (
    <>
      <Header />
      <div className="flex w-full h-auto">
        {!isLoginOrRegisterRoute(window.location.pathname) && !isNavigated && (
          <Sidebar />
        )}
        <div className="w-5/6 px-7">
          <Routes>
            <Route
              path="/"
              element={
                isAuthenticated ? <Navigate to="/" /> : <Navigate to="/login" />
              }
            />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/profile"
              element={
                isAuthenticated ? <ManageProfile /> : <Navigate to="/" />
              }
            />
            <Route path="/about-page" element={<AboutPage />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route
              path="/add-product"
              element={isAuthenticated ? <AddProduct /> : <Navigate to="/" />}
            />
            <Route
              path="/products"
              element={isAuthenticated ? <ProductsData /> : <Navigate to="/" />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
