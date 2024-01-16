import React, { useContext } from "react";
import './Auth.css';
import { UserContext, UserContextType } from "../../contexts/UserContext";

const Login: React.FC = () => {
  const { setUserName } = useContext(UserContext) as UserContextType;
  const [name, setName] = React.useState("");

  const handleLogin = () => {
    setUserName(name);
  };

  return (
    <div className="login-container">
      <h2>Login Page</h2>
      <form>
        <input
          type="text"
          value={name}
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
