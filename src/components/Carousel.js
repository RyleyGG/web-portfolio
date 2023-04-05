import React, { useState, useEffect } from 'react';
import { Typography, Box, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const Carousel = ({ items, imageWidthPercent = 35 }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const calculateDimensions = () => {
        const width = (window.innerWidth * imageWidthPercent) / 100;
        const height = (width * 3) / 4; // Assuming a 4:3 aspect ratio, change this to match your images' aspect ratio
        setDimensions({ width, height });
        };

        calculateDimensions();
        window.addEventListener('resize', calculateDimensions);

        return () => {
            window.removeEventListener('resize', calculateDimensions);
        };
    }, [imageWidthPercent]);

    const handleNext = () => {
        setActiveIndex((prevActiveIndex) => (prevActiveIndex + 1) % items.length);
    };

    const handlePrev = () => {
        setActiveIndex((prevActiveIndex) => (prevActiveIndex + items.length - 1) % items.length);
    };

    const renderDots = () => {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
            {items.map((item, index) => (
                <Box
                key={index}
                sx={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: activeIndex === index ? 'primary.main' : 'action.disabled',
                    mx: 0.5,
                }}
                ></Box>
            ))}
            </Box>
        );
    };

  return (
    <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', width: `${dimensions.width}px` }}>
        <IconButton onClick={handlePrev} sx={{ position: 'absolute', left: '-40px', zIndex: 1 }}>
            <ArrowBackIos />
        </IconButton>
        <Box sx={{ textAlign: 'center' }}>
            <Box sx={{ width: `${dimensions.width}px`, height: `${dimensions.height}px`, overflow: 'hidden' }}>
            <img
                src={items[activeIndex].imageUrl}
                alt={items[activeIndex].caption}
                style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                }}
            />
            </Box>
            <Typography variant="h6" component="div" sx={{ mt: 1 }}>
                {items[activeIndex].caption}
            </Typography>
            {renderDots()}
        </Box>
        <IconButton onClick={handleNext} sx={{ position: 'absolute', right: '-40px', zIndex: 1 }}>
            <ArrowForwardIos />
        </IconButton>
    </Box>
  );
};

export default Carousel;
