import React from "react";
import { Link } from "react-router-dom";
import { Typography, Box, Stack } from "@mui/material";
import { logo } from "../Utils/Constants";
import "@fontsource/kiwi-maru";

const Navbar = () => {
  return (
    <Stack
      onMouseEnter={(e) => {
        e.currentTarget.style.background =
          "linear-gradient(90deg, rgba(241, 163, 58, 1.0), rgba(239, 217, 2, 1.0))";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background =
          "linear-gradient(270deg, rgba(241, 163, 58, 1.0), rgba(247, 213, 3, 1.0))";
      }}
      direction={"row"}
      alignItems={"center"}
      p={2}
      sx={{
        opacity: "0.8",
        zIndex: "9",
        position: "sticky",
        height: "50px",
        background:
          "linear-gradient(270deg, rgba(241, 163, 58, 1.0), rgba(247, 213, 3, 1.0))",
        position: "sticky",
        top: "0",
        boxShadow: "5",
        justifyContent: "space-between",
      }}
    >
      <Link to={"./"}>
        <img
          src={logo}
          style={{
            borderRadius: "50%",
          }}
          height="60"
          alt="logo"
        />
      </Link>
      <Typography
        variant="body1"
        onMouseEnter={(e) => {
          e.currentTarget.style.scale = "1.1";
          e.currentTarget.style.color = "white";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.scale = "1";
          e.currentTarget.style.color = "#fbfbfb";
        }}
        sx={{
          transition: "0.3s ease-in-out",
          opacity: 0.8,
          color: "white",
          fontSize: "48px",
          fontFamily: "Licorice",
        }}
      >
        Recruitment Website
      </Typography>
      <Typography
        onMouseEnter={(e) => {
          e.currentTarget.style.scale = "1.1";
          e.currentTarget.style.color = "white";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.scale = "1";
          e.currentTarget.style.color = "#fbfbfb";
        }}
        variant="body1"
        sx={{
          color: "#fbfbfb",
          fontSize: "24px",
          transition: "0.3s ease-in-out",
          fontFamily: "Khmer",
        }}
      >
        About Us
      </Typography>
    </Stack>
  );
};

export default Navbar;
