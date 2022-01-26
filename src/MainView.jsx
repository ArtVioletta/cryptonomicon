import React from 'react';
import CryptoForm from "./components/CryptoForm";
import CardsView from "./components/CardsView";


const MainView = () => {
  const [tickers, setTickers] = React.useState([])// {ticker:'', price: 1}


  const addCrypto = async (value) => {
    const checkTickers = !!tickers.find((item => item.ticker === value))
    if (checkTickers) {
      alert('Crypto added')
    } else {
      const response = await fetch(
        `https://min-api.cryptocompare.com/data/price?fsym=${value}&tsyms=USD&api_key=07abb0b12382da7868c5798c31dcc54e5f213e75315c17e30259f65f73d8c56b`
      );// fetch to data price
      const data = await response.json();//{USD:1111}
      if (response.status === 200) {
        const price = data.USD > 1 ? data.USD.toFixed(2) : data.USD.toPrecision(3);
        setTickers([...tickers, {ticker: value, price: Number(price)}])
      } else {
        alert('sorry this ticker not found')
      }
    }
  }

  const deleteTickers = (value) => {
    const newTickers = tickers.find(item => item.ticker !== value)
    setTickers(newTickers)
  }

  console.log(tickers)
  return (
    <div style={{padding: 10}}>
      <CryptoForm onClick={addCrypto}/>
      <CardsView tickers={tickers} deleteTickers={deleteTickers}/>
    </div>


  );
};


export default MainView;