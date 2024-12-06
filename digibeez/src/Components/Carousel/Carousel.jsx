import React from 'react';
import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import CarouselImg1 from '../../assets/CarouselImages/Carousel-1.png';
import CarouselImg2 from '../../assets/CarouselImages/Carousel-2.png';
import CarouselImg3 from '../../assets/CarouselImages/Carousel-3.png';
import CarouselImg4 from '../../assets/CarouselImages/Carousel-4.png';
import CarouselImg5 from '../../assets/CarouselImages/Carousel-5.png';

const Carousel = () => {
  const slides = [
    { id: 1, content: 'Slide 1', image: CarouselImg1 },
    { id: 2, content: 'Slide 2', image: CarouselImg2 },
    { id: 3, content: 'Slide 3', image: CarouselImg3 },
    { id: 4, content: 'Slide 4', image: CarouselImg4 },
    { id: 5, content: 'Slide 5', image: CarouselImg5 },
  ];

  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        style={{
          '--swiper-navigation-color': '#000',
          '--swiper-pagination-color': '#000',
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Box
              component='img'
              src={slide.image}
              alt={slide.content}
              sx={{
                width: '100%',
                height: { xs: '500px', sm: '400px', md: '700px' },
                objectFit: 'center',
                borderRadius: 2,
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Carousel;
