import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import SEOImage from '../../assets/AboutCardImages/SEO.png';
import SMMImage from '../../assets/AboutCardImages/SMM.png';
import DisplayImage from '../../assets/AboutCardImages/Display Marketing.png';
import ContentImage from '../../assets/AboutCardImages/Content Marketing.png';
import PPCImage from '../../assets/AboutCardImages/PPC.png';
import EmailImage from '../../assets/AboutCardImages/Email Marketing.png';
import ORMImage from '../../assets/AboutCardImages/ORM.png';

const cards = [
  {
    id: 1,
    title: 'Search Engine Optimization (SEO)',
    description:
      'Build up your Internet presence and acquire more yet more relevant visitors to your business website through our tailored SEO solutions and packages.',
    image: SEOImage,
  },
  {
    id: 2,
    title: 'Social Media Marketing (SMM)',
    description:
      'Increase your earnings many fold and expand your enterprise with our accurately planned and highly effective PPC services.',
    image: SMMImage,
  },
  {
    id: 3,
    title: 'Display Advertising',
    description:
      'Get the attention of the highest possible number of viewers on the Internet by placing your brand where it should be. ',
    image: DisplayImage,
  },
  {
    id: 4,
    title: 'Content Marketing',
    description:
      'Bring the content that shapes your business, introduces you to the world, and shows what you are about with our striking content marketing services.',
    image: ContentImage,
  },
  {
    id: 5,
    title: 'Pay-Per-Click (PPC)',
    description:
      'Increase your earnings many fold and expand your enterprise with our accurately planned and highly effective PPC services.',
    image: PPCImage,
  },
  {
    id: 6,
    title: 'Email Marketing',
    description:
      'Boost your business growth with our comprehensive email marketing strategies, designed to deliver targeted and personalized content directly to your audience.With our targeted campaigns, you will see a significant boost in visibility and engagement.Boost engagement with targeted emails. ',
    image: EmailImage,
  },
  {
    id: 7,
    title: 'Online Reputation Management(ORM)',
    description:
      'Take complete possession and discretion of attaining what the outcomes will be on-line through our ORM services and achieve the highest advantage. We focus on building a positive image and effectively handling any negative feedback to maintain your brands credibility and trust.',
    image: ORMImage,
  },
];

const AboutDigiBeez = () => {
  return (
    <Box textAlign={'center'} sx={{ py: 6, mx:{xs:2, md:1} } }>
      {/* Title Section */}
      <Box textAlign='center' mb={6}>
        <Typography variant='h3' mx={{xs:5, md:0}} fontWeight='bold' gutterBottom >
          About DigiBeez
        </Typography>
        <Typography variant='body1' color='textSecondary'  sx={{mx:{xs:1 ,md:15}, textAlign:{xs:'justify', md:'center'}}}>
          Digital marketing is the use of internet-connected devices to support
          marketing communication, involving the use of social media, search
          engines, email, and websites to teach customers and ultimately foster
          business growth based on the well-coordinated application of data
          analysis.
        </Typography>
      </Box>

      {/* Cards Section */}
      <Grid
        container
        spacing={2}
        justifyContent='center'
        sx={{
          minHeight: '60vh', 
          width: '100%', // Change this to your desired width
            // Optional: Set a max width
        mt:10
        }}
      >
        {/* Top 2 cards */}
        <Grid
          container
          item
          xs={12}
          sm={6}
          md={6}
          spacing={4}
          justifyContent='center'
          mb={2}
        >
          {cards.slice(0, 2).map((card) => (
            <Grid item xs={12} sm={6} md={4} lg={4} xl={2} key={card.id}>
              <Card
                sx={{
                  maxheight: 340,
                  height:'auto',
                  width: '100%',
                  maxWidth: 400,
                  boxShadow: 3,
                  borderRadius: 2,
                  textAlign: 'center',
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'scale(1.05)' },
                }}
              >
                <CardMedia
                  component='img'
                  height='200'
                  image={card.image}
                  alt={card.title}
                  sx={{ objectFit: 'contain', p: 2 }}
                />
                <CardContent>
                  <Typography variant='h6' fontWeight='bold' gutterBottom>
                    {card.title}
                  </Typography>
                  <Typography variant='body2' color='textSecondary'>
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Center 3 cards */}
        <Grid
          container
          item
          xs={12}
          sm={6}
          md={8}
          spacing={4}
          justifyContent='center'
          mb={2}
        >
          {cards.slice(2, 5).map((card) => (
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4} key={card.id}>
              <Card
                sx={{
                  maxheight: 340,
                  height:'auto',
                  width: '100%',
                  maxWidth: 400,
                  boxShadow: 3,
                  borderRadius: 2,
                  textAlign: 'center',
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'scale(1.05)' },
                }}
              >
                <CardMedia
                  component='img'
                  height='200'
                  image={card.image}
                  alt={card.title}
                  sx={{ objectFit: 'contain', p: 2 }}
                />
                <CardContent>
                  <Typography variant='h6' fontWeight='bold' gutterBottom>
                    {card.title}
                  </Typography>
                  <Typography variant='body2' color='textSecondary'>
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Bottom 2 cards */}
        <Grid
          container
          item
          xs={12}
          sm={6}
          md={6}
          spacing={4}
          justifyContent='center'
        >
          {cards.slice(5, 7).map((card) => (
            <Grid item xs={12} sm={6} md={4} key={card.id}>
              <Card
                sx={{
                  maxheight: 340,
                  height:'auto',
                  width: '100%',
                  maxWidth: 400,
                  boxShadow: 3,
                  borderRadius: 2,
                  textAlign: 'center',
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'scale(1.05)' },
                }}
              >
                <CardMedia
                  component='img'
                  height='180'
                  image={card.image}
                  alt={card.title}
                  sx={{ objectFit: 'contain', p: 2 }}
                />
                <CardContent>
                  <Typography variant='h6' fontWeight='bold' gutterBottom>
                    {card.title}
                  </Typography>
                  <Typography variant='body2' color='textSecondary'>
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutDigiBeez;
