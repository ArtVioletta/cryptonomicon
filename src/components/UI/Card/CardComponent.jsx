import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

export const CardComponent = ({
  ticker,
  price,
  deleteTickers,
  setCurrentTickers,
  currentTickers,
  setShowDiagram,
  setGraph
}) => {
  return (
    <Card
      key={ticker}
      style={{
        width: "300px",
        margin: "10px",
        justifyContent: "center",
        backgroundColor: currentTickers === ticker ? "#ddd" : "#fff",
      }}
      onClick={() => {
        setCurrentTickers(ticker);
        setGraph([])
        setShowDiagram(true)
      }}
    >
      <CardContent
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          cursor:'pointer'
        }}
      >
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          {ticker} - USD
        </Typography>
        <Typography variant="h5" component="div">
          {price}
        </Typography>
      </CardContent>
      <CardActions
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Button size="small" onClick={(e) => {
          e.stopPropagation()
          deleteTickers(ticker)}}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};
