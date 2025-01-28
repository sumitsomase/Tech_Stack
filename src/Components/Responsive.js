import React from 'react';
import { Typography, Box, Link ,useTheme,useMediaQuery } from "@mui/material";


const Responsive = () => {
     const theme= useTheme();
      const isMobile=useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <></>
  )
}

export default Responsive