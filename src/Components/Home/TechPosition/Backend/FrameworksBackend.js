import React,{useState} from 'react';
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";


const FrameworkBackend = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [showInfo, setShowInfo] = useState(false);

    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          position: "relative", 
          marginLeft:isMobile ? "0px" : "90px",
          width: isMobile ? "100%" : "auto",
        }}
      >
       
  
        {/* Main Box */}
        <Box
          sx={{
            width: isMobile ? "100%" : "280px",
            height: "18px",
            display: "flex",
            flexDirection: "column",
            
            justifyContent: "center",
            backgroundColor:"#OF172A",
            border: "0.5px solid rgb(148 163 184)",
           borderRadius:"6px",
            
            padding: "16px",
            
            cursor: "pointer",
            fontFamily: "Arial, sans-serif",
          transition: "border-color 0.3s ease", 
            "&:hover": {
              borderColor: "#872341", 
            },
          }}
          
        >
          <Typography variant="h6" sx={{ fontSize:"20px",fontWeight: "16px" ,color: "#94A3B8"}}>
          Frameworks
          </Typography>
         
        </Box>

        <Box 
        sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            border:"1px solid red",
            marginLeft: isMobile ? "0px" : "10px",
            borderTop:"none",
            borderBottom:"none",
            borderRight:"none",
            height: isMobile ? "auto" : "230px",
            padding: isMobile ? "10px" : "0px",
            width: isMobile ? "100%" : "auto",
            
        }}
        >
            <Box
            sx={{
               display:"flex",
               flexDirection:"column",
               marginLeft:"20px",
               gap:"30px"
            }}>
            <Typography variant="h6" sx={{ fontSize:"20px",fontWeight: "16px" ,color: "#4B5556"}}>
         Next.JS
          </Typography>
          <Typography variant="h6" sx={{ fontSize:"20px",fontWeight: "16px" ,color: "#4B5556"}}>
          Django
          </Typography>
          <Typography variant="h6" sx={{ fontSize:"20px",fontWeight: "16px" ,color: "#4B5556"}}>
         Springboot
          </Typography>
          <Typography variant="h6" sx={{ fontSize:"20px",fontWeight: "16px" ,color: "#4B5556"}}>
        Laravel
          </Typography>

          </Box>
  
        </Box>
      </Box>
  )
}

export default FrameworkBackend;