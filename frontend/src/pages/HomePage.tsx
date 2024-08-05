import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Container sx={{ padding: 4 }}>
      <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
        <Typography variant="h2" gutterBottom>
          Welcome to CGPA Calculator
        </Typography>
        <Typography variant="h6" paragraph>
          Easily calculate your CGPA by entering your grades / dropping grade sheets . Manage your previous grades and track your academic performance effortlessly.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Button variant="outlined" color="primary" component={Link} to="/calculator">
            Get Started
          </Button>
          <Button variant="outlined" color="secondary" component={Link} to="/about">
            Learn More
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default HomePage;
