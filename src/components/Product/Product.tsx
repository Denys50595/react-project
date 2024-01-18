import { useAppDispatch } from "../../redux/hooks";
import "./Product.css";
import { addItem, removeItem } from "./basketSlice";
import { ProductI } from "./productInterface";

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
        {item.showDeleteBtn ? (
          <button
            onClick={() => dispatch(removeItem(item.id))}
            className="add-btn"
          >
            Delete
          </button>
        ) : (
          <div className="product-action-wrap">
            {!item.soldOut ? (
              <>
                <p>&euro;{item.unitPrice}</p>
                <button
                  onClick={() => dispatch(addItem(item))}
                  className="add-btn"
                >
                  Add to card
                </button>
              </>
            ) : (
              <p>Sold Out</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
