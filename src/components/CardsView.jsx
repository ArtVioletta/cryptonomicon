import React from 'react';
import {Divider} from "@mui/material";
import {CardComponent} from "./UI/Card/CardComponent";


const CardsView = ({tickers, deleteTickers}) => {
  return (
    
    <div style={{marginTop: 20,width:'100%', flexDirection:'row', display:'inline-block', justifyContent:'center',}}>
      <Divider />
      <div style={{width:'1300px', display: 'flex', flexWrap:'wrap'}}>
        {tickers.length ? 
        tickers.map(item => <CardComponent key={item.ticker} deleteTickers={() => deleteTickers(item.ticker)}
        ticker={item.ticker} price={item.price}/>)
        : !tickers.length &&<h1 style={{textAlign:'center', width:'100%'}}>You Didn't have ticker</h1>
        }
      </div>
      <Divider/>
    </div>
  );
};

export default CardsView;