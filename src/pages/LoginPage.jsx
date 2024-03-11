import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../services/AuthContext";

const RegistrationPage = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      setSuccessMessage("Login successful!");
      navigate("/");
    } catch (error) {
      setErrorMessage("Login failed. Please check your credentials.");
    }
  };

  // Define the extra button
  const extraButton = (
    <button className="bg-green-500 text-white font-bold py-2 px-4 rounded mr-4 transition duration-300 hover:bg-green-600">
      Extra Button
    </button>
  );

  return (
    <>
      <div className="relative flex" style={{ height: "calc(100vh - 78px)" }}>
        <div className="pt-16 w-2/3 flex">
          <div className="absolute inset-0 h-full w-2/3">
            <img
              className="w-full h-full object-cover blur-xl"
              src="./bg.jpg"
              alt="Background"
            />
          </div>
          <div className="relative z-10 p-24 bg-opacity-70 w-full">
            <div className="">
              <h1 className="text-4xl font-bold text-gray-700 mb-6">
                Welcome to Art.Mart!
              </h1>
              <p className="text-gray-600 font-medium mb-8">
                Art.Mart is focused on enabling artists to achieve their goals.
              </p>
              <p className="pr-36">
                Artist Shops provides the best and easiest platform for you to
                sell your art in your own customized online store for free. Your
                art deserves a trusted partner who cares.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-2/6">
          {errorMessage && (
            <h1 className="text-red-500 font-semibold">{errorMessage}</h1>
          )}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center space-y-4 w-full p-6"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded-lg py-2 px-4 w-full max-w-xs"
              placeholder="Enter your email"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 rounded-lg py-2 px-4 w-full max-w-xs"
            />
            <button className="bg-blue-500 text-white rounded-lg py-2 px-6 transition duration-300 hover:bg-blue-600">
              Submit
            </button>

            <button
              className="text-gray-700"
              onClick={() => navigate("/register")}
            >
              Register a new account <span className="underline">Register</span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegistrationPage;
