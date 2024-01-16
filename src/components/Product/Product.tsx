import "./Product.css";

interface Props {
  id: number;
  name: string;
  unitPrice: number;
  imageUrl: string;
  ingredients: Array<string>;
  soldOut: boolean;
}

const Product = ({ item }: { item: Props }) => {
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
              <button className="add-btn">Add to card</button>
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
