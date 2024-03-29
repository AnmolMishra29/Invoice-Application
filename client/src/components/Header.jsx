import React from "react";
import { AppBar, Toolbar } from "@mui/material";

const Header = () => {
  const logo = "https://dashboard.getinvoice.co/dboard/img/logo.png";
  return (
    <AppBar>
      <Toolbar color="secondary" position="static">
        <img src={logo} alt="logo" style={{ width: 120 }} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
