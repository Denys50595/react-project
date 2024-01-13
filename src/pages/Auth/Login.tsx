import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const Login: React.FC = () => {
  const context = useContext(UserContext);
  const [username, setUsername] = React.useState("");

  const handleLogin = () => {
    context?.setUserName(username);
    console.log("Logged in as:", username);
    console.log("context", context?.userName);
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form>
        <label>
          Username:
          <input
            type="text"
            value={username}
            placeholder="Enter your name"
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
