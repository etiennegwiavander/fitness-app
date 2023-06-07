import React from 'react'
import banner from '../assets/images/banner.jpg'
import { Box, Stack, Typography, Button } from '@mui/material'

const HeroBanner = () => {
  return (
    <Box 
    sx={{
            mt: {lg: '212px', xs: '70px'},
            ml: {sm: '50px'}
        }} position='relative' p='20px'
    >
        <Typography color='#04AA6D' fontWeight='600' fontSize='26px'>
            Fitness Club
        </Typography>
        <Typography fontWeight='bold' sx={{fontSize:{ lg: '44px', xs: '40px'}}} mt='30px' mb='23px'>
            Sweat, Smile <br/> and Repeat
        </Typography>
        <Typography mt='10px' fontSize='22px' mb={4}>
            Check out the most effective exercises
        </Typography>
        <Button variant='contained' href='#exercises' sx={{ background: '#04AA6D', p:'10px'}}> Explore Exercises</Button>
        <Typography 
            fontWeight={600}
            color='#04AA6D'
            fontSize='200px'
            sx={{
                opacity: 0.1,
                display: { lg: 'block', xs: 'none'},
                userSelect: 'none'
            }}
        >
            Exercise
        </Typography>
        
        <img src={banner} alt='Banner' className='hero-banner-img' 
        style={{
            borderBottomLeftRadius: '90px',
            width: '630px'
        }}/>
        
        

    </Box>
  )
} 

export default HeroBanner