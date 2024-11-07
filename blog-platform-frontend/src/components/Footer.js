// src/components/Footer.js
import React from "react";
import { AppBar, Typography, Toolbar } from "@mui/material"; // Updated import

const Footer = () => {
  return (
    <AppBar position="static" style={{ top: "auto", bottom: 0 }}>
      <Toolbar>
        <Typography variant="body1" style={{ flexGrow: 1 }}>
          © {new Date().getFullYear()} Updated News. All rights reserved.
        </Typography>
        <Typography variant="body1">
          Follow us on:
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> Twitter </a> |
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> Facebook </a>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;