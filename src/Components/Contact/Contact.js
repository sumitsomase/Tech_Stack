import React, { useState } from "react";
import { Box, Typography, TextField, Button, Alert } from "@mui/material";
import Footer from "../Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Simple validation
    if (!name || !email || !message) {
      setError("All fields are required");
      setSuccess(false);
      return;
    }

    // Reset error and show success message
    setError("");
    setSuccess(true);

    // Clear the form fields
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        
        background: "black",
        color: "#fff",
      }}
    >
     

      <Typography
        sx={{
          fontSize: "1.2rem",
          textAlign: "center",
          marginBottom: "20px",
          marginTop:"20px",
          maxWidth: "600px",
          lineHeight: "1.6",
        }}
      >
        Feel free to reach out to us with any questions or feedback. We’re here
        to help! You can also email us directly at{" "}
        <span style={{ fontWeight: "bold" }}>sumitsomase@gmail.com</span>.
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          maxWidth: "500px",
          width: "100%",
          backgroundColor: "#fff",
          borderRadius: "12px",
          padding: "20px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
          marginTop:"20px"
        }}
      >
        {error && <Alert severity="error">{error}</Alert>}
        {success && <Alert severity="success">Message sent successfully!</Alert>}

        <TextField
          fullWidth
          label="Your Name"
          name="name"
          variant="outlined"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          label="Your Email"
          name="email"
          variant="outlined"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          label="Message"
          name="message"
          variant="outlined"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
        />
        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "#6a11cb",
            "&:hover": {
              backgroundColor: "#2575fc",
            },
          }}
        >
          Send Message
        </Button>
      </Box>
      <Footer/>
    </Box>
  );
};

export default Contact;
