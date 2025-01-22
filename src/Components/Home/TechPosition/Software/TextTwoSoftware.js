import React from "react";
import { Typography, Box } from "@mui/material";

const TextTwoSoftware = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width:"300px",
        height:"50px",
        alignItems: "center", // Center align the text
        justifyContent: "center",
        
        background: "linear-gradient(to bottom, #fff, #f7f7f7)", // Add a subtle background gradient
        borderRadius: "6px", // Add rounded corners to the box
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Add a shadow for depth
       marginTop:"60px"
      }}
    >
      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
          fontSize: {
            xs: "1rem",
            sm: "1.3rem",
            md: "1.5rem",
            lg: "1.8rem",
          },
          fontWeight: 600, // Make the text bold
          letterSpacing: "0.05em", // Add some letter spacing
          color: "#333", // Primary text color
        }}
      >
        <span
          style={{
            color: "#B31E3E", // Accent color for "Start Your Journey"
            fontWeight: "bold", // Highlighted text
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)", // Add text shadow
          }}
        >
          Start Your Journey
        </span>
      </Typography>
    </Box>
  );
};

export default TextTwoSoftware;
