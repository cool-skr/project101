import React from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import logo from "../assets/images/logo-color.png";
import { styled } from "@mui/material/styles";

// Define a styled AppBar component
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  width: '100%',
  top: 0,
  left: 0,
  zIndex: theme.zIndex.appBar,
  backgroundColor: 'black',
  color: 'white',
  boxShadow: '0px 0px 0px 0px',
}));

const Navbar = () => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="logo"
          sx={{ mr: 2 }}
        >
          <img 
            src={logo} 
            alt="Logo" 
            style={{ width: 80, height: 80 }} 
          />
        </IconButton>

        <Box sx={{ display: "flex" }}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Contact</Button>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
