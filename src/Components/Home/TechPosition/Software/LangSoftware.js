import React,{useState} from 'react';
import { Box, Typography } from "@mui/material";
import Responsive from '../../../Responsive';


const LangSoftware = () => {
    const [showInfo, setShowInfo] = useState(false);

    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          position: "relative", // For tooltip positioning
          marginLeft:Responsive ? "10px" :"90px"
        }}
      >
       
  
        {/* Main Box */}
        <Box
          sx={{
            width: Responsive ? "200px" :"280px",
            height: Responsive ? "10px" : "18px",
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
          <Typography variant="h6" sx={{ fontSize:Responsive ? "15px" :"20px",fontWeight: "16px" ,color: "#94A3B8"}}>
          JAVA
          </Typography>
  
         
        </Box>
      </Box>
  )
}

export default LangSoftware