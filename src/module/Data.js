export const getPriceTiker = async (value) => {
  const response = await fetch(
    `https://min-api.cryptocompare.com/data/price?fsym=${value}&tsyms=USD&api_key=07abb0b12382da7868c5798c31dcc54e5f213e75315c17e30259f65f73d8c56b`
  );
  const data = await response.json();
  if (response.status === 200) {
    const price = data.USD > 1 ? data.USD.toFixed(2) : data.USD.toPrecision(3);
    console.log(price);
    return price
} else {
  return null
}
}