import React from "react";
import { Typography, Box, Button,Link } from "@mui/material";
import TextSoftware from "./TextSoftware";

import DiscoverTechPosition from "../../DiscoverTechPosition";

import InfoSoftwareRole from "./InfoSoftwareRole";
import LangSoftware from "./LangSoftware";
import DsaSoftware from "./DsaSoftware";
import GitSoftware from "./GitSoftware";
import CSoftware from "./CSoftware";
import PythonSoftware from "./PythonSoftware";
import FrontendSoftware from "./FrontendSoftware";
import BackendSoftware from "./BackendSoftware";
import CloudSoftware from "./CloudSoftware";
import TestingSoftware from "./TestingSoftware";
import DeploymentSoftware from "./DeploymentSoftware";
import TextTwoSoftware from "./TextTwoSoftware";
import Footer from "../../../Footer";

const SoftwareDeveloper=()=>{
    return(
        <Box
        sx={{
            display:"flex",
            flexDirection:"column",
        }}>
            <TextSoftware/>
            <InfoSoftwareRole/>
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
        marginLeft:"60px"
           
            
            
        }}>
           <LangSoftware/>
           <PythonSoftware/>
           <CSoftware/>
           
            </Box>

            <Box
        sx={{
            display:"flex",
            flexDirection:"row",
            marginTop:"10px",
           
            gap:"20px",
             marginLeft:"150px"
           
           
        }}>
          <DsaSoftware/>
           <GitSoftware/>
           <FrontendSoftware/>
           
            </Box>
            <Box
        sx={{
            display:"flex",
            flexDirection:"row",
            marginTop:"10px",
           
            gap:"20px",
             marginLeft:"150px"
           
           
        }}>
           <BackendSoftware/>
           <CloudSoftware/>
           <TestingSoftware/>
           
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
           <DeploymentSoftware/>
           
           
            </Box>

            </Box>

            <Footer/>

            

        </Box>  
         )
}

export default SoftwareDeveloper;