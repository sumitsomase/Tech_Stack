import React from "react";
import { Typography, Box } from "@mui/material";

const InfoWeb = () => {
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
            The Web Developer Roadmap is your ultimate guide to mastering web
            development. It covers essential technologies such as HTML, CSS,
            and JavaScript, along with frontend frameworks like React, Vue.js,
            or Angular. You’ll also learn responsive web design to build mobile-friendly
            websites and user interfaces using tools like Bootstrap, Flexbox, and CSS Grid.
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
            The roadmap also includes backend technologies such as Node.js,
            Express, and databases like MongoDB or SQL. You’ll learn about
            version control with Git, deployment, API development, and best practices
            for building scalable web applications. With hands-on projects and
            real-world examples, you'll develop the skills needed to create
            dynamic websites and web apps. Start your journey to become a
            versatile Web Developer and build impactful solutions!
          </p>
        </span>
      </Typography>
    </Box>
  );
};

export default InfoWeb;
