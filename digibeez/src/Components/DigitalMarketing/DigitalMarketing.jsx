import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MyImage from '../../assets/DigitalMarketingImg/marketing.jpg'; // Adjust the path to your image

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

const AnimatedImage = styled('img')({
    maxWidth: 495,
    width: '100%',
    maxHeight: 600,
    height: 'auto',
    objectFit: 'cover',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        transform: 'scale(1.1)',
    },
});
export default function DigitalMarketing() {
    return (
        <>
            <Box sx={{
                marginTop:-15,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                Width: '100vw',
                textAlign: 'center'
            }}>
                <Box sx={{ width: '100%' , maxWidth:1200, marginBottom:10}}>

                <Typography gutterBottom variant="h3" component="div" sx={{ fontWeight: 'bold', marginBottom:10}}>
                Digital Marketing Process
                </Typography>
                    <Grid container spacing={6} justifyContent="center" alignItems="center" sx={{marginX:3}}>
                        <Grid item xs={6}>
                            <Item>
                                <AnimatedImage
                                    src={MyImage}
                                    alt="Digital Marketing"
                                
                                />
                            </Item>
                        </Grid>

                        <Grid item xs={6} justifyContent={'center'} >
                            <Box sx={{ textAlign: 'left', maxWidth: 510, width: 'auto',maxHeight: 550, height: 'auto' }}>
                                
                                <h3>Planning and Strategy:</h3>
                                <p>Setting goals, exploring audiences and choosing proper channels which can be social networks, SEO, and ads.</p>
                                <h3>Content Creation:</h3>
                                <p>Create popular blogs and videos, as well as infographics specific to the target audience preferences regarding clicks.</p>
                                <h3>Execution and Distribution:</h3>
                                <p>Launch drives on selected media, guarantee the timely posting and audience interaction.</p>
                                <h3>Monitoring and Optimization:</h3>
                                <p>Under the advanced section of the analytics tab users can track those key performance indicators, adjust the strategies and optimise the campaigns for better results.</p>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>

        </>
    );
}