import Header from "../components/Header";

const RegistrationPage = () => {
  return (
    <>
      <Header showExtraButtons />
      <div className="relative h-screen">
        <div className="pt-16">
          <div className="absolute inset-0 w-full h-full">
            <img
              className="w-full h-full object-cover blur-sm"
              src="./bg.jpg"
              alt="Background"
            />
          </div>
          <div className="relative z-10 p-6 bg-opacity-70 flex justify-around text-center">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-6">
                Welcome to Art.Mart!
              </h1>
              <p className="text-gray-600 mb-8">
                Art.Mart is focused on enabling artists to achieve their goals.
              </p>
            </div>
            <form className="flex flex-col items-center space-y-4">
              <input
                type="email"
                className="border border-gray-300 rounded-lg py-2 px-4 w-full max-w-xs"
                placeholder="Enter your email to get started"
              />
              <button className="bg-blue-500 text-white rounded-lg py-2 px-6 transition duration-300 hover:bg-blue-600">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationPage;
