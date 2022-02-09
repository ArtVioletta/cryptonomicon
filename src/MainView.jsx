import React from "react";
import CryptoForm from "./components/CryptoForm";
import CardsView from "./components/CardsView";
import {getPriceTiker} from './module/Data'

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
      const price = await getPriceTiker(value)
      if(price) {
        setTickers([...tickers, { ticker: value, price: Number(price) }]);
      } else {
        alert('sory crypto not found')
      }
      }
    }

  const deleteTickers = (value) => {
    const newTickers = tickers.filter((item) => item.ticker !== value);
    if (!newTickers) return setTickers([]);
    else {
      setTickers(newTickers);
    }
  };


  React.useEffect(() => {
    if (tickers.find((ticker) => ticker.ticker === currentTickers)) {
      setTimeout(async () => {
        const price = await getPriceTiker(currentTickers)
        setGraph([...graph, Number(price)])
      }, [3000])
    }
  }, [currentTickers]);

  console.log(graph);

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