import { useAuth } from "../services/AuthContext";

const HomePage = () => {
  const { user, login, logout, isAuthenticated } = useAuth();

  // Example usage
  const handleLogin = () => {
    login("a@a", "a");
  };

  const handleLogout = () => {
    logout();
  };
  return (
    <>
      {isAuthenticated ? (
        <div>
          {console.log(user)}
          <p>Welcome, {user.jwt}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </>
  );
};

export default HomePage;
