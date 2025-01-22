import React from "react";
import { Typography, Box } from "@mui/material";
import flutterlogo from "../Images/flutterlogo.png";
import Marquee from "react-fast-marquee";
import kotlinlogo from "../Images/kotlinlogo.svg";
import mongodblogo from "../Images/mongodb.png";
import mysqllogo from "../Images/mysqllogo.png";
import awslogo from "../Images/awslogo.png";

const BoxTwoHome = () => {
  const boxStyle = {
    background: "linear-gradient(145deg, #e0e0e0, #ffffff)",
    border: "2px solid #ddd",
    marginLeft: "20px",
    width: { xs: "150px", lg: "200px" },
    height: { xs: "100px", lg: "140px" },
    borderRadius: "15px",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    marginBottom: "30px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
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
     

      {/* Marquee Section */}
      <Marquee speed={40} pauseOnHover={true} direction="right" gradient gradientColor={[245, 245, 245]}>
        {[awslogo, mongodblogo, flutterlogo, kotlinlogo, mysqllogo,flutterlogo].map((imgSrc, index) => (
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

export default BoxTwoHome;
