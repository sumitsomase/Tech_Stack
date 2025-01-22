import React from "react";
import { Typography, Box, Button,Link } from "@mui/material";

import background from "../../Images/background.webp";



const InfoTechPosition = () => {
  

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",  // Changed to column to stack content and button
        width: "100%",
        marginTop:"10px",
        
        alignItems: "center",  // Centers the content
        

      }}
    >
      
       <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
               height:"480px",
                overflow: "hidden",
                border: "2px  ",
              }}
            >
              <Box
                component="img"
                src={background}
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
          textAlign: "center",
          padding: "40px",
          marginTop:"50px",
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
            color: "black",
            fontSize: "18px",
            lineHeight: "1.6",
            fontFamily: "Arial, sans-serif",
            fontWeight: "500",
          }}
        >
          <p>
    Explore the latest career paths in technology tailored just for you.  
    From frontend development to data science, explore your interests.  
    Gain access to resources and tools to enhance your learning.  
    Start building the skills you need to succeed in the tech industry.
  </p>
        </span>
      </Typography>



      
    </Box>
  );
};

export default InfoTechPosition;
