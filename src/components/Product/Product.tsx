import { useAppDispatch } from "../../redux/hooks";
import PrimaryButton from "../Buttons/PrimaryButton";
import "./Product.css";
import { addItem } from "./basketSlice";
import { ProductI } from "./product.interface";

const Product = ({ item }: { item: ProductI }) => {
  const dispatch = useAppDispatch();

  return (
    <div className={`product-container ${!item.soldOut ? "" : "sold-product"}`}>
      <img src={item.imageUrl} />
      <div className="product-info-wrap">
        <div>
          <h4>{item.name}</h4>
          <div>
            {item?.ingredients.map((ingredient, i) =>
              item.ingredients.length - 1 === i ? (
                <span key={i}>{ingredient}</span>
              ) : (
                <span key={i}>{ingredient}, </span>
              )
            )}
          </div>
        </div>
        <div className="product-action-wrap">
          {!item.soldOut ? (
            <>
              <p>&euro;{item.unitPrice}</p>
              <PrimaryButton
                btnClick={() => dispatch(addItem(item))}
                title="Add to card"
              />
            </>
          ) : (
            <p>Sold Out</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
