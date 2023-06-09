import React from 'react'
import gym from '../assets/icons/gym.png'
import { Stack, Typography } from '@mui/material'

const BodyParts = ({item, bodyPart, setBodyPart}) => {
  // console.log(item)
  return (
    <Stack 
      type="button"
      alignItems="center"
      justifyContent="center"
      className='bodyPart-card'
    
      // the sx property below means that for the selected item, it will fufill the condtions of the boderTop while the unselected will take the styles after that.
      // 
      sx={{
          borderTop:bodyPart === item ? '4px solid #04AA6D': " ",
          backgroundColor: 'white',
          borderBottomLeftRadius: '20px',
          width: '270px',
          height: '280px',
          cursor: 'pointer',
          gap: '47px',
          userSelect: 'none'

        }}
        onClick={()=>{
          setBodyPart(item)
          window.scrollTo({top: 1800, left: 100, behavior: 'smooth'})
        }}
          
        
    >
        <img src={gym} alt="dumbbell"
          className='body-part-icon'
          style={{
            width: '40px',
            height: '40px',
          }}
        />
        <Typography>
          {item}
        </Typography>
    </Stack>
  )
}

export default BodyParts