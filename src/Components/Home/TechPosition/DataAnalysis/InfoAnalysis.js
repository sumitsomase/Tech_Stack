import React from "react";
import { Typography, Box } from "@mui/material";

const InfoAnalysis = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "Column", // Arranges the sections side by side
        flexWrap: "wrap", // Ensures responsiveness for smaller screens
        width: "100%",
        
        
       
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
            The Data Analysis Roadmap equips you with the skills to interpret and analyze data effectively. 
            Start by mastering the fundamentals of Microsoft Excel for data organization, visualization, and basic analysis. 
            Progress to SQL, where you’ll learn to manage and query databases for insights. 
            Dive into data cleaning and preparation using tools like Python's Pandas and NumPy libraries.
          </p>
        </span>
      </Typography>

    </Box>
  );
};

export default InfoAnalysis;
