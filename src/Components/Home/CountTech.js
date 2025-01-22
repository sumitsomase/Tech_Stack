import React, { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";

const CountTech = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const target = 40;
    const intervalTime = 30;
    const incrementValue = 1;
    let currentNumber = 0;

    const interval = setInterval(() => {
      currentNumber += incrementValue;
      if (currentNumber >= target) {
        setNumber(target + "+");
        clearInterval(interval);
      } else {
        setNumber(currentNumber);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "250px",
        height: "45px",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to bottom, #fff, #f7f7f7)",
        borderRadius: "6px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        marginTop:"20px",
        marginBottom:"20px"
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
          fontWeight: 600,
          letterSpacing: "0.05em",
          color: "#333",
        }}
      >
        <span
          style={{
            color: "#B31E3E",
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
          }}
        >
          #Stack:
        </span>{" "}
        {number}
      </Typography>
    </Box>
  );
};

export default CountTech;
