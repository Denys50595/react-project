import { useContext } from "react";
import "./Header.css";
import { UserContext, UserContextType } from "../../contexts/UserContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { userName } = useContext(UserContext) as UserContextType;

  return (
    <div className="header-container">
      <Link to="/main/basket">Your basket {userName}</Link>
    </div>
  );
};

export default Header;
