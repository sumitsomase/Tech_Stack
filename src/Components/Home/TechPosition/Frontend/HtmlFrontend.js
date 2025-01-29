import React, { useState } from "react";
import { Typography, Box, Link ,useTheme,useMediaQuery } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code"; // Import the 

const HtmlFrontend = () => {
  const theme= useTheme();
  const isMobile=useMediaQuery(theme.breakpoints.down("sm"));
  const [showInfo, setShowInfo] = useState(false);

  return (
    <Box
      sx={{
        width: "150px",
        height: "100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "black",
        borderRadius: "16px",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
        color: "#fff",
        padding: "16px",
        textAlign: "center",
        position: "relative",
        cursor: "pointer",
        marginLeft: isMobile ? "44px" :"90px"
      }}
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
    >
      {/* Icon */}
      <CodeIcon sx={{ fontSize: "32px", marginBottom: "8px" }} />

      <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "8px" }}>
        #HTML
      </Typography>

      {/* Tooltip */}
      {showInfo && (
        <Box
          sx={{
            position: "absolute",
            top: "110%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "200px",
            background: "#fff",
            color: "#000",
            padding: "8px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            zIndex: 1,
            textAlign: "center",
          }}
        >
          HTML (HyperText Markup Language) is the standard language for creating web pages and web applications.
        </Box>
      )}
    </Box>
  );
};

export default HtmlFrontend;
