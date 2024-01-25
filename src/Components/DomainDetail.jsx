import React from "react";
import { Link, useParams } from "react-router-dom";
import { Typography, Box, Stack, Button } from "@mui/material";
const DomainDetail = () => {
  const { id } = useParams();
  let title = id;
  let res = title.replace("-", " ");
  const btnprops = {
    background: "#262626",
    borderRadius: "10px",
    color: "#F1a23a",
    borderColor: "#F1a23a",
  };
  return (
    <div
      style={{
        background: "#110F0F",
      }}
    >
      <Stack
        direction="row"
        sx={{
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            paddingLeft: "20px",
          }}
          color="#F1A23A"
          variant="h2"
          fontFamily="Khmer   "
          fontWeight="bold"
          p={2}
        >
          {res}
        </Typography>
        <Button
          size="large"
          sx={{
            paddingX: "40px",
            background: "#F1a23a",
            borderRadius: "10px",
            color: "white",
            borderColor: "white",
          }}
          variant="outlined"
        >
          Pick
        </Button>
        <Button size="large" sx={btnprops} variant="outlined">
          All
        </Button>
        <Button size="large" sx={btnprops} variant="outlined">
          Present
        </Button>
      </Stack>
    </div>
  );
};

export default DomainDetail;
