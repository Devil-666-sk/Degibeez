import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Container,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
// import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    select: '',
    message: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;

    if (name === 'name') {
      const regex = /^[A-Za-z\s]*$/;
      if (regex.test(value) || value === '') {
        setFormData({
          ...formData,
          [name]: value,
        });
      }
    } else if (name === 'phone') {
      const regex = /^[0-9]*$/;
      if (regex.test(value) || value === '') {
        setFormData({
          ...formData,
          [name]: value,
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    setFormData({
      name: '',
      phone: '',
      email: '',
      select: '',
      message: '',
    });
  }

  // Google Maps configuration

  return (
    <Container sx={{ mb: 5 }}>
      <Typography variant='h3' sx={{ fontWeight: 'bold' }} gutterBottom>
        Contact Us
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <form onSubmit={handleSubmit}>
            <TextField
              label='Name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              fullWidth
              margin='normal'
              required
            />
            <TextField
              label='Phone Number'
              name='phone'
              type='tel'
              value={formData.phone}
              onChange={handleChange}
              fullWidth
              margin='normal'
              required
            />
            <TextField
              label='Email'
              name='email'
              type='email'
              value={formData.email}
              onChange={handleChange}
              fullWidth
              margin='normal'
              required
            />
            <FormControl fullWidth margin='normal' required>
              <InputLabel id='select-label'>Select</InputLabel>
              <Select
                labelId='select-label'
                name='select'
                label='Select'
                value={formData.select}
                onChange={handleChange}
              >
                <MenuItem value='seo'>Search Engine Optimization</MenuItem>
                <MenuItem value='smm'>Social Media Marketing</MenuItem>
                <MenuItem value='display Advertise'>
                  Display Advertising
                </MenuItem>
                <MenuItem value='content marketing'>Content Marketing</MenuItem>
                <MenuItem value='ppc'>Pay-Per-Click</MenuItem>
                <MenuItem value='email marketing'>Email Marketing</MenuItem>
                <MenuItem value='orm'>Online Reputation Management</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label='Message'
              name='message'
              value={formData.message}
              onChange={handleChange}
              fullWidth
              margin='normal'
              multiline
              rows={4}
              required
            />
            <Button
              type='submit'
              variant='contained'
              color='primary'
              sx={{
                width: '100%',
                background: 'linear-gradient(to right, #121212, #F1F90B)',
              }}
            >
              Send Message
            </Button>
          </form>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '8px',
              overflow: 'hidden',
              padding: '15px 0 10px 0',
            }}
          >
            <Box
              sx={{
                width: '100%',
                height: '490px',
                borderRadius: '8px',
                overflow: 'hidden',
              }}
            >
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d593.9106829781706!2d76.82393733668518!3d30.638541230491246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feb2b486ba04d%3A0x2555b85046f24e48!2sSushma%20Infinium!5e0!3m2!1sen!2sin!4v1733743494608!5m2!1sen!2sin'
                width='100%'
                height='100%'
                style={{ border: 0 }}
                allowFullScreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ContactForm;
