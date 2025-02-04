import React from "react";
import { Typography, Box, Button, Link, useTheme, useMediaQuery } from "@mui/material";


const InfoBackend = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row", // Changed to column to stack content and button
        width: "100%",
        marginTop: "10px",
        marginTop:isMobile?"-40px": "10px",
         marginLeft:isMobile?"-10px":"0px",

        alignItems: "center", // Centers the content
        
       
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          padding:isMobile?"15px": "40px",
          marginTop: isMobile?"10px":"50px",
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
            fontSize:isMobile?"14px": "18px",
            lineHeight: "1.6",
            fontFamily: "Arial, sans-serif",
            fontWeight: "500",
          }}
        >
          <p>
            This Backend Developer Roadmap is an interactive guide designed to
            build your expertise in server-side development. It takes you
            step-by-step through essential backend technologies and practices,
            including topics like Node.js, Python/Django, Java/Spring Boot,
            APIs, Database Management (SQL and NoSQL), and Authentication and
            Security. Each module features curated resources such as video
            tutorials, documentation, and real-world projects to ensure a deep
            and practical understanding. 
          </p>
        </span>
      </Typography>

      
      <Typography
        sx={{
          textAlign: "center",
          padding:isMobile?"15px": "40px",
          marginTop: "50px",
          border:"1px solid red",
        borderTop: "none", // Hide the top border
         borderBottom: "none",
         borderRight:"none",
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
            fontSize:isMobile?"14px": "18px",
            lineHeight: "1.6",
            fontFamily: "Arial, sans-serif",
            fontWeight: "500",
            
           
          }}
        >
          <p>
            By clicking on a module, you will access
            detailed tutorials and exercises tailored to industry requirements.
            The roadmap emphasizes scalable architecture, database optimization,
            and API development, preparing you to handle real-world backend
            challenges with confidence. Start your journey to become a
            proficient Backend Developer and master the skills in demand for a
            thriving career in technology!
          </p>
        </span>
      </Typography>
    </Box>
  );
};

export default InfoBackend;
