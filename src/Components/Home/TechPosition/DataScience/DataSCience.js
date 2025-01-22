import React from "react";
import { Typography, Box, Button,Link } from "@mui/material";


import DiscoverTechPosition from "../../DiscoverTechPosition";



import TextTwoSoftware from "../Software/TextTwoSoftware";

import Footer from "../../../Footer";
import PyhtonScience from "./PythonScience";
import RScience from "./RScience";
import MathScience from "./MathScience";
import Data from "./Data";
import MachinScience from "./Machinscience";
import Deep from "./Deep";
import Visualization from "./Visualization";
import Nlp from "./Nlp";
import Big from "./Big";
import Model from "./Model";
import TextScience from "./TextScience";
import InfoDataScience from "./InfoDatascience";

const DataSCience=()=>{
    return(
        <Box
        sx={{
            display:"flex",
            flexDirection:"column",
        }}>
            <TextScience/>
            <InfoDataScience/>
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
            marginTop:"100px",
            gap:"20px",
        marginLeft:"150px"
           
            
            
        }}>
           <PyhtonScience/>
           <RScience/>
           <MathScience/>
           
            </Box>

            <Box
        sx={{
            display:"flex",
            flexDirection:"row",
            marginTop:"10px",
           
            gap:"20px",
             marginLeft:"150px"
           
           
        }}>
          <Data/>
           <MachinScience/>
          <Deep/>
           
            </Box>
            <Box
        sx={{
            display:"flex",
            flexDirection:"row",
            marginTop:"10px",
           
            gap:"20px",
             marginLeft:"150px"
           
           
        }}>
           <Visualization/>
          <Nlp/>
          <Big/>
           
            </Box>
            <Box
        sx={{
            display:"flex",
            flexDirection:"row",
            marginTop:"10px",
           
            gap:"20px",
             marginLeft:"150px",
             marginBottom:"100px"
           
           
        }}>
          <Model/>
           
           
            </Box>

            </Box>

            <Footer/>

            

        </Box>  
         )
}

export default DataSCience;