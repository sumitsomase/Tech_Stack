import React from 'react';
import { Typography, Box, Button, Link } from "@mui/material";
import TextWeb from './TextWeb';
import DiscoverTechPosition from '../../DiscoverTechPosition';
import InfoWeb from './InfoWeb';
import ApiWeb from "./ApiWeb";
import Footer from '../../../Footer';
import LangWeb from "./LangWeb";
import FrameworkWeb from "./FrameworkWeb";
import DatabaseWeb from "./DatabaseWeb";
import TextTwoSoftware from '../Software/TextTwoSoftware';

const WebDeveloper = () => {
  return (
    <Box
           sx={{
               display:"flex",
               flexDirection:"column",
           }}>
           <TextWeb/>
            <InfoWeb/>
          
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
            flexDirection:"row",
            marginTop:"60px",
            gap:"20px",
        marginLeft:"60px"
           
            
            
        }}>

         <LangWeb/>
         <FrameworkWeb/>
           

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

        <DatabaseWeb/>
        <ApiWeb/>
           

           </Box>

           </Box>


            <Footer/>
            

            </Box>

  )
}

export default WebDeveloper