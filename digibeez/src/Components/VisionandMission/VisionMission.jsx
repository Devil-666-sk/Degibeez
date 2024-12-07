import React from 'react';
import { Box, Typography, Grid } from '@mui/material/';
import image1 from '../../assets/VisionMissionImages/Vision.png';
import image2 from '../../assets/VisionMissionImages/Mission.png';

const VisionMission = () => {
  const sections = [
    {
      title: 'Vision for Digital Marketing',
      descriptions: [
        'Enable the clients to have a tight grip on the approaches used in their marketing goals and objectives and make sound decisions resulting from better analysis and creativity combined with technological solutions in advanced marketing.',
        'Improve the eye candy and overall selling propositions of the customers through effective high-impact, trend-compliant advertising products that will satisfy expectations while changing to meet new trends in digital marketing.',
        'Reach targets defined by KPIs and support organizational performance by residing by changes, appraisals, and enhancements as essential adjustments to prosper in the face of fluctuations in market situations.',
      ],
      image: image1,
      reverse: false,
    },
    {
      title: 'Mission for Digital Marketing',
      descriptions: [
        '“We have a responsibility to coordinate innovation with strategy; to create visible IMC campaigns that not only develop solid and sustainable brands but also to interact with the audience leading to loyal and highly interested and long-term customers that are interested in making the advertised product a necessity in their lives.”',
      ],
      image: image2,
      reverse: true,
    },
  ];

  return (
    <Box sx={{ py: 6, px: { xs: 2, md: 8 } }}>
      {/* Main Heading */}
      <Typography
        variant='h4'
        component='h1'
        textAlign='center'
        sx={{
          fontWeight: 'bold',
          mb: 4,
          marginTop: { xs: '-20px', sm: '130px', md: '310px' },
          fontSize: { xs: '28px', md: '36px' },
        }}
      >
        What We are Up to
      </Typography>

      {/* Paragraph Below Heading */}
      <Typography
        variant='body1'
        textAlign='center'
        sx={{
          fontSize: { xs: '16px', md: '18px' },
          mb: 10,
          color: 'text.secondary',
        }}
      >
        At our digital marketing company, our vision is to establish ourselves
        as industry leaders by providing businesses with advanced technology
        tools for growth. We aim to merge innovation and creativity in marketing
        strategies, becoming the go-to agency for companies transitioning to
        digital. Our goal is to deliver exceptional results, helping clients
        gain customers, followers, and sales through tailored solutions. With a
        commitment to innovation and strong, trust-based relationships, we
        strive to meet client demands and drive sustainable success.
      </Typography>

      {sections.map((section, index) => (
        <Grid
          container
          spacing={3}
          alignItems='center'
          justifyContent='center'
          sx={{
            flexDirection: {
              xs: 'column',
              md: section.reverse ? 'row-reverse' : 'row',
            },
            mb: 10,
          }}
          key={index}
        >
          {/* Image and Content on the same line */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              component='img'
              src={section.image}
              alt={`${section.title} Image`}
              sx={{
                width: '100%',
                maxWidth: '400px',
                height: 'auto',
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: { xs: 'center', md: 'left' },
              px: { xs: 2, md: 4 },
            }}
          >
            <Typography
              variant='h5'
              component='h2'
              sx={{ fontWeight: 'bold', mb: 3 }}
            >
              {section.title}
            </Typography>
            {section.descriptions.map((description, i) => (
              <Typography
                variant='body1'
                key={i}
                sx={{ fontSize: { xs: '16px', md: '18px' }, mb: 2 }}
              >
                {description}
              </Typography>
            ))}
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};

export default VisionMission;
