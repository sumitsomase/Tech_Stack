import React from "react";
import { Typography, Box, Button, Link } from "@mui/material";


const InfoFrontendDevRole = () => {
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
            This Frontend Developer Roadmap is an interactive learning platform
            that guides you step-by-step through essential skills. Each module,
            such as HTML, CSS, JavaScript, Git/GitHub, and CSS Frameworks,
            contains curated video tutorials to ensure a comprehensive
            understanding. Clicking on a module instantly opens a detailed
            tutorial to help you master the topic. Designed to make you
            job-ready, this roadmap emphasizes practical skills required in the
            industry. Start your journey and prepare to excel as a Frontend
            Developer!
          </p>
        </span>
      </Typography>
    </Box>
  );
};

export default InfoFrontendDevRole;
