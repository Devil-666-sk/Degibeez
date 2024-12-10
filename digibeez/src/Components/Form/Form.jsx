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
import Grid from '@mui/material/Grid'; 
// import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { renderToStaticMarkup } from 'react-dom/server';

// Fix default Leaflet icons
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// Create a custom icon using React Icon
const createCustomIcon = () => {
  const iconMarkup = renderToStaticMarkup(
    <FaMapMarkerAlt style={{ color: 'red', fontSize: '30px' }} />
  );
  const iconUrl = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
    iconMarkup
  )}`;
  return new L.Icon({
    iconUrl,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
  });
};

// FlyToLocation component to center the map
const FlyToLocation = ({ position }) => {
  const map = useMap();
  if (position) {
    map.flyTo(position, 15, { animate: true });
  }
  return null;
};

// Main Component combining both ContactForm and Map
const ContactMap = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    select: '',
    message: '',
  });
  const [userPosition, setUserPosition] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
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
  };

  const handleSubmit = (e) => {
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

      <Grid container spacing={4} direction={{ xs: 'column', md: 'row' }}>
        {/* Contact Form Section */}
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

        {/* Map Section */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: '100%',
              height: '100%',
              borderRadius: '8px',
              overflow: 'hidden',
              padding: "15px 0 10px 0"
            }}
          >
            <Box
              sx={{
                width: '100%',
                height: '450px',
                borderRadius: '8px',
                overflow: 'hidden',
              }}
            >
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d593.9106829781706!2d76.82393733668518!3d30.638541230491246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feb2b486ba04d%3A0x2555b85046f24e48!2sSushma%20Infinium!5e0!3m2!1sen!2sin!4v1733743494608!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactMap;

export default ContactForm