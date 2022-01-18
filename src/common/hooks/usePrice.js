import { useState, useEffect } from "react";
import getPriceEvolution from "../../services/PriceChart";

const usePrice = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    setLoading(true);
    getPriceEvolution().then((response) => {
      if (response?.message) {
        setError(response.message);
        setLoading(false);
        return;
      }
      setPrices(response);
      setLoading(false);
    });
  }, []);

  return { loading, error, prices };
};

export default usePrice;
