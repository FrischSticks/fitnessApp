import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box sx={{
      mt: {
        lg: '225px', xs: '50px'
      },
      ml: {
        sm: '50px', 
      }
     }} position='relative'>
      <Typography 
        color='#FF2625'
        fontWeight='700'
        fontSize='35px'
      >
        Welcome to Frische's Fitness Club.
      </Typography>
      <Typography 
        fontWeight='600'
        mt='3px'
        sx={{
          fontSize: {
            lg: '45px', xs: '40px'
          }
        }}
      >
        Bust Through Your Barriers!
      </Typography>
      <Button
        variant='contained'
        color='error'
        href='#exercises'
        sx={{
          backgroundColor:'#ff2625',
          padding:'10px',
          fontSize:'17px',
          fontWeight:'600',
          mt:'175px'
        }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={550}
        color='#ff2625'
        fontSize='180px'
        char
        sx= {{
          opacity: .1,
          display: {
            lg: 'block', xs: 'none'
          }
        }}
      >
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt='banner' className='heroBannerImage'/>
    </Box>
  )
}

export default HeroBanner