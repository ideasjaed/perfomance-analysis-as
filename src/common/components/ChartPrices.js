import usePrice from "../hooks/usePrice";
import Chart from "react-apexcharts";
import { useEffect, useState } from "react";
import {
  extractPriceEvolution,
  extractDateEvolution,
} from "../../utils/dataPrices";

const ChartPrices = () => {
  const { loading, error, prices } = usePrice();
  const [series, setSeries] = useState([]);
  const [categories, setCategories] = useState([]);

  const options = {
    stroke: {
      curve: "smooth",
    },

    legend: {
      fontSize: "14px",
      fontFamily: "Hind, sans-serif",
      fontWeight: 400,
      toolbar: {
        show: false,
        offsetX: 0,
        offsetY: 0,
        tools: {
          download: true,
          selection: true,
          zoom: true,
          zoomin: false,
          zoomout: false,
          pan: true,
          reset: false,
          customIcons: [],
        },
      },
    },
    xaxis: {
      categories: categories,
      labels: {
        style: {
          fontFamily: "Hind, sans-serif",
          cssClass: "t-small t-regular",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          fontFamily: "Hind, sans-serif",
          cssClass: "t-small t-regular",
        },
        formatter: function (label) {
          return `${label}`;
        },
      },
    },
    colors: ["#D6215B", "#7530B2", "#FFB448"],
  };

  useEffect(() => {
    setSeries(extractPriceEvolution(prices));
    setCategories(extractDateEvolution(prices));
  }, [prices]);
  return (
    <Chart
      options={options}
      series={series}
      type="line"
      width="868"
      height="407"
    />
  );
};

export default ChartPrices;
