import React from "react";
import { Container, Typography, Button, Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Container sx={{ padding: 4 }}>
      <Box sx={{ textAlign: "center", marginBottom: 4 }}>
        <Typography variant="h2" gutterBottom>
          Welcome to CGPA Calculator
        </Typography>
        <Typography variant="h6" paragraph>
          Easily calculate your CGPA by entering your grades / dropping grade
          sheets . Manage your previous grades and track your academic
          performance effortlessly.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <Button
            variant="outlined"
            color="primary"
            component={Link}
            to="/calculator"
          >
            Get Started
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            component={Link}
            to="/about"
          >
            Learn More
          </Button>
        </Box>
      </Box>
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h4" gutterBottom textAlign="center">
          Key Features
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: 2,
                border: "1px solid #ddd",
                borderRadius: 2,
                boxShadow: 3,
                backgroundColor: "#000000",
                transition: "box-shadow 0.3s ease, transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.02)",
                  boxShadow: `
            0 0 5px rgba(255, 0, 0, 0.6), /* Red */
            0 0 10px rgba(0, 255, 0, 0.6), /* Green */
            0 0 15px rgba(0, 0, 255, 0.6), /* Blue */
            0 0 20px rgba(255, 255, 0, 0.6) /* Yellow */
          `,
                },
              }}
            >
              <Typography variant="h6" gutterBottom>
                User-Friendly Interface
              </Typography>
              <Typography variant="body1">
                Simple and intuitive design to help you calculate your CGPA with
                ease.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: 2,
                border: "1px solid #ddd",
                borderRadius: 2,
                boxShadow: 3,
                backgroundColor: "#000000",
                transition: "box-shadow 0.3s ease, transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.02)",
                  boxShadow: `
            0 0 5px rgba(255, 0, 0, 0.6), /* Red */
            0 0 10px rgba(0, 255, 0, 0.6), /* Green */
            0 0 15px rgba(0, 0, 255, 0.6), /* Blue */
            0 0 20px rgba(255, 255, 0, 0.6) /* Yellow */
          `,
                },
              }}
            >
              <Typography variant="h6" gutterBottom>
                Grade Management
              </Typography>
              <Typography variant="body1">
                Easily manage and track your previous grades and academic
                records.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: 2,
                border: "1px solid #ddd",
                borderRadius: 2,
                boxShadow: 3,
                backgroundColor: "#000000",
                transition: "box-shadow 0.3s ease, transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.02)",
                  boxShadow: `
            0 0 5px rgba(255, 0, 0, 0.6), /* Red */
            0 0 10px rgba(0, 255, 0, 0.6), /* Green */
            0 0 15px rgba(0, 0, 255, 0.6), /* Blue */
            0 0 20px rgba(255, 255, 0, 0.6) /* Yellow */
          `,
                },
              }}
            >
              <Typography variant="h6" gutterBottom>
                Comprehensive Reports
              </Typography>
              <Typography variant="body1">
                Generate detailed reports on your academic performance over
                time.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: 2,
                border: "1px solid #ddd",
                borderRadius: 2,
                boxShadow: 3,
                backgroundColor: "#000000",
                transition: "box-shadow 0.3s ease, transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.02)",
                  boxShadow: `
            0 0 5px rgba(255, 0, 0, 0.6), /* Red */
            0 0 10px rgba(0, 255, 0, 0.6), /* Green */
            0 0 15px rgba(0, 0, 255, 0.6), /* Blue */
            0 0 20px rgba(255, 255, 0, 0.6) /* Yellow */
          `,
                },
              }}
            >
              <Typography variant="h6" gutterBottom>
                Secure and Private
              </Typography>
              <Typography variant="body1">
                Your data is secure and accessible only by you.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HomePage;
