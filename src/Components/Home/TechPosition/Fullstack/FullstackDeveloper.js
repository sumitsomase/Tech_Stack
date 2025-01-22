import React from 'react';
import { Typography, Box, Button, Link } from "@mui/material";

import TextFullstack from './TextFullstack'

import DiscoverTechPosition from '../../DiscoverTechPosition';
import InfoFullstack from './InfoFullsatck';
import Footer from '../../../Footer';
import LangFullstack from "./LangFullstack";
import ApiFullstack from "./ApiFullstack";
import DatabaseFullstack from "./DatabaseFullstack";
import FrameworkFullstack from "./FrameworkFullstack";
import BackendFrameworkFullstack from "./BackendFrameworkFullstack";
import TextTwoSoftware from "../Software/TextTwoSoftware";

const FullstackDeveloper = () => {
  return (
    <Box
           sx={{
               display:"flex",
               flexDirection:"column",
           }}>
            <TextFullstack/>
           <InfoFullstack/>
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

         <LangFullstack/>
         <FrameworkFullstack/>
           

           </Box>
           <Box
        sx={{
            display:"flex",
            flexDirection:"row",
            marginTop:"40px",
            gap:"20px",
        marginLeft:"60px"
           
            
            
        }}>

         <BackendFrameworkFullstack/>
         <DatabaseFullstack/>
           

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

          <ApiFullstack/>
           

           </Box>
           </Box>


            <Footer/>
            

            </Box>
  )
}

export default FullstackDeveloper