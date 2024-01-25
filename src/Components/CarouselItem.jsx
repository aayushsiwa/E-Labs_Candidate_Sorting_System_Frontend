import React from "react";
import { Paper, Button } from "@mui/material";
const CarouselItem = ({ item }) => {
  return (
    <Paper
      sx={{
        borderRadius: "20px",
        height: "600px",
      }}
    >
      <img
        style={{
          objectFit: "fill",
          borderRadius: "20px",
        }}
        height="600px"
        width="1400px"
        sca
        src={item.src}
        alt={item.alt}
      />
      <h2>{item.alt}</h2>
    </Paper>
  );
};

export default CarouselItem;
