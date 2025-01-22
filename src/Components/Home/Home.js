import React from 'react'
import { Typography, Box, Link } from "@mui/material";
import BoxOneHome from './BoxOneHome'
import BoxTwoHome from './BoxTwoHome';
import Footer from '../Footer';
import PathButtonHome from './PathButtonHome';
import CountTech from './CountTech';
import InfoTechstack from './InfoTechstack';
import DiscoverTechPosition from './DiscoverTechPosition';


function Home() {

  
  return (
    <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      
      
      
    }}
  >
     <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      backgroundColor:"black",
      borderRadius:"10px",
      marginTop:"20px",
      marginBottom:"10px"
     
      
      
    }}
  >
    <Typography
  sx={{
    textAlign: "center",
    padding: "20px",
    
    fontSize: {
      xs: "1rem",
      sm: "1.3rem",
      md: "1.5rem",
      lg: "1.8rem",
    },
    color: "#fff", // Default text color
    fontFamily: "'Poppins', sans-serif", // Custom font
    fontWeight: "bold", // Text boldness
  }}
>
  <span style={{ color: "#FFFFFF", textShadow: "1px 1px 2px #000000" }}>
    Tech Stack -
  </span>
  <span style={{ color: "#FFD700", textShadow: "1px 1px 2px #000000" }}>
    Choose your career Path
  </span>
</Typography>

    <CountTech/>

    </Box>
    <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      marginLeft:"110px"

      
    }}
    >
    <InfoTechstack/>
    </Box>
    <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      marginTop:"80px"

      
    }}>
    
    <DiscoverTechPosition/>
    </Box>

    <Box

    sx={{
      display: "flex",
      flexDirection: "column",
      
    }}
    >

    <BoxOneHome/>
    <BoxTwoHome/>
    </Box>
    

    <PathButtonHome/>
  
    <Footer/>
    

    </Box>
  
  )
}

export default Home