const url = "https://atlantia-dev-test.herokuapp.com/api/price-evolution-chart";

const getPriceEvolution = () => {
  return fetch(url).then((response) => response.json());
};

export default getPriceEvolution;
