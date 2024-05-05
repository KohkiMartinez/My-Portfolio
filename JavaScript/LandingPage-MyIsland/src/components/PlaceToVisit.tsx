import React from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import ImageCard from "./ImageCard";
import places from "../static/places";
import useWindowPosition from "../hooks/useWindowPosition";

const StyledBox = styled(Box)({
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const PlaceToVisit = () => {
  const checked = useWindowPosition("header");
  return (
    <StyledBox
      id="place-to-visit"
      sx={{ flexDirection: { xs: "column", sm: "column", md: "row" } }}
    >
      <ImageCard place={places[0]} checked={checked} />
      <ImageCard place={places[1]} checked={checked} />
    </StyledBox>
  );
};

export default PlaceToVisit;
