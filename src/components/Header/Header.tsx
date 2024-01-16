import { useContext } from "react";
import "./Header.css";
import { UserContext, UserContextType } from "../../contexts/UserContext";

const Header = () => {
  const { userName } = useContext(UserContext) as UserContextType;

  return <div className="header-container">{userName}</div>;
};

export default Header;
