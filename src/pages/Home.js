import React, { useState } from 'react'
import { Box} from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import SearchExercise from '../components/SearchExercise'
import Exercise from '../components/Exercise'


const Home = () => {

  const [bodyPart, setBodyPart] = useState("all")
  const [exercises, setExercises] = useState([])

  return (
    
    <Box>

      <HeroBanner />
      <SearchExercise 
        setExercises={setExercises} 
        bodyPart={bodyPart} 
        setBodyPart={setBodyPart} 
      />
      <Exercise 
        exercises={exercises}
        setExercises={setExercises} 
        bodyPart={bodyPart} 
          
      />

    </Box> 

  )
}

export default Home