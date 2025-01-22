import React from "react";
import { Typography, Box, Link } from "@mui/material";

const DiscoverTechPosition=()=>{
    return(
        <Box
        sx={{
            isplay: "flex",
        flexDirection: "column",
        
        
        
      }}
        >
             <Typography
                  sx={{

                   marginTop:"15px",
                    
                   
                    
                    fontSize: {
                      xs: "1rem",
                      sm: "1.3rem",
                      md: "1.2rem",
                      lg: "1.6rem",
                    }, 
                  }}
                >
                  <span style={{fontWeight:"bold",color:"#B31E3E"}}>Discover</span><span style={{color:"black"}}> Now</span>
                  
            
                </Typography>

        </Box>
    )
}

export default DiscoverTechPosition;