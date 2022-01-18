const url = "https://atlantia-dev-test.herokuapp.com/api/presence-share-chart/";

const getPresenceChart = () => {
  return fetch(url).then((response) => response.json());
};

export default getPresenceChart;
