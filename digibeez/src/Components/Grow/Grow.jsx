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

  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); 
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md')); 
  const radius = isMobile ? 120 : isTablet ? 200 : 300; 

  return (
    <Container maxWidth='lg' sx={{ textAlign: 'center', py: 8, mt: 2 }}>
      {/* Main Title */}
      <Typography
        variant='h5'
        gutterBottom
        sx={{
          fontSize: { xs: '1.4rem', sm: '1.8rem', md: '2rem' },
          fontWeight: 'bold',
          mb: 6,
        }}
      >
        How Can We Help You Grow
      </Typography>

      {/* Description */}
      <Typography
        variant='body1'
        paragraph
        sx={{
          fontSize: { xs: '0.9rem', sm: '1rem' },
          mb: 6, marginX:4
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
          width: `${radius * 2}px`,
          height: `${radius * 2}px`,
          margin: '0 auto',
          mb: 10,
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
              fontSize: { xs: '1.4rem', sm: '1.8rem', md: '2rem' },
              fontWeight: 'bold',
              textShadow: '0px 5px 8px rgba(0,0,0,0.3)',
              marginTop: { xs: '40px', sm: '220px', md: '360px' },
            }}
          >
            Grow Your <br /> Skills and <br /> Business
          </Typography>
        </Box>

        {items.map((item, index) => {
          const angle = (index / items.length) * 360;
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);

          return (
            <Box
              key={index}
              sx={{
                position: 'absolute',
                top: `calc(50% + ${y}px)`,
                left: `calc(50% + ${x}px)`,
                transform: 'translate(-50%, -50%)',

                borderRadius: '50%',
                padding: '10px',
                textAlign: 'center',
                marginTop: { xs: '20px', sm: '100px', md: '180px' },
                width: { xs: '100px', sm: '220px', md: '360px' },
                height: { xs: '100px', sm: '220px', md: '360px' },
                boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.5)',
                transition: 'transform 0.5s ease, box-shadow 0.5s ease',
                '&:hover': {
                  transform: 'translate(-50%, -50%) scale(1.1)',
                  boxShadow: '0px 25px 40px rgba(0, 0, 0, 0.8)',
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
                  marginTop: { xs: '7px', sm: '20px', md: '40px' },
                  display: 'block',
                  fontSize: { xs: '0.6rem', sm: '0.8rem', md: '1.5rem' },
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
