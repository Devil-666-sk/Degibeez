import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid2'; 
import Box from '@mui/material/Box';

import Collage from '../../assets/career img/collage.png';
import Graph from '../../assets/career img/graph.png';
import Laptop from '../../assets/career img/person laptop.png';
import Split_Laptop from '../../assets/career img/split laptop.png';
import { Margin } from '@mui/icons-material';


const cardData = [
    {
        image: Collage ,
        title: "Multifaceted Positions and Subspecialties",
        description: "The digital marketing job opportunities available include SEO specialist, content marketer, social media manager, email marketer, PPC manager among others. "
    },
    {
        image: Graph,
        title: "High demand with added prospects for growth.",
        description: "Today, digital marketing is one of the most fast-growing industries, and this is why there is a great demand for qualified specialists for its functioning. This growth offer a number of employment and promotion chances for higher paying work."
    },
    {
        image: Laptop,
        title: "Continuous Learning and Innovation",
        description: "Digital marketing refers to a continually shifting discipline considering the rapid advances in computer technology and innovation. The field is greatly dynamic in the environment encouraging constant learning and innovation making the job stimulating to anyone who loves career updates."
    },
    {
        image: Split_Laptop,
        title: "Creativity and Logics Have Equal Place",
        description: "Digital marketing is one of the fields demanding creative thinking and sharp ratios. Experts create compelling material and ad campaigns also, observing data to assess results and refine processes. It also ensures the accomplishment of a rewarding and challenging work balance."
    }
];

export default function Careers() {
    return (


        <Box
            sx={{
                marginTop: {xs:5 ,md:-5},
                flexGrow: '1',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                Width: '100vw', 
                textAlign: 'center',
                marginBottom:10
                
            }}
        >
            <Box sx={{ width: '100%'}}>
                <Typography gutterBottom variant="h3" component="div" sx={{ fontWeight: 'bold', marginBottom:4}}>
                    Careers
                </Typography>
                <Typography variant="body2" gutterBottom sx={{
                    marginBottom: 8, mx:{xs:3,md:15}, fontSize: { xs: '0.9rem', sm: '1rem' },
                    textAlign:{xs:'justify', md:'center'} 
                }}>
                    Digital marketing refers to a process of marketing brands to people through web-based platforms to achieve customer interaction. It involves tasks such as an SEO specialist, content producer, a social media officer, and data processor—professionals who combine creative and rational thinking. People in this filed always ensure that they innovate in technologies and trends in order to demonstrate the benefits of their innovation on organizational goals and objectives.
                </Typography>
            <Grid container spacing={{xs:8, md:10}} justifyContent={'center'} sx={{marginX:{xs:10,xl:12}} }>
                    {cardData.map((card, index) => ( 
                        <Grid item xs={12} sm={6} md={4}  key={index}>
                            <Card sx={{
                                
                                width: '100%',
                                maxWidth: 520,
                                minHeight: 440,
                                height: 'auto', 

                            }}
                            >
                                <CardActionArea>
                                    <CardMedia
                                        sx={{ objectFit: 'cover' }}
                                        component="img"
                                        height="300"
                                        image={card.image} 
                                        alt={card.title}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold', }}>
                                            {card.title}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center' }}>
                                            {card.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}