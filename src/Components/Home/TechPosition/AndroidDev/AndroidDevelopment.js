import React from 'react';
import { Typography, Box, Button, Link } from "@mui/material";
import TextAndroid from './TextAndroid';
import DiscoverTechPosition from '../../DiscoverTechPosition';
import InfoAndroid from './InfoAndroid';
import Footer from '../../../Footer'
import ToolAndroid from './ToolAndroid';
import ApiAndroid from "./ApiAndroid";
import DatabaseAndroid from "./DatabaseAndroid";
import LangAndroid from "./LangAndroid";
import TextTwoSoftware from "../Software/TextTwoSoftware";
import FrameworkAndroid from './FrameworkAndoid';

const AndroidDevelopment = () => {
  return (
    <Box
           sx={{
               display:"flex",
               flexDirection:"column",
           }}>
            <TextAndroid/>
            <InfoAndroid/>
          
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

         <LangAndroid/>
         <FrameworkAndroid/>
           

           </Box>
           <Box
        sx={{
            display:"flex",
            flexDirection:"row",
            marginTop:"40px",
            gap:"20px",
        marginLeft:"60px"
           
            
            
        }}>

         <DatabaseAndroid/>
         <ApiAndroid/>
           

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

          <ToolAndroid/>
           

           </Box>
           </Box>


            <Footer/>
            
            </Box>
  )
}

export default AndroidDevelopment