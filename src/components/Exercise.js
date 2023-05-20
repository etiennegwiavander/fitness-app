import React, {useState, useEffect} from 'react'
import { Typography, Box, Stack } from '@mui/material'
import Pagination from '@mui/material/Pagination'
import { exerciseOptions, fetchedData } from '../utils/ApiFetch'
import ExerciseCard from './ExerciseCard'



const Exercise = ({ exercises, bodyPart, setExercises }) => {
  const [currentPage, setcurrentPage] = useState(1)
  const exercisesPerPage = 9
  const indexOfLastExercise = currentPage * exercisesPerPage // this returns 9 which is 1 * 9 ( because the innitial state of the current page is 1)
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage // This returns 0 since 9-9 =0 (because the indexOfLastExercise is 9.)
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise) // This logic give an array of 9 items that allows it to be displayed on a single page.


  const paginate = (e, value) => {
    setcurrentPage(value)
    window.scrollTo({ top: 1600, behavior: 'smooth'})
  }

   return (

    <Box id= "exercises"
      sx={{mt: { lg: '110px'},
            ml: { lg: '60px', xs: "50px"}
          }}
      mt="50px"
      p="20px"
    >
      
      <Typography variant='h3' mb="46px" display='flex' justifyContent='center'>
        Showing Results
      </Typography>
      
      <Stack direction="row" sx={{ gap: {lg: '100px', xs: '40px'}}} flexWrap="wrap" justifyContent='center'>
        {currentExercises.map((exercise, index) =>(
          <ExerciseCard key={index} exercise={exercise}/>
        ))}
      </Stack>
      <Stack alignItems="center" mt="100px">
        {exercises.length > 9 &&(
          <Pagination
            color='standard'
            shape='rounded'
            count={Math.ceil( exercises.length/exercisesPerPage )}
            page={currentPage}
            onChange={paginate}
            size='large'
          />
        )}
        
      </Stack>
    </Box>
  )
}

export default Exercise