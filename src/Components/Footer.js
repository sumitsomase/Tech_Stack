import React from 'react';
import { Typography, Box ,Link } from '@mui/material';


const Footer = () => {
  return (
    <Box sx={{ marginTop:'50px', padding: '10px', textAlign: 'center' }}>
      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
        | Learning Paths | <span style={{ color: "#B31E3E" }}>Tech Stack</span>  | Growth Journey |
      </Typography>
      <Box mt={4}>
            <Typography variant="body2" align="center" >  
              {"Copyright © "}
              <Link sx={{ textDecoration: "none",}} color="inherit" href="https://techstack.com/">
                Tech Stack
              </Link>{" "}
              {new Date().getFullYear()}.
            </Typography>
          </Box>
    </Box>
  );
};

export default Footer;
