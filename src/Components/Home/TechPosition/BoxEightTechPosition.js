import React from "react";
import { Typography, Box, Link , useTheme,useMediaQuery} from "@mui/material";
import dataanalysis from "../../Images/dataanalysis.jpg";

const BoxEightTechPosition = () => {
   const theme= useTheme();
    const isMobile=useMediaQuery(theme.breakpoints.down("sm"));
  return (
    
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: isMobile ? "1px" :"100px",
        marginLeft: {xs : "47px"},
       
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: isMobile ? "85%" : "80%",
          marginTop: "50px",
          overflow: "hidden",
          border: "1px solid black",

          

          
        }}
      >
        <Box
          component="img"
          src={dataanalysis}
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: "8px",
            objectFit: "cover",
          }}
        />
      </Box>

      <Typography
        sx={{
          marginTop: "15px",
          marginLeft: isMobile ? "20px" :"4px",
          padding: "5px",
          border: "1px solid black",
          width: "250px",
          cursor: "pointer",
          textAlign:"center",

          fontSize: {
            xs: "1rem",
            sm: "1.3rem",
            md: "1.2rem",
            lg: "1.4rem",
          },
          "&:hover": {
            backgroundColor: "#EFF3EA", // New background color on hover
            transform: "scale(0.9)", // Slight zoom on hover
            boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.3)",
            "& span": {
              color: "blue", // Change text color to red on hover
            },
          },
        }}
      >
         <Link
                      href="/DataAnalysis"  // Path to navigate to
                      style={{ textDecoration: "none" }}  // Remove underline from the link
                    >
        <span style={{ fontWeight: "bold", color: "black" }}>
          Data Analysis
        </span>
        </Link>
      </Typography>
      
       
      
    </Box>
    
  );
};

export default BoxEightTechPosition;
