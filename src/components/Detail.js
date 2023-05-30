import React from 'react'
import { Typography, Stack, Button } from '@mui/material'
import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment.png'


const Detail = ({ exerciseDetail }) => {
  // We are getting the exerciseDetail as a prop from the ExerciseDetails component
  console.log(exerciseDetail)
  const { bodyPart, gifUrl, name, target, equipment} = exerciseDetail

  const extraDetail = [
    { icon: BodyPartImage,
      name: bodyPart
    },
    { icon: TargetImage,
      name: target
    },
    { icon: EquipmentImage,
      name: equipment
    }
  ]

  // this array was created to reduce the use of repeated lines of code.

  return (
    <Stack gap='60px' sx={{flexDirection: {lg: 'row'}, p: '20px', alignItems: 'center'}}>
      <img src= {gifUrl} alt={name} loading='lazy' className='detail-image'/>
      <Stack sx={{ gap: {lg: '35px', xs: '29px'}}}>
        <Typography variant='h3'>
          {name}
        </Typography>
        <Typography variant='h6'>
          Exercises keep you strong. <b>{name}</b> is one of the best exercises to target your <b>{bodyPart}</b>. 
          It will help you improve your mood and gain energy.
        </Typography>

        {extraDetail.map( (item)=>(

          <Stack direction="row" gap="24px" alignItems = "center" key={item.name}>

            <Button sx={{ backgroundColor: "#fff2db", hight: "100px", width:"100px", borderRadius:"50%" }}>
              <img src={item.icon} alt={item.name} /> 
              
            </Button>
            <Typography textTransform='capitalize' color="black" variant='h6' ml="15px"> {item.name} </Typography>
          </Stack>

        ))}
        
        
      </Stack>
    
    </Stack>
  )
}

export default Detail 