import React from "react";
import { Typography, Box } from "@mui/material";

const InfoFullstack = () => {
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
            The Fullstack Developer Roadmap is your ultimate guide to mastering
            both frontend and backend development. It covers key technologies
            like HTML, CSS, JavaScript, React, and Angular for frontend, as well
            as Node.js, Express, Python/Django, and Java/Spring Boot for backend
            development. You'll also delve into database management with SQL and
            NoSQL, and learn about version control, deployment, and containerization
            with tools like Git, Docker, and CI/CD pipelines.
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
            Each module includes comprehensive resources like video tutorials,
            hands-on projects, and detailed documentation to ensure a practical
            learning experience. By completing this roadmap, you’ll gain
            proficiency in building responsive web applications, RESTful APIs,
            scalable architecture, and secure user authentication. Embark on
            this journey to become a versatile Fullstack Developer and achieve
            success in today’s competitive tech landscape!
          </p>
        </span>
      </Typography>
    </Box>
  );
};

export default InfoFullstack;
