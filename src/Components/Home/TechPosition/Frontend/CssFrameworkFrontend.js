import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const CssFrameworkFrontend = () => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        position: "relative", // For tooltip positioning
      }}
    >
      {/* Arrow Icon outside the box */}
      <ArrowForwardIcon
        sx={{
          fontSize: "42px",
          color: "black",
          marginBottom: "8px",
          cursor: "pointer",
        }}
      />

      {/* Main Box */}
      <Box
        sx={{
          width: "150px",
          height: "100px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #6a11cb, #2575fc)",
          borderRadius: "16px",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
          color: "#fff",
          padding: "16px",
          textAlign: "center",
          cursor: "pointer",
        }}
        onMouseEnter={() => setShowInfo(true)}
        onMouseLeave={() => setShowInfo(false)}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "8px" }}>
          Css-Frameworks
        </Typography>

        {/* Tooltip or Information Boxes */}
        {showInfo && (
          <Box
            sx={{
              position: "absolute",
              top: "110%",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: "12px",
              background: "transparent",
              zIndex: 1,
            }}
          >
            {/* Individual Framework Boxes */}
            {["Bootstrap", "Tailwind", "Material-UI"].map((framework) => (
              <Box
                key={framework}
                sx={{
                  width: "100px",
                  height: "60px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#fff",
                  color: "#000",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  textAlign: "center",
                  fontWeight: "bold",
                  cursor: "pointer",
                  "&:hover": {
                    background: "#6a11cb",
                    color: "#fff",
                  },
                }}
              >
                {framework}
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default CssFrameworkFrontend;
