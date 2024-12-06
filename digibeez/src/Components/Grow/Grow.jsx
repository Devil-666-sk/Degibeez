import React from 'react';
import {
  Box,
  Typography,
  Container,
  useTheme,
  useMediaQuery,
} from '@mui/material';

import Img1 from '../../assets/GrowImages/Img-1.png';
import Img2 from '../../assets/GrowImages/Img-2.png';
import Img3 from '../../assets/GrowImages/Img-3.png';
import Img4 from '../../assets/GrowImages/Img-4.png';

const Grow = () => {
  const items = [
    { title: 'Get more Leads', img: Img1 },
    { title: 'Make More Sales', img: Img2 },
    { title: 'Build Brand Awareness', img: Img3 },
    { title: 'Upskills your Team', img: Img4 },
  ];

  // Theme-based breakpoints
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Mobile view
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md')); // Tablet view

  const radius = isMobile ? 120 : isTablet ? 200 : 300; // Consistent radius logic

  return (
    <Container
      maxWidth='lg'
      sx={{ textAlign: 'center', py: 6, mt: 4 }} // Consistent padding and margin
    >
      {/* Main Title */}
      <Typography
        variant='h4'
        gutterBottom
        sx={{
          fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' }, // Responsive font size
          mb: 4, // Bottom margin
        }}
      >
        How Can We Help You Grow
      </Typography>

      {/* Description */}
      <Typography
        variant='body1'
        paragraph
        sx={{
          fontSize: { xs: '0.9rem', sm: '1rem' }, // Adjust font size for smaller screens
          mb: 6, // Bottom margin
        }}
      >
        As since we are ‘Digital First’ in every aspect of our lives, approach,
        solutions, and understanding, every single one of our digital marketing
        solution is based upon few yet crucial elements what we can better call
        ‘‘building blocks’ for the digital business plan of our clients. We
        assess the things and tailor recommendations from your business
        objectives, stage of the digital setup, and the competition. With our
        creative and result-oriented solutions, we ensure that you will:
      </Typography>

      {/* Circular Layout */}
      <Box
        sx={{
          position: 'relative',
          width: `${radius * 2}px`, // Dynamic diameter
          height: `${radius * 2}px`, // Dynamic diameter
          margin: '0 auto', // Center alignment
          mb: 10, // Add margin below the layout
        }}
      >
        {/* Center Heading */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            zIndex: 10,
          }}
        >
          <Typography
            variant='h5'
            sx={{
              fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' }, // Responsive heading size
              fontWeight: 'bold',
              textShadow: '0px 2px 4px rgba(0,0,0,0.3)',
              marginTop: { xs: '40px', sm: '220px', md: '360px' },
            }}
          >
            Grow Your Skills and Business
          </Typography>
        </Box>

        {items.map((item, index) => {
          const angle = (index / items.length) * 360; // Calculate angle for each card
          const x = radius * Math.cos((angle * Math.PI) / 180); // X-coordinate
          const y = radius * Math.sin((angle * Math.PI) / 180); // Y-coordinate

          return (
            <Box
              key={index}
              sx={{
                position: 'absolute',
                top: `calc(50% + ${y}px)`,
                left: `calc(50% + ${x}px)`,
                transform: 'translate(-50%, -50%)',
                borderRadius: '50%',
                background: 'linear-gradient(to bottom, #fdd835, #fbc02d)',
                padding: '10px',
                textAlign: 'center',
                marginTop: { xs: '20px', sm: '100px', md: '180px' },
                width: { xs: '100px', sm: '220px', md: '360px' }, // Dynamic card width
                height: { xs: '100px', sm: '220px', md: '360px' }, // Dynamic card height
                boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translate(-50%, -50%) scale(1.1)',
                  boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.5)',
                },
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                style={{
                  maxWidth: '100%',
                  borderRadius: '50%',
                }}
              />
              <Typography
                variant='caption'
                sx={{
                  mt: 1,
                  display: 'block',
                  fontSize: { xs: '0.6rem', sm: '0.8rem', md: '1rem' },
                }}
              >
                {item.title}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Container>
  );
};

export default Grow;
