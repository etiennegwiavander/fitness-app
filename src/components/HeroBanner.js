import React from 'react'
import banner from '../assets/images/banner.png'
import { Box, Stack, Typography, Button } from '@mui/material'

const HeroBanner = () => {
  return (
    <Box 
        sx={{
                mt: {lg: '212px', xs: '70px'},
                ml: {sm: '50px'}
            }} position='relative' p='20px'>
        <Typography color='#FF2625' fontWeight='600' fontSize='26px'>
            Fitness Club
        </Typography>
        <Typography fontWeight='bold' sx={{fontSize:{ lg: '44px', xs: '40px'}}} mt='30px' mb='23px'>
            Sweat, Smile <br/> and Repeat
        </Typography>
        <Typography mt='10px' fontSize='22px' mb={4}>
            Check out the most effective exercises
        </Typography>
        <Button variant='contained' color='error' href='#exercises' sx={{ background: '#FF2625', p:'10px'}}> Explore Exercises</Button>
        <Typography 
            fontWeight={600}
            color='#FF2625'
            fontSize='200px'
            sx={{
                opacity: 0.1,
                display: { lg: 'block', xs: 'none'},
                userSelect: 'none'
            }}
        >
            Exercise
        </Typography>
        <img src={banner} alt='Banner' className='hero-banner-img'/>

    </Box>
  )
} 

export default HeroBanner