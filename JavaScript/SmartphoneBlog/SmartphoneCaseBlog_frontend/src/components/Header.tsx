// Header.jsx

import React from "react";

import { Typography, AppBar, Toolbar, IconButton } from "@mui/material";
import StayCurrentPortraitIcon from "@mui/icons-material/StayCurrentPortrait";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import { Link } from "react-router-dom";

const Header: React.FC = React.memo(() => {
  return (
    <>
      <AppBar sx={{ backgroundColor: "white" }} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            component={Link}
            to="/"
          >
            <PhoneAndroidIcon color="primary" />
          </IconButton>
          <Typography variant="h6" color="primary" component={Link} to="/">
            Smartphone Case Blog
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
});

export default Header;
