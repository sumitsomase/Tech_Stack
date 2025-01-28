import React from "react";
import { Typography, Box, Button,Link } from "@mui/material";
import TextFrontend from "./TextFrontend";
import DiscoverTechPosition from "../../DiscoverTechPosition";
import HtmlFrontend from "./HtmlFrontend";
import CssFrontend from "./CssFrontend";
import JavascriptFrontend from "./JavascriptFrontend";
import GitFrontend from "./GitFrontend";
import CssFrameworkFrontend from "./CssFrameworkFrontend";
import ReactFrontend from "./ReactFrontend";
import InfoFrontendDevRole from "./InfoFrontendDevRole";
import Footer from "../../../Footer";
import AngularFrontend from "./AngularFrontend";
import ApiFrontend from "./ApiFrontend";
import StateManageFrontend from "./StateManageFrontend";
import DeploymentFrontend from "./DeploymentFrontend";
import Responsive from "../../../Responsive";

const FrontendDeveloper=()=>{

    return(
        <Box
        sx={{
            display:"flex",
            flexDirection:"column",
        }}>
            <TextFrontend/>
            <InfoFrontendDevRole/>
            <DiscoverTechPosition/>
            <Box
        sx={{
            display:"flex",
            flexDirection: Responsive ? "column" : "row",
            marginTop:"50px",
            gap:"10px",
            
        }}>
            <HtmlFrontend/>
            <CssFrontend/>
            <JavascriptFrontend/>
            <GitFrontend/>
            <CssFrameworkFrontend/>
            </Box>


            <Box
        sx={{
            display:"flex",
            flexDirection: Responsive ? "column" :"row",
            marginTop: Responsive ? "90px" :"150px",
            gap:"10px",
            marginBottom:"150px",
            marginLeft:{xs : "160px"},
            
            
        }}>
            <ReactFrontend/>
            <AngularFrontend/>
            <ApiFrontend/>
            <StateManageFrontend/>
            <DeploymentFrontend/>
            </Box>

            <Footer/>


           

            
            
        </Box>
    )
        
}
export default FrontendDeveloper;