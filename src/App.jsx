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

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent = () => {
  const location = useLocation();
  const isRegister =
    location.pathname !== "/register" && location.pathname !== "/login";

  return (
    <>
      {isRegister && <Header />}
      {isRegister && <Sidebar />}
      <div style={{ marginLeft: isRegister ? "364px" : "0" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about-page" element={<AboutPage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/add-product" element={<AddProduct />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
