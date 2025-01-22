import React from 'react';
import { Typography, Box, Button, Link } from "@mui/material";

const TextWeb = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          padding: "20px",
          border: "2px solid black",
          fontSize: {
            xs: "1rem",
            sm: "1.3rem",
            md: "1.2rem",
            lg: "1.6rem",
          },
        }}
      >
        <span style={{ fontWeight: "bold" }}>#Web Developer Roadmap</span>
      </Typography>
    </Box>
  )
}

export default TextWeb;
