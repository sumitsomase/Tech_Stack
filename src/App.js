import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Container, Box } from "@mui/material";

import About from "./Components/About/About";

import Partner from "./Components/Partner/Partner";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import TechPosition from "./Components/Home/TechPosition/TeckPosition";
import FrontendDeveloper from "./Components/Home/TechPosition/Frontend/FrontendDevloper";
import SoftwareDeveloper from "./Components/Home/TechPosition/Software/SoftwareDeveloper";
import DataAnalysis from "./Components/Home/TechPosition/DataAnalysis/DataAnalysis";
import DataSCience from "./Components/Home/TechPosition/DataScience/DataSCience";
import WebDeveloper from "./Components/Home/TechPosition/WebDev/WebDeveloper";
import AndroidDeveloper from "./Components/Home/TechPosition/AndroidDev/AndroidDevelopment";
import FullstackDeveloper from "./Components/Home/TechPosition/Fullstack/FullstackDeveloper";
import BackendDeveloper from "./Components/Home/TechPosition/Backend/BackendDeveloper";





function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const navItems = [
    { text: "Home", path: "/" },
    { text: "About", path: "/about" },
    { text: "Discover Now", path: "/our-mission" },
    { text: "Partner", path: "/partner" },
    { text: "Contact", path: "/contact" },
    
  ];

  return (
    
    <Router>
      <AppBar
        position="static"
        sx={{
          backgroundColor:"white",
          borderRadius:"6px",
          margin: "0",
          width: "100%",
          boxShadow: "none",
          left: 0,
          right: 0,
          top: 0,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
           <Typography
  variant="h5"
  component={Link}
  to="/"
  sx={{
    marginRight: {
      xs: "0",
      sm: "40px",
      md: "80px",
      lg: "150px",
    },
    textAlign: { xs: "center", sm: "left" },
    flexGrow: { xs: 1, sm: 0 },
    color: "black",
    textDecoration: "none",
    cursor: "pointer",
    fontWeight: "bold",
    letterSpacing: "1px",
    transition: "color 0.3s ease, transform 0.3s ease",
    "&:hover": {
      color: "blue",
      transform: "scale(1.05)",
    },
    "&:active": {
      color: "darkblue",
    },
    fontFamily: "'Roboto', sans-serif",
  }}
>
  TECH STACK
</Typography>


            {/* For mobile screens */}
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{
                display: { xs: "flex", sm: "none" },
                color: "black",
              }}
            >
              <MenuIcon />
            </IconButton>

            {/* For larger screens */}
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                gap: { sm: "20px", md: "30px", lg: "40px" },
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item.text}
                  component={Link}
                  to={item.path}
                  sx={{
                    fontSize: { xs: "12px", sm: "18px", md: "20px" },
                    color: "black",
                  }}
                >
                  {item.text}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Drawer for mobile screens */}
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        sx={{ display: { sm: "none" } }}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {navItems.map((item) => (
              <ListItem button key={item.text} component={Link} to={item.path}>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Routes for navigation */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-mission" element={<TechPosition />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/TechPosition" element={<TechPosition />} />
        <Route path="/FrontendDeveloper" element={<FrontendDeveloper />} />
        <Route path="/SoftwareDeveloper" element={<SoftwareDeveloper />} />
        <Route path="/BackendDeveloper" element={<BackendDeveloper />} />
        <Route path="/FullstackDeveloper" element={<FullstackDeveloper />} />
        <Route path="/AndroidDeveloper" element={<AndroidDeveloper />} />
        <Route path="/WebDeveloper" element={<WebDeveloper />} />
        <Route path="/DataSCience" element={<DataSCience/>} />
        <Route path="/DataAnalysis" element={<DataAnalysis/>} />
        

      </Routes>
    </Router>
  );
}

export default App;
