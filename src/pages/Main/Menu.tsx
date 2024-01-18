import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Product from "../../components/Product/Product";
import "./Main.css";

const Menu = () => {
  const [data, setData] = useState<[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [err, setError] = useState<Error | null>(null);

  const url = "https://react-fast-pizza-api.onrender.com/api/menu ";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result: { status: string; data: [] } = await response.json();
        setData(result.data);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {err && <p>Error: {err.message}</p>}
      {data && (
        <>
          <div className="menu-container">
            {data.map((item, i) => (
              <Product item={item} key={i} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Menu;
