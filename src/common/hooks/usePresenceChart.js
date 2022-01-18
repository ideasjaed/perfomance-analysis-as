import { useState, useEffect } from "react";
import getPresenceChart from "../../services/PresenceChart";

const usePresenceChart = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [presencesShare, setPresencesShare] = useState([]);

  useEffect(() => {
    setLoading(true);
    getPresenceChart().then((response) => {
      if (response?.message) {
        setError(response.message);
        setLoading(false);
        return;
      }

      setPresencesShare(response);
      setLoading(false);
    });
  }, []);

  return { loading, error, presencesShare };
};

export default usePresenceChart;
