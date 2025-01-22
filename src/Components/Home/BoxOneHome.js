import React from "react";
import { Typography, Box } from "@mui/material";
import techone from "../Images/techstackone.png";
import Marquee from "react-fast-marquee";
import reactlogo from "../Images/reactlogo.png";
import mongodblogo from "../Images/mongodb.png";
import pythonlogo from "../Images/pythonlogo.png";
import javalogo from "../Images/javalogo.png";
import angularlogo from "../Images/angular.png";

const BoxOneHome = () => {
  const boxStyle = {
    background: "linear-gradient(to bottom, #ffffff, #f0f0f0)",
    border: "2px solid #ddd",
    marginLeft: "20px",
    width: { xs: "150px", lg: "200px" },
    height: { xs: "100px", lg: "140px" },
    borderRadius: "15px",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    marginTop: "30px",
    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s, box-shadow 0.3s",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
    },
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        marginTop: "30px",
        overflow: "hidden",
      }}
    >
     

      {/* Marquee Container */}
      <Marquee speed={40} pauseOnHover={true} gradientColor={[255, 255, 255]}>
        {/* Individual Boxes */}
        {[techone, angularlogo, reactlogo, javalogo, pythonlogo, mongodblogo].map((imgSrc, index) => (
          <Box key={index} sx={boxStyle}>
            <Box
              component="img"
              src={imgSrc}
              sx={{
                width: "80%",
                height: "auto",
                borderRadius: "10px",
                objectFit: "contain",
              }}
            />
          </Box>
        ))}
      </Marquee>
    </Box>
  );
};

export default BoxOneHome;
