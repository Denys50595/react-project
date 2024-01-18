import { useAppDispatch } from "../../redux/hooks";
import PrimaryButton from "../Buttons/PrimaryButton";
import { decreaseQuantity, increaseQuantity, removeItem } from "./basketSlice";
import { IProduct } from "./product.interface";

const BasketItem = ({ item }: { item: IProduct }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="product-container">
      {item.quantity}* {item.name}
      &euro;{item.unitPrice * item.quantity}
      <PrimaryButton
        btnClick={() => dispatch(decreaseQuantity(item.id))}
        title="-"
      />
      <div>{item.quantity}</div>
      <PrimaryButton
        btnClick={() => dispatch(increaseQuantity(item.id))}
        title="+"
      />
      <PrimaryButton
        btnClick={() => dispatch(removeItem(item.id))}
        title="Delete"
      />
    </div>
  );
};

export default BasketItem;
