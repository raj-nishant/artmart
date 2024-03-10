import { useAuth } from "../services/AuthContext";

const HomePage = () => {
  const { user, login, logout, userDetails, isAuthenticated } = useAuth();

  return (
    <>
      {isAuthenticated && userDetails && (
        <div className="m-auto w-5/6 ">
          <p className="text-5xl">
            Welcome, <span className="text-yellow-500">{userDetails.name}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default HomePage;
