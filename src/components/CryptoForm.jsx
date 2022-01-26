import React from 'react';
import {Button, TextField} from "@mui/material";

const CryptoForm = ({onClick}) => {
  const [ticker, setTicker] = React.useState('')

  return (
    <div>
      <TextField
        value={ticker}
        onChange={(e) => setTicker(e.target.value)}
        label="Write name"
        defaultValue="Write name"
        size="small"
      />
      <Button onClick={() => {
        onClick(ticker);
        setTicker('')
      }} variant="contained" style={{backgroundColor: 'green', display: "block", marginTop: 5}}>Добавить</Button>
    </div>
  );
};

export default CryptoForm;