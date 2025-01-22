import React from "react";
import { Typography, Box, Button, Link } from "@mui/material";

const TextAnalysis = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        margin: "20px auto",
        maxWidth: "600px",
        background: "#f9f9f9",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
          fontSize: {
            xs: "1.2rem",
            sm: "1.5rem",
            md: "1.8rem",
            lg: "2rem",
          },
          fontWeight: 700,
          background: "linear-gradient(90deg, #ff7eb3, #ff758c, #ff6a65)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Data Analysis
      </Typography>
      <Typography
        variant="body1"
        sx={{
          textAlign: "center",
          color: "#666",
          marginTop: "10px",
          fontSize: {
            xs: "0.9rem",
            sm: "1rem",
          },
        }}
      >
        Start your journey to becoming a professional Data Analysis with this comprehensive roadmap.
      </Typography>
     
    </Box>
  );
};

export default TextAnalysis;
