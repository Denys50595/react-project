import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState<[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [err, setError] = useState<Error | null>(null);

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
  return { data, loading, err };
};

export default useFetch;
