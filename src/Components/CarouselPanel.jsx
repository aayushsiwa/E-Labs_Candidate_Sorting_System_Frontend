import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import { carouselimages } from "../Utils/Constants";
import CarouselItem from "./CarouselItem";

const CarouselPanel = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Carousel
        sx={{
          width: "1400px",
          padding: "20px",
        }}
      >
        {carouselimages.map((item, id) => (
          <CarouselItem key={id} item={item} />
        ))}
      </Carousel>{" "}
    </div>
  );
};

export default CarouselPanel;
