import React from 'react';
import {
  Box,
  Container,
  Typography,
  Link,
  useTheme,
  useMediaQuery,
  Grid,
} from '@mui/material';
import { Facebook, Twitter, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const quickLinks = [
    { title: 'Home', href: '#' },
    { title: 'About Us', href: '#' },
    { title: 'Services', href: '#' },
    { title: 'Contact', href: '#' },
  ];
  const SEOLinks = [
    { title: 'SEO Services', href: '#' },
    { title: 'Local SEO', href: '#' },
    { title: 'SEO Reseller', href: '#' },
    { title: 'SEO Company India', href: '#' },
  ];
  const SMMLinks = [
    { title: 'Social Media Marketing', href: '#' },
    { title: 'Facebook Marketing', href: '#' },
    { title: 'Email Marketing', href: '#' },
  ];
  const PPCLinks = [
    { title: 'PPC Services', href: '#' },
    { title: 'PPC Reseller', href: '#' },
    { title: 'Search Advertising', href: '#' },
    { title: 'Display Advertising', href: '#' },
  ];
 

  const renderLinks = (links) =>
    links.map((link, index) => (
      <Link
        key={index}
        href={link.href}
        color='inherit'
        sx={{
          display: 'block',
          fontSize: isMobile ? '14px' : '16px',
          textDecoration: 'none',
        }}
      >
        {link.title}
      </Link>
    ));

  return (
    <Box sx={{ backgroundColor: '#222', color: '#fff', py: 4 }}>
      <Container maxWidth='lg'>
        <Grid container spacing={4}>
          {/* Left Section: Company Info */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant='h6' sx={{ mb: 2 }}>
              DigiBeez
            </Typography>
            <Typography variant='body2'>
              Digibeez is a digital marketing company we understand the power of
              changing a brand in the modern world through new concepts and
              applying advanced technologies. And a reminder here that our
              purpose is to help you improve your online standing while
              achieving tangible results.
            </Typography>

            {/* Social Media Icons */}
            <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
              <Link href='#' color='inherit' sx={{ textDecoration: 'none' }}>
                <Facebook />
              </Link>
              <Link href='#' color='inherit' sx={{ textDecoration: 'none' }}>
                <Twitter />
              </Link>
              <Link href='#' color='inherit' sx={{ textDecoration: 'none' }}>
                <LinkedIn />
              </Link>
            </Box>
          </Grid>

          {/* Middle Section: Grouped Links */}
          <Grid item xs={12} sm={6} md={8}>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={3}>
                <Typography variant='subtitle1' sx={{ mb: 1 }}>
                  Quick Links
                </Typography>
                {renderLinks(quickLinks)}
              </Grid>
              <Grid item xs={6} sm={3}>
                <Typography variant='subtitle1' sx={{ mb: 1 }}>
                  SEO
                </Typography>
                {renderLinks(SEOLinks)}
              </Grid>
              <Grid item xs={6} sm={3}>
                <Typography variant='subtitle1' sx={{ mb: 1 }}>
                  SMM
                </Typography>
                {renderLinks(SMMLinks)}
              </Grid>
              <Grid item xs={6} sm={3}>
                <Typography variant='subtitle1' sx={{ mb: 1 }}>
                  PPC
                </Typography>
                {renderLinks(PPCLinks)}
              </Grid>
              
            </Grid>
          </Grid>
        </Grid>

        {/* Bottom Section: Copyright */}
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant='body2'>
            © 2024 Digibeez. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;