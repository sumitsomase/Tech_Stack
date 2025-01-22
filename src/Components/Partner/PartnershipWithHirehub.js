import React from "react";
import { Typography, Box } from "@mui/material";

const PartnershipWithHirehub = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "300px",
        background: "black", // Gradient background
        color: "#fff",
        padding: "40px",
        borderRadius: "12px", // Rounded corners
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)", // Subtle shadow
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          fontSize: {
            xs: "1.5rem",
            sm: "2rem",
            md: "2.5rem",
            lg: "3rem",
          }, // Responsive font sizes
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        Our Partner
      </Typography>

      <Typography
        sx={{
          fontSize: {
            xs: "1rem",
            sm: "1.2rem",
            md: "1.3rem",
            lg: "1.5rem",
          },
          textAlign: "center",
          maxWidth: "800px",
          lineHeight: "1.6",
        }}
      >
        We're proud to partner with <strong>HireHub</strong>, a platform
        dedicated to empowering students and professionals with tools to build
        ATS-friendly resumes, explore career opportunities, and access
        educational resources.
      </Typography>
    </Box>
  );
};

export default PartnershipWithHirehub;
