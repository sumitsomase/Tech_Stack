import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
 
  Link,
  Grid,
  Container,
  
} from "@mui/material";
import aboutBg from "../Images/aboutBg.webp";
import ourtechstack from "../Images/our-tech-stack.png";
import middleImg from "../Images/aboutmiddle.webp";
import Marquee from "react-fast-marquee";
import Footer from "../Footer";

function About() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          marginTop: { xs: 5, sm: -10 }, // Smaller margin on mobile
          marginLeft: { xs: 0, sm: -10 },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={aboutBg}
          alt="A visually appealing background representing tech learning"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
        />
        <Box
          sx={{
            position: "absolute",

            left: { sm: "15%", md: "20%", lg: "30%" },
            display: "flex",
            justifyContent: "center",
            backgroundColor: "rgba(255, 255, 255, 0.9)", // Semi-transparent background
            padding: { xs: "10px 0px", md: "20px 10px", sm: "10px 7px" }, // Responsive padding
            transform: "skew(-20deg)", // Skewing to create a parallelogram
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            width: { xs: "50%", sm: "70%", md: "60%", lg: "40%" }, // Responsive width
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "black",
              transform: "skew(20deg)",
              fontStyle: "italic",
              fontSize: { xs: "0.8rem", sm: "1.7rem" }, // Responsive font size
              textAlign: "center", // Center text for better readability on smaller screens
            }}
          >
            #Achieve Your <span style={{ fontWeight: 400 }}>Career Goals</span>{" "}
            with <br /> Step-by-Step Tech Learning {">"}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          padding: { xs: "20px", sm: "40px" }, // Responsive padding
          textAlign: "center", // Center text for better alignment on all screens
          marginTop: "20px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "black",
            fontStyle: "italic",
            fontSize: { xs: "1.5rem", sm: "2.5rem" }, // Responsive font size
          }}
        >
          #Who We Are
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex", // Flexbox for alignment
          flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" }, // Stack vertically on small screens
          alignItems: "center", // Center items
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "100%", md: "240%", lg: "240%" }, // Adjust width based on screen size
            height: { xs: "360px", sm: "150%" }, // Adjust height based on screen size
            backgroundColor: "#f0f0f0", // Background color
            border: "5px solid black", // Border style
            borderRadius: "8px", // Rounded corners
            display: "flex", // Flexbox for alignment
            marginLeft: { xs: "0", sm: "0px", lg: "0px" }, // Adjust margin based on screen size
            marginTop: "40px",
            marginBottom: "20px",
            boxShadow: 2, // Shadow effect
            overflow: "hidden", // Hide overflow if needed
            transition: "all 0.3s ease", // Smooth transition for background color change
            "&:hover": {
              backgroundColor: "#F0F0F0", // New background color on hover
              transform: "scale(0.9)", // Slight zoom on hover
              boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.3)",
            },
          }}
        >
          <img
            src={ourtechstack}
            alt="Our tech stack"
            style={{
              width: "100%", // Ensure the image takes full width of the box
              height: "100%", // Ensure the image takes full height of the box
              objectFit: "cover",
            }}
          />
        </Box>

        <Box
          sx={{
            marginLeft: { xs: "0", sm: "0px" }, // Adjust margin based on screen size
            marginTop: { xs: "20px", sm: "30px", lg: "10px" }, // Adjust margin based on screen size
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#181C14",
              lineHeight: 1.4, // Increased line height for better readability
              overflowWrap: "break-word",
              fontSize: {
                xs: "1rem",
                sm: "1.3rem",
                md: "1.2rem",
                lg: "1.6rem",
              }, // Responsive font size
              letterSpacing: "0.02rem", // Slightly increased letter spacing for readability
              padding: { xs: "10px", sm: "10px", md: "10px" }, // Padding for spacing
              textAlign: "justify", // Justify text for clean alignment
            }}
          >
            <span style={{ fontWeight: "bold", fontStyle: "italic" }}>
              Tech Stack
            </span>{" "}
            is an innovative learning path tracker specifically designed for
            Computer Science and IT students. In an era where technology is
            ever-evolving, navigating the vast landscape of skills and knowledge
            can be overwhelming. Tech Stack aims to simplify this journey by
            providing structured learning paths that guide users toward
            mastering essential technologies.
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          marginTop: "8.3%",
        }}
      >
        <img
          src={middleImg}
          alt="A visually appealing background representing tech learning"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
        />
      </Box>

      <Box
        sx={{
          width:{ xs:"50%",sm:"55%",lg:"45%"},
          overflow: "hidden",
          whiteSpace: "nowrap",

          padding: {xs:"0px",sm:"5px",lg:"15px"},
          position: "relative",
          marginLeft: {xs:"23%",sm:"20%",lg:"27%"},
          marginTop: "5%",
        }}
      >
        <Marquee speed={50} pauseOnHover={true}>
          <Typography
            variant="h4"
            sx={{ 
              fontSize: {
                xs: '1.5rem', // Extra small devices (phones)
                sm: '2rem',   // Small devices (tablets)
                md: '2.2rem', // Medium devices (small laptops)
                lg: '2.5rem',   // Large devices (desktops)
              },
              fontWeight: "bold", 
              padding: {xs:"0px",sm:"5px",lg:"20px"}
             }}
          >
            | <span style={{ color: "#B31E3E" }}>Tech Stack</span> | Learning
            Paths | <span style={{ color: "#B31E3E" }}>Growth Journey</span>
          </Typography>
          <Typography
            variant="h4"
            sx={{ 
              fontSize: {
                xs: '1.5rem', // Extra small devices (phones)
                sm: '2rem',   // Small devices (tablets)
                md: '2.2rem', // Medium devices (small laptops)
                lg: '2.5rem',   // Large devices (desktops)
              },
              fontWeight: "bold",
              padding: {xs:"0px",sm:"5px",lg:"20px"} 
            }}
          >
            | Tech Stack |{" "}
            <span style={{ color: "#B31E3E" }}>Learning Paths</span> | Growth
            Journey
          </Typography>
        </Marquee>
      </Box>

      <Box
        sx={{
          display: "flex",
          marginTop: "3%",
          flexDirection: { xs: "column", sm: "column", md: "row" }, // Stack cards vertically on small screens
        }}
      >
        <Card
          sx={{
            width: { xs: "90%", sm: "90%", md: "60%", lg: "60%" }, // Responsive width
            margin: "20px", // Margin between cards
            marginTop: { lg: "5%" },
            borderRadius: "16px", // Rounded corners
            boxShadow: 3, // Shadow effect for depth
            border: "4px solid", // Border width and style
            borderColor: "#181c14", // Replace with your desired color
            transition: "all 0.3s ease", // Smooth transition for background color change
            "&:hover": {
              backgroundColor: "#F0F0F0", // New background color on hover
              transform: "scale(1.05)", // Slight zoom on hover
              boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.3)",
            },
          }}
        >
          <CardContent>
            <Typography
              variant="h4"
              sx={{
                color: "#0B2F9F", // Blue color for strong readability
                lineHeight: 1.4, // Comfortable line spacing
                overflowWrap: "break-word", // Ensure long words break properly
                fontSize: {
                  xs: "1rem",
                  sm: "1.5rem",
                  md: "1.3rem",
                  lg: "1.6rem",
                }, // Responsive font size for different devices
                fontStyle: "italic", // Italic for emphasis
                fontWeight: 300, // Slightly bold for emphasis
                textAlign: "justify", // Justify text for even alignment
                padding: { xs: "10px", sm: "15px", md: "10px" }, // Padding for spacing
                letterSpacing: "0.03rem", // Slightly increased letter spacing
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)", // Subtle text shadow for depth
              }}
            >
              "At the heart of Tech Stack is the belief that education should be
              accessible, engaging, and tailored to individual career
              aspirations. Users can explore various roles, such as Software
              Developer, Frontend Developer, and Data Scientist, each with its
              curated roadmap. These roadmaps are crafted to provide a clear,
              step-by-step progression, ensuring that learners can build their
              skills effectively".
            </Typography>
          </CardContent>
        </Card>

        <Card
          sx={{
            width: { xs: "90%", sm: "90%", md: "60%", lg: "60%" }, // Responsive width
            margin: "20px", // Margin between cards
            marginTop: { lg: "5%" },
            borderRadius: "16px", // Rounded corners
            boxShadow: 3, // Shadow effect for depth
            border: "4px solid", // Border width and style
            borderColor: "#181c14", // Replace with your desired color
            transition: "all 0.3s ease", // Smooth transition for background color change
            "&:hover": {
              backgroundColor: "#F0F0F0", // New background color on hover
              transform: "scale(1.05)", // Slight zoom on hover
              boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.3)",
            },
          }}
        >
          <CardContent>
            <Typography
              variant="h4"
              sx={{
                color: "#0B2F9F", // Blue color for strong readability
                lineHeight: 1.4, // Comfortable line spacing
                overflowWrap: "break-word", // Ensure long words break properly
                fontSize: {
                  xs: "1rem",
                  sm: "1.5rem",
                  md: "1.3rem",
                  lg: "1.6rem",
                }, // Responsive font size for different devices
                fontStyle: "italic", // Italic for emphasis
                fontWeight: 300, // Slightly bold for emphasis
                textAlign: "justify", // Justify text for even alignment
                padding: { xs: "10px", sm: "15px", md: "10px" }, // Padding for spacing
                letterSpacing: "0.03rem", // Slightly increased letter spacing
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)", // Subtle text shadow for depth
              }}
            >
              "One of the standout features of Tech Stack is its curated
              resource library. We meticulously gather high-quality materials
              from trusted platforms, including free online courses, YouTube
              tutorials, and informative articles. This eliminates the noise of
              irrelevant information and allows users to focus on what truly
              matters for their career growth".
            </Typography>
          </CardContent>
        </Card>
      </Box>

      <Box
        sx={{
          display: "flex",
          backgroundColor: "#B31E3E",
          flexDirection: "column",
          marginTop: "10%",
          borderRadius: "5px",
        }}
      >
        <Typography
          variant="h3"
          sx={{

            fontSize: {
              xs: '1.5rem', // Extra small devices (phones)
              sm: '2rem',   // Small devices (tablets)
              md: '2.5rem', // Medium devices (small laptops)
              lg: '3rem',   // Large devices (desktops)
            },
            marginTop: "12px",

            color: "#ffffff",
            fontWeight: "bold",
            fontFamily: "'Avenir Next', Avenir, 'Baloo 2'", // Proper font family syntax
            textAlign: "center",
          }}
        >
          Our Values
        </Typography>

        <Box
          sx={{
            display: "flex",
            marginTop: "12%",
            flexDirection: "row",
            marginBottom: "12%",
           
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: {
                xs: '1.5rem', // Extra small devices (phones)
                sm: '2rem',   // Small devices (tablets)
                md: '2.5rem', // Medium devices (small laptops)
                lg: '3rem',   // Large devices (desktops)
              },
              marginLeft: {xs:"7%",sm:"8%",md:"10%",lg:"12%"},
              color: "white",

              fontFamily: "'Montserrat', sans-serif", // Font family
              transition: "color 0.3s ease, transform 0.3s ease", // Smooth transition for color and scale
              cursor: "pointer", // Change cursor on hover to indicate interactivity
              "&:hover": {
                color: "black", // Gold color on hover
                transform: "scale(1.05)", // Slight zoom on hover
              },
            }}
          >
            Teamwork
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontSize: {
                xs: '1.5rem', // Extra small devices (phones)
                sm: '2rem',   // Small devices (tablets)
                md: '2.5rem', // Medium devices (small laptops)
                lg: '3rem',   // Large devices (desktops)
              },
              marginLeft: {xs:"7%",sm:"8%",md:"10%",lg:"12%"},
              color: "white",

              fontFamily: "'Montserrat', sans-serif", // Proper font family syntax
              transition: "color 0.3s ease, transform 0.3s ease", // Smooth transition for color and scale
              cursor: "pointer", // Change cursor on hover to indicate interactivity
              "&:hover": {
                color: "black", // Gold color on hover
                transform: "scale(1.05)", // Slight zoom on hover
              },
            }}
          >
            Integrity
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontSize: {
                xs: '1.5rem', // Extra small devices (phones)
                sm: '2rem',   // Small devices (tablets)
                md: '2.5rem', // Medium devices (small laptops)
                lg: '3rem',   // Large devices (desktops)
              },
              marginLeft: {xs:"7%",sm:"8%",md:"10%",lg:"12%"},
              color: "white",

              fontFamily: "'Montserrat', sans-serif", // Proper font family syntax
              transition: "color 0.3s ease, transform 0.3s ease", // Smooth transition for color and scale
              cursor: "pointer", // Change cursor on hover to indicate interactivity
              "&:hover": {
                color: "black", // Gold color on hover
                transform: "scale(1.05)", // Slight zoom on hover
              },
            }}
          >
            Excellence
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: "#ffffff",
          color: "#B31E3E",
          padding: "20px 0",
          position: "flex",
          bottom: 0,
          width: "100%",
          marginTop: "5%",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={{xs:5,lg:25}} justifyContent="space-between">
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" gutterBottom
              sx={{
                color:"black"
              }}>
                Tech Stack
              </Typography>
              <Typography variant="body2">
                Learn and track your technology stack,<br/> get the best free
                resources for CS and IT roles.
              </Typography>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Typography variant="h6" gutterBottom
              sx={{
                color:"black"
              }}>
                Resources
              </Typography>
              <Link href="/about" color="inherit" underline="hover">
                About Us
              </Link>
              <br />
              <Link href="/contact" color="inherit" underline="hover">
                Contact Us
              </Link>
              <br />
              <Link href="/privacy-policy" color="inherit" underline="hover">
                Privacy Policy
              </Link>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Typography variant="h6" gutterBottom
              sx={{
                color:"black"
              }}>
                Follow Us
              </Typography>
              
              <Link
                href="https://instagram.com/techstack"
                color="inherit"
                underline="hover"
              >
                Instagram
              </Link>
              <br />
              <Link
                href="https://linkedin.com/company/techstack"
                color="inherit"
                underline="hover"
              >
                LinkedIn
              </Link>
            </Grid>
          </Grid>

         
        </Container>
      </Box>

      <Footer/>
    </Box>
  );
}

export default About;
