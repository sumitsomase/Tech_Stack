import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const DeploymentFrontend = () => {
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
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", marginBottom: "8px" }}
        >
          #Deployment
        </Typography>

        {/* Tooltip or information box */}
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
            Deployment is the process of making an application or website
            available for use by transferring the code, files, and
            configurations to a server or cloud platform for execution in a live
            environment.{" "}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default DeploymentFrontend;
