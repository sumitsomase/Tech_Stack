import React,{useState} from 'react';
import { Box, Typography } from "@mui/material";


const FrameworkWeb = () => {
    const [showInfo, setShowInfo] = useState(false);

    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          position: "relative", // For tooltip positioning
          marginLeft:"65px"
        }}
      >
       
  
        {/* Main Box */}
        <Box
          sx={{
            width: "280px",
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
          transition: "border-color 0.3s ease", // Smooth transition effect
            "&:hover": {
              borderColor: "#872341", // Brighter border color on hover
            },
          }}
          
        >
          <Typography variant="h6" sx={{ fontSize:"20px",fontWeight: "16px" ,color: "#94A3B8"}}>
          Frontend Frameworks 
          </Typography>
  
         
        </Box>

        <Box 
        sx={{
            display: "flex",
            flexDirection: "row",
            border:"1px solid red",
            marginLeft:"10px",
            borderTop:"none",
            borderBottom:"none",
            borderRight:"none",
            height:"230px"

            
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
         React.js
          </Typography>
          <Typography variant="h6" sx={{ fontSize:"20px",fontWeight: "16px" ,color: "#4B5556"}}>
          Vue.js
          </Typography>
          <Typography variant="h6" sx={{ fontSize:"20px",fontWeight: "16px" ,color: "#4B5556"}}>
          Angular
          </Typography>
          <Typography variant="h6" sx={{ fontSize:"20px",fontWeight: "16px" ,color: "#4B5556"}}>
         Bootstrap
          </Typography>

          </Box>
  
        </Box>
      </Box>
  )
}

export default FrameworkWeb;