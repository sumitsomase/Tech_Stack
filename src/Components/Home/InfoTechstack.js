import React from "react";
import { Typography, Box } from "@mui/material";


const InfoTechstack = () => {
  
  
  

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row", // Arranges the sections side by side
        width: "100%",
        marginTop: "10px",
        alignItems:  "center",
        
       
        
      }}
    >
      {/* Left Section */}
      <Typography
        sx={{
          textAlign:  "center",
          padding: "40px",
          marginTop: "50px",
          fontSize: {
            xs: "1rem",
            sm: "1.3rem",
            md: "1.2rem",
            lg: "1.6rem",
          },
        }}
      >
        <span
          style={{
            color:"#4B5556",
            fontSize: "18px",
            lineHeight: "1.6",
            fontFamily: "Arial, sans-serif",
            fontWeight: "500",
          }}
        >
          <p>
          The ultimate roadmap for developers and innovators.
          </p>
          <p>
            
          </p>
        </span>
      </Typography>

      {/* Right Section */}
      <Typography
        sx={{
          textAlign:  "center",
          padding:  "40px",
          marginTop: "50px",
          border: "1px solid red",
          borderTop: "none", // Hide the top border
          borderBottom: "none",
          borderRight: "none",
          fontSize: {
            xs: "1rem",
            sm: "1.3rem",
            md: "1.2rem",
            lg: "1.6rem",
          },
        }}
      >
        <span
          style={{
            color: "#4B5556",
            fontSize: "18px",
            lineHeight: "1.6",
            fontFamily: "Arial, sans-serif",
            fontWeight: "500",
          }}
        >
          <p>
          Where technology meets innovation to create solutions.
          </p>
        </span>
      </Typography>
    </Box>
  );
};

export default InfoTechstack;
