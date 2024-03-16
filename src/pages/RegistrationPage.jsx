import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
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
    <div style={{ height: "calc(100vh - 80px)" }}>
      <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-2 lg:gap-x-20 xl:gap-x-32 xl:grid-cols-2 p-3 h-3/4">
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Empowering Indie Artists in the Digital World
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Connect with a community of indie artists. Showcase your work. Build
            your brand.
          </p>
          <form className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <input
              className="max-w-[400px] w-full border p-3"
              placeholder="Enter your email"
              required
              type="email"
            />
            <button
              className="w-full sm:w-auto p-3 rounded-lg bg-black text-white"
              type="submit"
            >
              Join the Community
            </button>
          </form>
        </div>
        <div className="flex items-center justify-center space-y-6 ">
          <img
            alt="Artwork"
            className="rounded-xl object-cover border-2 border-gray-100 border-dashed"
            height="400"
            src="/art.jpeg"
            style={{
              aspectRatio: "600/400",
              objectFit: "cover",
            }}
            width="600"
          />
        </div>
      </div>

      <section className="max-w-7xl w-full mx-auto py-12 lg:py-16 mt-14 h-3/4">
        <div className="flex flex-col items-center space-y-6 lg:space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Join the Indie Art Community
            </h2>
            <p className="max-w-3xl text-gray-500 dark:text-gray-400">
              Whether you're a painter, musician, or digital artist, our
              platform provides the tools and support you need to thrive in the
              digital art world.
            </p>
          </div>
          <div className="grid max-w-sm gap-4 border rounded-xl border-gray-200 dark:border-gray-800">
            <div className="p-4 rounded-tl-xl rounded-tr-xl bg-gray-50 dark:bg-gray-850">
              <h3 className="text-lg font-semibold">Early Access</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Be the first to access new features and opportunities.
              </p>
            </div>
            <div className="p-4 bg-gray-100 dark:bg-gray-800">
              <h3 className="text-lg font-semibold">Exposure</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Showcase your work to art enthusiasts around the world.
              </p>
            </div>
            <div className="p-4 rounded-bl-xl rounded-br-xl bg-gray-50 dark:bg-gray-850">
              <h3 className="text-lg font-semibold">Community</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Connect with fellow artists and collaborate on projects.
              </p>
            </div>
          </div>
          <Link className="underline" href="#">
            Sign Up for an Account
          </Link>
        </div>
      </section>

      <section className="border-t border-gray-100 dark:border-gray-800 mt-12">
        <div className="max-w-7xl w-full grid items-center gap-4 px-4 py-12 mx-auto lg:grid-cols-2 lg:px-6 lg:py-16">
          <div className="space-y-4 lg:order-1 lg:space-y-6 ml-7">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Curated Indie Art
            </h2>
            <p className="max-w-3xl text-gray-500 dark:text-gray-400">
              Discover unique artwork, music, and more from indie artists around
              the globe. Support creativity and add a touch of originality to
              your life.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:gap-6">
            <div className="w-full max-w-sm">
              <img
                alt="Artwork"
                className="aspect-[1.666666667] object-cover"
                height="240"
                src="/sunset.jpg"
                width="400"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">Sunset Dreams</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Beautifully crafted music that transports you to another
                  world.
                </p>
              </div>
            </div>
            <div className="w-full max-w-sm">
              <img
                alt="Artwork"
                className="aspect-[1.666666667] object-cover"
                height="240"
                src="/infinite.jpg"
                width="400"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">Canvas of Emotions</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Expressive paintings that speak to the heart.
                </p>
              </div>
            </div>
            <div className="w-full max-w-sm">
              <img
                alt="Artwork"
                className="aspect-[1.666666667] object-cover"
                height="240"
                src="/eye.jpeg"
                width="400"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">Infinite Imagination</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Whimsical illustrations that spark creativity.
                </p>
              </div>
            </div>
            <div className="w-full max-w-sm">
              <img
                alt="Artwork"
                className="aspect-[1.666666667] object-cover"
                height="240"
                src="/heart.jpeg"
                width="400"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">Melodies of the Heart</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Soul-stirring songs that resonate with your emotions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  // return (
  //   <>
  //     <div className="relative flex" style={{ height: "calc(100vh - 78px)" }}>
  //       <div className="pt-16 w-2/3 flex">
  //         <div className="absolute inset-0 h-full w-2/3">
  //           <img
  //             className="w-full h-full object-cover blur-xl"
  //             src="./bg.jpg"
  //             alt="Background"
  //           />
  //         </div>
  //         <div className="relative z-10 p-24 bg-opacity-70 w-full">
  //           <div className="">
  //             <h1 className="text-4xl font-bold text-gray-700 mb-6">
  //               Welcome to Art.Mart!
  //             </h1>
  //             <p className="text-gray-600 font-medium mb-8">
  //               Art.Mart is focused on enabling artists to achieve their goals.
  //             </p>
  //             <p className="pr-36">
  //               Artist Shops provides the best and easiest platform for you to
  //               sell your art in your own customized online store for free. Your
  //               art deserves a trusted partner who cares.
  //             </p>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="flex items-center justify-center w-2/6">
  //         <form className="flex flex-col items-center space-y-4 w-full p-6">
  //           <input
  //             type="email"
  //             value={email}
  //             onChange={(e) => {
  //               setEmail(e.target.value);
  //             }}
  //             className="border border-gray-300 rounded-lg py-2 px-4 w-full max-w-xs"
  //             placeholder="Enter your email to get started"
  //           />

  //           {!showBoxes && (
  //             <button
  //               className="bg-blue-500 text-white rounded-lg py-2 px-6 transition duration-300 hover:bg-blue-600"
  //               onClick={() => setShowBoxes(true)}
  //             >
  //               Join
  //             </button>
  //           )}

  //           {showBoxes && (
  //             <>
  //               <input
  //                 type="text"
  //                 value={name}
  //                 onChange={(e) => setName(e.target.value)}
  //                 className="border border-gray-300 rounded-lg py-2 px-4 w-full max-w-xs"
  //                 placeholder="Enter your Name"
  //               />

  //               <input
  //                 type="password"
  //                 placeholder="Password"
  //                 value={password}
  //                 onChange={(e) => setPassword(e.target.value)}
  //                 className="border border-gray-300 rounded-lg py-2 px-4 w-full max-w-xs"
  //               />
  //               <input
  //                 type="text"
  //                 placeholder="enter your instagram url"
  //                 value={insta}
  //                 onChange={(e) => setInsta(e.target.value)}
  //                 className="border border-gray-300 rounded-lg py-2 px-4 w-full max-w-xs"
  //               />
  //               <input
  //                 type="text"
  //                 placeholder="enter your linkTree Url"
  //                 value={linkTree}
  //                 onChange={(e) => setLinkTree(e.target.value)}
  //                 className="border border-gray-300 rounded-lg py-2 px-4 w-full max-w-xs"
  //               />

  //               <input
  //                 type="file"
  //                 onChange={(e) => setProfilePicture(e.target.files[0])}
  //                 className="border border-gray-300 rounded-lg py-2 px-4 w-full max-w-xs"
  //               />
  //             </>
  //           )}

  //           {showBoxes && (
  //             <button
  //               onClick={handleFormSubmit}
  //               className="bg-blue-500 text-white rounded-lg py-2 px-6 transition duration-300 hover:bg-blue-600"
  //             >
  //               Submit
  //             </button>
  //           )}

  //           <button
  //             className="text-gray-700 "
  //             onClick={() => navigate("/login")}
  //           >
  //             Already a member? <span className="underline">Login</span>
  //           </button>
  //         </form>
  //       </div>
  //     </div>
  //   </>
  // );
};

export default RegistrationPage;
