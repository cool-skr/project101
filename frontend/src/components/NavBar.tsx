import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import logo from "../assets/images/logo-color.png";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';        
import CalculateIcon from '@mui/icons-material/Calculate';  
import InfoIcon from '@mui/icons-material/Info';        
import ContactMailIcon from '@mui/icons-material/ContactMail'; 

// Define a styled AppBar component
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  width: "100%",
  top: 0,
  left: 0,
  zIndex: theme.zIndex.appBar,
  backgroundColor: "black",
  color: "white",
  boxShadow: "0px 0px 0px 0px",
}));

const Navbar = () => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Box
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          width={"100%"}
        >
          <Box display={"flex"}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="logo"
              sx={{ mr: 2 }}
            >
              <img src={logo} alt="Logo" style={{ width: 80, height: 80 }} />
            </IconButton>
          </Link>

            <Box sx={{ display: "flex" ,gap:6}}>
              <Button
                component={Link}
                to="/"
                color="inherit"
                startIcon={<HomeIcon />}
              >
                Home
              </Button>

              <Button
                component={Link}
                to="/calculator"
                color="inherit"
                startIcon={<CalculateIcon />}
              >
                Calculator
              </Button>

              <Button
                component={Link}
                to="/about"
                color="inherit"
                startIcon={<InfoIcon />}
              >
                About
              </Button>

              <Button
                component={Link}
                to="/contact"
                color="inherit"
                startIcon={<ContactMailIcon />}
              >
                Contact
              </Button>
            </Box>
          </Box>
          <Box>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
