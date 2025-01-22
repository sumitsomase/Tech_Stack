import React from "react";
import { Typography, Box, Button, Link } from "@mui/material";


const InfoSoftwareRole = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column", // Changed to column to stack content and button
        width: "100%",
        marginTop: "10px",

        alignItems: "center", // Centers the content
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
            color: "black",
            fontSize: "18px",
            lineHeight: "1.6",
            fontFamily: "Arial, sans-serif",
            fontWeight: "500",
          }}
        >
          <p>
            This Software Developer Roadmap is an interactive learning platform
            that systematically guides you through the core skills and
            technologies required for software development. Each module,
            including Data Structures and Algorithms (DSA), Object-Oriented
            Programming (OOP), Version Control (Git/GitHub), Database Management
            Systems (DBMS), and Backend Development (Node.js, Java, or Python),
            features curated tutorials and projects to ensure in-depth learning.
            Clicking on a module provides instant access to detailed resources,
            hands-on coding challenges, and industry-relevant examples to
            enhance your understanding. Emphasizing both problem-solving skills
            and practical application, this roadmap is tailored to make you a
            job-ready Software Developer.
          </p>
        </span>
      </Typography>
    </Box>
  );
};

export default InfoSoftwareRole;
