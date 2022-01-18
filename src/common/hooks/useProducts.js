import { useState, useEffect } from "react";
import getProducts from "../../services/products";

const useProducts = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    getProducts().then((response) => {
      if (response?.message) {
        setError(response.message);
        setLoading(false);
        return;
      }

      setProducts(response);
      setLoading(false);
    });
  }, []);

  return { loading, error, products };
};

export default useProducts;
