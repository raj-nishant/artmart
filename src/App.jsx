import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
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
import { AuthProvider, useAuth } from "./services/AuthContext";
import ManageProfile from "./pages/ManageProfile";
import ProductsData from "./pages/ProductsData";
import ProductDetails from "./pages/ProductDetails";

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
  const { isAuthenticated, authChecked } = useAuth();

  // Wait for the authentication check to complete before rendering the routes
  if (!authChecked) {
    return <div>Loading...</div>;
  }

  const auth = isAuthenticated();
  console.log(auth);
  const noHeaderSidebar =
    location.pathname !== "/register" && location.pathname !== "/login";

  return (
    <>
      <Header />
      <div className="flex w-full h-auto p-2">
        {noHeaderSidebar && <Sidebar />}
        <div className="px-7 w-full p-3">
          <Routes>
            <Route
              path="/"
              element={auth ? <HomePage /> : <Navigate to="/register" />}
            />
            <Route
              path="/register"
              element={auth ? <Navigate to="/" /> : <RegistrationPage />}
            />
            <Route
              path="/login"
              element={auth ? <Navigate to="/" /> : <LoginPage />}
            />
            <Route
              path="/profile"
              element={auth ? <ManageProfile /> : <Navigate to="/register" />}
            />
            <Route
              path="/about-page"
              element={auth ? <AboutPage /> : <Navigate to="/register" />}
            />
            <Route
              path="/contact-us"
              element={auth ? <ContactUs /> : <Navigate to="/register" />}
            />
            <Route
              path="/add-product"
              element={auth ? <AddProduct /> : <Navigate to="/register" />}
            />
            <Route
              path="/products/:id"
              element={auth ? <ProductDetails /> : <Navigate to="/register" />}
            />
            <Route
              path="/products"
              element={auth ? <ProductsData /> : <Navigate to="/register" />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
