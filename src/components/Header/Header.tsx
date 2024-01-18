import { useContext } from "react";
import "./Header.css";
import { UserContext, UserContextType } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { selectBasket } from "../Product/basketSlice";

const Header = () => {
  const navigate = useNavigate();
  const { userName } = useContext(UserContext) as UserContextType;
  const basketProducts = useAppSelector(selectBasket);

  return (
    <div className="header-container">
      <div>{userName}</div>
      <div onClick={() => navigate("/main/basket")}>
        Basket count: {basketProducts.length}
      </div>
    </div>
  );
};

export default Header;
