import React from "react";
import { Typography, Box } from "@mui/material";

const InfoAndroid = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row", // Arranges the sections side by side
        width: "100%",
        marginTop: "10px",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          padding: "40px",
          marginTop: "50px",
          fontSize: {
            xs: "1rem",
            sm: "1.3rem",
            md: "1.2rem",
            lg: "1.6rem",
          },
        }}
      >
        <span
          style={{
            color: "#4B5556",
            fontSize: "18px",
            lineHeight: "1.6",
            fontFamily: "Arial, sans-serif",
            fontWeight: "500",
          }}
        >
          <p>
            The Android Developer Roadmap is your comprehensive guide to
            mastering Android app development. It covers foundational concepts
            like Java and Kotlin programming, Android Studio setup, and
            understanding the Android SDK. You'll learn about core components
            such as Activities, Fragments, Services, and Broadcast Receivers,
            as well as the Android lifecycle and navigation architecture.
          </p>
        </span>
      </Typography>

      <Typography
        sx={{
          textAlign: "center",
          padding: "40px",
          marginTop: "50px",
          border: "1px solid red",
          borderTop: "none", // Hide the top border
          borderBottom: "none",
          borderRight: "none",
          fontSize: {
            xs: "1rem",
            sm: "1.3rem",
            md: "1.2rem",
            lg: "1.6rem",
          },
        }}
      >
        <span
          style={{
            color: "#4B5556",
            fontSize: "18px",
            lineHeight: "1.6",
            fontFamily: "Arial, sans-serif",
            fontWeight: "500",
          }}
        >
          <p>
            The roadmap includes advanced topics like Jetpack libraries,
            MVVM/MVP architecture, RecyclerView, Room database, and dependency
            injection with Dagger or Hilt. You'll also explore modern Android
            practices such as Compose for UI design and Coroutines/Flow for
            asynchronous programming. With resources like video tutorials,
            hands-on projects, and deployment strategies, you'll gain the skills
            to create user-friendly, performant, and scalable Android
            applications. Start your journey today to become a skilled Android
            Developer and thrive in the mobile app development industry!
          </p>
        </span>
      </Typography>
    </Box>
  );
};

export default InfoAndroid;
