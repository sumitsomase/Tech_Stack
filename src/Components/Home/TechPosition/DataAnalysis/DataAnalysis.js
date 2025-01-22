import React from 'react';
import { Typography, Box, Button, Link } from "@mui/material";

import DiscoverTechPosition from '../../DiscoverTechPosition';

import Footer from '../../../Footer';

import TextTwoSoftware from '../Software/TextTwoSoftware';
import TextAnalysis from './TextAnalysis';
import InfoAnalysis from './InfoAnalysis';
import LangAnalysis from './LangAnalysis';
import BiTools from './BiTools';
import ToolAnalysis from './ToolAnalysis';

const  DataAnalysis = () => {
  return (
    <Box
           sx={{
               display:"flex",
               flexDirection:"column",
             

           }}>

<Box
           sx={{
               display:"flex",
               flexDirection:"column",
              border:"1px solid black",
              borderLeft:"none",
              borderRight:'none',
               borderRadius:"6px",
               padding:"50px"
               

           }}>
           <TextAnalysis/>
            <InfoAnalysis/>
          
           
            </Box>
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

         <LangAnalysis/>
        <BiTools/>
           

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

        <ToolAnalysis/>
        
           

           </Box>

           </Box>


            <Footer/>
            

            </Box>

  )
}



export default DataAnalysis