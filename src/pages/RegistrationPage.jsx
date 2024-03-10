import Header from "../components/Header";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const RegistrationPage = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [insta, setInsta] = useState("");
  const [linkTree, setLinkTree] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [showBoxes, setShowBoxes] = useState(false); // Set initial value to false
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let redirectTimer;
    if (successMessage) {
      redirectTimer = setTimeout(() => {
        navigate("/");
      }, 2000);
    }
    return () => clearTimeout(redirectTimer);
  }, [successMessage, navigate]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("instagramUrl", insta);
    formData.append("linkTreeUrl", linkTree);
    formData.append("profilePhotoUrl", profilePicture);

    try {
      const response = await fetch(
        "https://artist-shop-back-end.onrender.com/api/user/register",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        if (response.status === 409) {
          throw new Error("Email is already in use");
        } else {
          throw new Error("Failed to register");
        }
      }

      setSuccessMessage("Registration successful, redirecting to login......");
      setErrorMessage("");
      return await response.json();
    } catch (error) {
      setErrorMessage(error.message);
      setSuccessMessage("");
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
      <Header extraButton={extraButton} />
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
        <div className="flex items-center justify-center w-2/6">
          <form className="flex flex-col items-center space-y-4 w-full p-6">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="border border-gray-300 rounded-lg py-2 px-4 w-full max-w-xs"
              placeholder="Enter your email to get started"
            />

            {!showBoxes && (
              <button
                className="bg-blue-500 text-white rounded-lg py-2 px-6 transition duration-300 hover:bg-blue-600"
                onClick={() => setShowBoxes(true)}
              >
                Join
              </button>
            )}

            {showBoxes && (
              <>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border border-gray-300 rounded-lg py-2 px-4 w-full max-w-xs"
                  placeholder="Enter your Name"
                />

                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border border-gray-300 rounded-lg py-2 px-4 w-full max-w-xs"
                />
                <input
                  type="text"
                  placeholder="enter your instagram url"
                  value={insta}
                  onChange={(e) => setInsta(e.target.value)}
                  className="border border-gray-300 rounded-lg py-2 px-4 w-full max-w-xs"
                />
                <input
                  type="text"
                  placeholder="enter your linkTree Url"
                  value={linkTree}
                  onChange={(e) => setLinkTree(e.target.value)}
                  className="border border-gray-300 rounded-lg py-2 px-4 w-full max-w-xs"
                />

                <input
                  type="file"
                  onChange={(e) => setProfilePicture(e.target.files[0])}
                  className="border border-gray-300 rounded-lg py-2 px-4 w-full max-w-xs"
                />
              </>
            )}

            {showBoxes && (
              <button
                onClick={handleFormSubmit}
                className="bg-blue-500 text-white rounded-lg py-2 px-6 transition duration-300 hover:bg-blue-600"
              >
                Submit
              </button>
            )}

            <button
              className="text-gray-700 "
              onClick={() => navigate("/login")}
            >
              Already a member? <span className="underline">Login</span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegistrationPage;
