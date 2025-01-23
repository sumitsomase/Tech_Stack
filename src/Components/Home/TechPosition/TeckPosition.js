import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import { Typography, Box, Link } from "@mui/material";
import DiscoverTechPosition from "../DiscoverTechPosition";
import BoxOneTechPosition from "./BoxOneTechPosition";
import BoxTwoTechPosition from "./BoxTwoTechPosition";
import BoxThreeTechPosition from "./BoxThreeTechPosition";
import BoxFourTechPosition from "./BoxFourTechPosition";
import InfoTechPosition from "./InfoTechPosition";
import Footer from '../../Footer';
import BoxFiveTechPosition from "./BoxFiveTechPosition";
import BoxSixTechPosition from "./BoxSixTexhPosition";
import BoxSevenTechPosition from "./BoxSevenTechPosition";
import BoxEightTechPosition from "./BoxEightTechPosition";
import Helmet from "../../../Helmet";

const TechPosition=()=>{

    
    return(
      <><div>
        {/* Helmet for meta tags */}
        <Helmet
          title="Discover Tech Positions | Tech Stack"
          description="Explore diverse tech positions and find the right roadmap to accelerate your career in the tech industry."
          keywords="Tech Positions, Discover Now, Tech Careers, Career Roadmaps, Developer Guidance" />
      </div><Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
          <Typography
            sx={{
              textAlign: "center",
              padding: "20px",

              border: "2px solid black",
              borderLeft: "none",
              borderRight: "none",

              fontSize: {
                xs: "1rem",
                sm: "1.3rem",
                md: "1.2rem",
                lg: "1.6rem",
              },
            }}
          >
            <span style={{ fontWeight: "bold" }}>Tech Stack-</span>
            <span style={{ color: "#B31E3E" }}>Choose your career Path</span>

          </Typography>


          <InfoTechPosition />

          <DiscoverTechPosition />



          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "40px"
            }}>
            <BoxOneTechPosition />
            <BoxTwoTechPosition />
            <BoxThreeTechPosition />
            <BoxFourTechPosition />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "40px"
            }}>
            <BoxFiveTechPosition />
            <BoxSixTechPosition />
            <BoxSevenTechPosition />
            <BoxEightTechPosition />
          </Box>



          <Footer />


        </Box></>
    )
}
export default TechPosition;