import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import AboutPage from "./pages/AboutPage";
import ContactUs from "./pages/ContactUs";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import AddProduct from "./pages/AddProduct";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./services/AuthContext";
import ManageProfile from "./pages/ManageProfile";
import ProductsData from "./pages/ProductsData";
import { useAuth } from "./services/AuthContext";

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
  const location = useLocation();
  const noHeaderSidebar =
    location.pathname !== "/register" && location.pathname !== "/login";

  const noSidebar = location.pathname !== "/profile";

  const { isAuthenticated } = useAuth();

  return (
    <>
      <Header />
      <div className="flex w-full h-auto">
        {noHeaderSidebar && <Sidebar />}
        <div className="w-5/6 px-7">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profile" element={<ManageProfile />} />
            <Route path="/about-page" element={<AboutPage />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/products" element={<ProductsData />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
