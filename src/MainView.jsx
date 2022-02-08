import React from "react";
import CryptoForm from "./components/CryptoForm";
import CardsView from "./components/CardsView";

const MainView = () => {
  const [tickers, setTickers] = React.useState([]);
  const [graph, setGraph] = React.useState([]);
  const [currentTickers, setCurrentTickers] = React.useState();

  // normalizeGraph() {
  //   const maxValue = Math.max(...this.graph);
  //   const minValue = Math.min(...this.graph);
  //   return this.graph.map(
  //     (price) => 5 + ((price - minValue) * 95) / (maxValue - minValue)
  //   );
  // }

  const addCrypto = async (value) => {
    const checkTickers = !!tickers.find((item) => item.ticker === value);
    if (checkTickers) {
      alert("Crypto added");
    } else {
      const response = await fetch(
        `https://min-api.cryptocompare.com/data/price?fsym=${value}&tsyms=USD&api_key=07abb0b12382da7868c5798c31dcc54e5f213e75315c17e30259f65f73d8c56b`
      ); // fetch to data price
      const data = await response.json(); //{USD:1111}
      if (response.status === 200) {
        const price =
          data.USD > 1 ? data.USD.toFixed(2) : data.USD.toPrecision(3);
        setTickers([...tickers, { ticker: value, price: Number(price) }]);
        if (currentTickers === value) {
          setGraph(data.USD);
        }
      } else {
        alert("sorry this ticker not found");
      }
    }
  };

  const deleteTickers = (value) => {
    const newTickers = tickers.find((item) => item.ticker !== value);
    if (!newTickers) return setTickers([]);
    else {
      setTickers(newTickers);
    }
  };

  React.useEffect(() => {
    if (tickers.find((ticker) => ticker.ticker === currentTickers)) {
    }
  }, []);
  return (
    <div style={{ padding: 10 }}>
      <CryptoForm onClick={addCrypto} />
      <CardsView
        tickers={tickers}
        deleteTickers={deleteTickers}
        currentTickers={currentTickers}
        setCurrentTickers={setCurrentTickers}
      />
    </div>
  );
};


export default MainView;