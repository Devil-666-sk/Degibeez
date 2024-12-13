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
// import Box from '@mui/material/Grid2';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
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
  };

  const handleShowLocation = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser');
      return;
    }
    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserPosition([latitude, longitude]);
        setLoading(false);
      },
      (error) => {
        alert('Unable to retrieve your location');
        setLoading(false);
      }
    );
  };

  const sushmaInfiniumCoords = [30.6387037, 76.8233459];
  const userLocationIcon = createCustomIcon();
  const sushmaInfiniumIcon = createCustomIcon();

  return (
    <Box sx={{ mb: 5, mx: { xs: 3, md: 15 } }}>
      <Typography
        textAlign={'center'}
        variant='h3'
        sx={{ fontWeight: 'bold' }}
        gutterBottom
      >
        Contact Us
      </Typography>

      <Box display={'flex'} flexDirection={{xs:'column',md:'row'}} gap={'50px'} >
        {/* Contact Form Section */}
        <Box item xs={12} md={6} width={{xs:'100%',lg:'50%'}}>
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
        </Box>

        {/* Map Section */}
        <Box item xs={12} md={6} width={{xs:'100%',lg:'50%'}}>
          <Box
            sx={{
              width: '100%',
              height: '100%',
              borderRadius: '8px',
              overflow: 'hidden',
              
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.7)',
            }}
          >
            <Box
              sx={{
                width: '100%',
                height: {xs:'314px',sm:'500px'},
                borderRadius: '8px',
                overflow: 'hidden',
              }}
            >
              <MapContainer
                center={sushmaInfiniumCoords}
                zoom={17}
                style={{ width: '100%', height: '100%' }}
                zoomAnimation={true}
              >
                <TileLayer
                  url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                  attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                />
                <Marker
                  position={sushmaInfiniumCoords}
                  icon={sushmaInfiniumIcon}
                >
                  <Popup>
                    <Typography>Sushma Infinium, Zirakpur</Typography>
                  </Popup>
                </Marker>
                {userPosition && (
                  <>
                    <FlyToLocation position={userPosition} />
                    <Marker position={userPosition} icon={userLocationIcon}>
                      <Popup>
                        <Typography>You are here!</Typography>
                      </Popup>
                    </Marker>
                  </>
                )}
              </MapContainer>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactMap;
