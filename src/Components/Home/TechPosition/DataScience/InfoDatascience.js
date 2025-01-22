import React from "react";
import { Typography, Box } from "@mui/material";

const InfoDataScience = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row", // Arranges the sections side by side
        width: "100%",
        marginTop: "10px",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
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
            color: "#4B5556",
            fontSize: "18px",
            lineHeight: "1.6",
            fontFamily: "Arial, sans-serif",
            fontWeight: "500",
          }}
        >
          <p>
            The Data Scientist Roadmap is your guide to becoming proficient in data science.
            It covers foundational topics like statistics, probability, and linear algebra.
            You'll learn essential programming languages like Python and R, and dive into
            data manipulation using libraries like Pandas and NumPy. Data visualization tools
            such as Matplotlib, Seaborn, and Tableau will help you communicate insights effectively.
          </p>
        </span>
      </Typography>

      <Typography
        sx={{
          textAlign: "center",
          padding: "40px",
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
            As a Data Scientist, you'll master machine learning algorithms using libraries
            such as Scikit-learn and TensorFlow. You'll also learn about SQL for querying databases,
            and advanced techniques in natural language processing (NLP) and deep learning. The roadmap
            will guide you through project-based learning, ensuring you acquire the practical experience
            needed to tackle real-world data problems. Start your journey and become an expert Data Scientist!
          </p>
        </span>
      </Typography>
    </Box>
  );
};

export default InfoDataScience;
