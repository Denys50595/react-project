import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { resetItem, selectBasket } from "../../components/Product/basketSlice";
import BasketItem from "../../components/Product/BasketItem";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import { useNavigate } from "react-router-dom";

const Basket: React.FC = () => {
  const data = useAppSelector(selectBasket);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <>
      {data && (
        <>
          <div className="menu-container">
            <div onClick={() => navigate(-1)} className="cursor-poiner">
              <div className="arrow left"></div>
              Back to menu
            </div>
            {data.length == 0 && <p>Basket is empty</p>}
            {data.map((item, i) => (
              <BasketItem item={item} key={i} />
            ))}
          </div>
          {data.length > 0 && (
            <PrimaryButton
              btnClick={() => {
                dispatch(resetItem());
              }}
              title="Clear basket"
            />
          )}
        </>
      )}
    </>
  );
};

export default Basket;
