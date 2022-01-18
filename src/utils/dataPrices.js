const prices = [];

const filterSKU = (array) => {
  if (array.length === 0) return;

  const arrayFilter = array.filter((price) => price.sku === array[0].sku);
  const obj = {
    name: arrayFilter[0].name,
    data: arrayFilter.map((price) => price.price),
  };

  prices.push(obj);
  array.splice(0, arrayFilter.length);

  filterSKU(array);
};

export const extractPriceEvolution = (array) => {
  const arrayCopy = [...array];
  filterSKU(arrayCopy);
  return prices;
};

export const extractDateEvolution = (array) => {
  const datesObj = array.reduce((counter, price) => {
    counter[price.dateExtraction] = (counter[price.dateExtraction] || 0) + 1;

    return counter;
  }, {});

  const datesArray = Object.entries(datesObj);
  const datesList = datesArray.map((date) => new Date(date[0]));
  const sortedList = datesList.sort(
    (date1, date2) => date1.getDate() - date2.getDate()
  );

  return sortedList.map((date) =>
    new Intl.DateTimeFormat("en-US", {
      day: "numeric",
      month: "short",
    }).format(new Date(date))
  );
};
