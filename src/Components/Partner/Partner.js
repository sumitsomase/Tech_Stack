import React from "react";
import { Box, Typography } from "@mui/material";
import { keyframes } from "@mui/system";
import PartnershipWithHirehub from "./PartnershipWithHirehub";
import Footer from "../Footer";




function Partner() {
  const FlipAnimation = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(0deg);
  }
`;
  

  return (
    
    
    <Box sx={{
       display: "flex" ,
       flexDirection:"column"
       }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
          width: "100%", // Full width
          height: "98.5vh", // Set height to 500px
         
        
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "35%",
            backgroundColor: "white",
            borderRadius: "2px",
            border: "2px solid #FF5733",
            transition: "all 0.3s ease", // Smooth transition for background color change
            "&:hover": {
              backgroundColor: "#F0F0F0", // New background color on hover
              transform: "scale(1.05)", // Slight zoom on hover
              boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.3)",
              borderColor: "black",
              // Apply the flip animation on hover
              "& span": {
                animation: `${FlipAnimation} 0.6s ease`, // Flip animation on hover
              },
            },
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              padding: "40px",
              fontSize: {
                xs: "1rem",
                sm: "1.3rem",
                md: "1.2rem",
                lg: "1.6rem",
              }, // Responsive font sizes
            }}
          >
            <span
              style={{
                fontWeight: "bold",
                display: "inline-block", // Important for animation to work properly
              }}
            >
              #Partnerships
            </span>{" "}
            <br />
            #Join Us in Empowering the Next Generation of Tech Professionals
          </Typography>
        </Box>
      </Box>

      <PartnershipWithHirehub/>
      <Footer/>
    
    </Box>
  );
}

export default Partner;
