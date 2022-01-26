import React from 'react';
import {Divider} from "@mui/material";
import {CardComponent} from "./UI/Card/CardComponent";


const CardsView = ({tickers, deleteTickers}) => {
  console.log(tickers)
  return (
    <div style={{marginTop: 20}}>
      <Divider/>
      <div style={{width: '100%', display: 'flex'}}>
        {/*{tickers.length && tickers.map(item => <CardComponent key={item.ticker} deleteTickers={deleteTickers(item.ticker)}*/}
        {/*  ticker={item.ticker} price={item.price}/>)}*/}

        {!tickers.length &&<h1>You Didn't have ticker</h1>}
      </div>
      <Divider/>
    </div>
  );
};

export default CardsView;