import React from "react";
import { Typography, Box, Button,Link,useMediaQuery, useTheme } from "@mui/material";



const PathButtonHome = () => {
  
 const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",  // Changed to column to stack content and button
        width: "100%",
        marginTop: "80px",
        alignItems: "center",  // Centers the content
        backgroundColor:"#E8F9FF",
        borderRadius:"6px",

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
            color: "black",
            fontSize: isMobile ? "13px" : "18px",
            lineHeight: "1.6",
            fontFamily: "Arial, sans-serif",
            fontWeight: "500",
          }}
        >
          <p>
            Choosing your career path is a significant decision, and{" "}
            <strong>Tech Stack</strong> is here to help you navigate it.
          </p>
          <p>
            With clear, structured roadmaps, Tech Stack empowers you to make
            informed decisions. Whether you aspire to be a{" "}
            <strong>Software Developer</strong>, <strong>Frontend Developer</strong>, or dive into{" "}
            <strong>Data Science</strong>, we provide tailored learning paths
            designed just for you.
          </p>
          <p>
            Explore a variety of resources, including YouTube playlists,
            tutorials, and books, all crafted to guide your journey. Select your
            desired role and discover the most relevant technologies, from{" "}
            <strong>HTML/CSS</strong> for frontend development to{" "}
            <strong>Python</strong> and <strong>Machine Learning</strong> for data
            science.
          </p>
          <p>
            With <strong>Tech Stack</strong>, you’ll have all the tools to stay
            focused and informed, enabling you to take confident strides in your
            career development.
          </p>
        </span>
      </Typography>

      <Link
      href="/TechPosition"  // Path to navigate to
      style={{ textDecoration: "none" }}  // Remove underline from the link
    >
      <Button
        variant="contained"
        color="primary"
        sx={{
          textDecoration: "none",
          marginTop:"20px",
          marginBottom:"40px" // Ensures no underline from button itself
        }}
      >
        Start Your Path
      </Button>
    </Link>
    </Box>
  );
};

export default PathButtonHome;
