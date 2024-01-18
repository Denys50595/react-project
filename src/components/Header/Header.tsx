import { useContext } from "react";
import "./Header.css";
import { UserContext, UserContextType } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const { userName } = useContext(UserContext) as UserContextType;

  return (
    <div className="header-container">
      <div onClick={() => navigate("/main/basket")} className="cursor-poiner">
        Your basket {userName}
      </div>
    </div>
  );
};

export default Header;
