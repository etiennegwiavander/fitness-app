import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/Logo.png'
import brawn from '../assets/images/brawn.png'

const Navbar = () => {
  return (
    <Stack  direction='row' sx={{ justifyContent: 'space-around', textAlign: 'center', gap: {sm:'122px', xs: '40px'},
      mt: {sm: '20px', xs: '20px'}, justifyContent: 'none'}} px= '20px'
    >
      <Link to='/'> 
        <img src={brawn} alt="Logo" style={{ width: '65px', height: '65px', margin: '0 20px'}} />
      </Link>
      <Stack 
        direction= 'row'
        gap='40px'
        fontSize='24px'
        alignItems='center'
        
      >
        <Link to='/' 
          style={{
            textDecoration: 'none',
            borderBottom: '3px solid #04AA6D',
            color: '#3A1212' 

          }}
        >
          Home
        </Link>
        <a href="#exercises"
          style={{
            textDecoration: 'none',
            color: '#3A1212'
          }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  )
}

export default Navbar