import {
  AppBar,
  Box,
  Collapse,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import SortIcon from "@mui/icons-material/Sort";
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link as Scroll } from "react-scroll";

const StyledBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
});
const StyledAppBar = styled(AppBar)({
  background: "none",
});
const StyledSortIcon = styled(SortIcon)({
  color: "#fff",
  fontSize: "2rem",
});
const StyledToolbar = styled(Toolbar)({
  width: "80%",
  margin: "0 auto",
});
const StyledTypography = styled(Typography)({
  flexGrow: "1",
  fontFamily: "Nunito",
});
const StyledTypography2 = styled(Typography)({
  fontFamily: "Nunito",
  color: "white",
});
const Header = () => {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  });
  return (
    <StyledBox id="header">
      <StyledAppBar elevation={0}>
        <StyledToolbar>
          <StyledTypography variant="h4">
            My<span style={{ color: "#5AFF3D" }}>Island.</span>
          </StyledTypography>
          <IconButton>
            <StyledSortIcon />
          </IconButton>
        </StyledToolbar>
      </StyledAppBar>

      <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
        <Box sx={{ textAlign: "center" }}>
          <StyledTypography2 variant="h1">
            Welcome to <br />
            My <span style={{ color: "#5AFF3D" }}>Island.</span>
          </StyledTypography2>
          <Scroll to="place-to-visit" smooth={true}>
            <IconButton>
              <ExpandMoreIcon sx={{ color: "#5AFF3D", fontSize: "4rem" }} />
            </IconButton>
          </Scroll>
        </Box>
      </Collapse>
    </StyledBox>
  );
};

export default Header;
