import Chart from "react-apexcharts";
import usePresenceChart from "../hooks/usePresenceChart";

const ChartPresenceShare = () => {
  const { presencesShare } = usePresenceChart();
  const options = {
    labels: presencesShare.map((presence) => presence.name),
    colors: ["#D6215B", "#FF7A00", "#7530B2", "#23B794", "#006FFF"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      fontSize: "14px",
      fontFamily: "Hind, sans-serif",
      fontWeight: 400,
      offsetY: 80,
    },
  };
  return (
    <Chart
      options={options}
      series={presencesShare.map((presence) => presence.presenceShare)}
      type="pie"
      width="500"
      height="407"
    />
  );
};

export default ChartPresenceShare;
