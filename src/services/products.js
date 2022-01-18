const url = "https://atlantia-dev-test.herokuapp.com/api/beer-products/";

const getProducts = () => {
  return fetch(url).then((response) => response.json());
};

export default getProducts;
