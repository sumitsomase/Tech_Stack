import React from "react";
import { Typography, Box, Button,Link, useMediaQuery, useTheme } from "@mui/material";
import TextBackend from "./TextBackend";
import InfoBackend from "./Infobackend";
import DiscoverTechPosition from "../../DiscoverTechPosition";
import TextTwoSoftware from "../Software/TextTwoSoftware";
import LangBackend from "./LangBackend";
import FrameworkBackend from "./FrameworksBackend";
import DatabaseBackend from "./DatabaseBackend";
import ApiBackend from "./ApiBackend";
import ToolBackend from "./ToolBackend";
import Footer from '../../../Footer';

const BackendDeveloper = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
           sx={{
               display:"flex",
               flexDirection:"column",
           }}>

            <TextBackend/>
            <InfoBackend/>
            <DiscoverTechPosition/>

            <Box
        sx={{
            display:"flex",
            flexDirection:"Column",
            backgroundColor:"#000000", 
            marginBottom:"50px",
            marginTop:"50px",
        }}>

            <TextTwoSoftware/>
            <Box
        sx={{
            display:"flex",
            flexDirection: isMobile ? "column" :"row",
            marginTop:"60px",
            gap:"20px",
            marginLeft:"60px"
           
            
            
        }}>

          <LangBackend/>
          <FrameworkBackend/>
           

           </Box>
           <Box
        sx={{
            display:"flex",
            flexDirection: isMobile ? "column" :"row",
            marginTop:"40px",
            gap:"20px",
        marginLeft:"60px"
           
            
            
        }}>

          <DatabaseBackend/>
          <ApiBackend/>
           

           </Box>

           <Box
        sx={{
            display:"flex",
            flexDirection:"row",
            marginTop:"40px",
            gap:"20px",
        marginLeft:"60px",
        marginBottom:"40px"
           
            
            
        }}>

          <ToolBackend/>
           

           </Box>
           </Box>


            <Footer/>
            

              </Box>
  )
}

export default BackendDeveloper