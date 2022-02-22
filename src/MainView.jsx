import React from "react";
import CryptoForm from "./components/CryptoForm";
import CardsView from "./components/CardsView";
import {getPriceTiker} from './module/Data'
import {DiagramContainer} from './components/DiagramContainer'

const MainView = () => {
  const [tickers, setTickers] = React.useState([]);
  const [graph, setGraph] = React.useState([]);
  const [currentTickers, setCurrentTickers] = React.useState();
  const [showDiagram, setShowDiagram] = React.useState(false)
console.log(graph);

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
    const interval = setInterval(async () => {
    if (tickers.find((ticker) => ticker.ticker === currentTickers)) {
        const price = await getPriceTiker(currentTickers)
        setGraph((prevState) => ([...prevState, {value: Number(price), date:new Date()}]))
      } else {
        clearInterval(interval)
      }
    }, [3000])
    return () => {
      clearInterval(interval)
    }
  }, [currentTickers]);


  return (
    <div style={{ padding: 10, height:'100%' }}>
      <CryptoForm onClick={addCrypto} />
      <CardsView
        setGraph={setGraph}
        setShowDiagram={setShowDiagram}
        tickers={tickers}
        deleteTickers={deleteTickers}
        currentTickers={currentTickers}
        setCurrentTickers={setCurrentTickers}
      />
      {showDiagram &&<DiagramContainer graph={graph} setShowDiagram={setShowDiagram} setCurrentTickers={setCurrentTickers} setGraph={setGraph}/>}
    </div>
  );
};


export default MainView;