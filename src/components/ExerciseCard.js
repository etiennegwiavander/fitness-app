import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import{ Button, Stack, Typography, Box } from '@mui/material'
import Skeleton from '@mui/material/Skeleton'

const  ExerciseCard = ({ exercise }) => {
    // console.log(exercise)
    const [isLoding, setIsLoding] = useState(false)

  return (
<Box>
    {<Link className='exercise-card' to={`/exercise/${exercise.id}`}  >

        {isLoding ? (
            <Skeleton variant='rectangle' sx={{ width: '100px', height:'200px'}}  animation='wave' />
        ) : (<img src={ exercise.gifUrl} alt={ exercise.name} loading='lazy'/>)
        }

        <Stack direction="row" sx={{ justifyContent:'center' }}>  
        
            <Button 
                sx={{ 
                    ml: "21px", 
                    color: "#fff", 
                    background: "#ffa9a9", 
                    fontSize: "14px", 
                    borderRadius: "20px", 
                    textTransform:"capitalize"
                }}>
                {exercise.bodyPart}
            </Button>
            <Button 
                sx={{ 
                    ml: "21px", 
                    color: "#fff", 
                    background: "#fcc757", 
                    fontSize: "14px", 
                    borderRadius: "20px", 
                    textTransform:"capitalize"
                }}>
                {exercise.target}
            </Button>
            
        </Stack>
        <Typography 
            style={{display:"flex", justifyContent: 'center'}} 
            textAlign='center' 
            fontWeight="bold" 
            mt="11px" 
            textTransform="capitalize" 
            color="black" fontSize="22px"
        >
            {exercise.name}
        </Typography>

    </Link>}
    
    </Box>
  )
}

export default ExerciseCard