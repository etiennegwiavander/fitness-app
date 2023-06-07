import React, {useState, useEffect} from 'react'
import { Typography, Box, Stack } from '@mui/material'
import Pagination from '@mui/material/Pagination'
import { exerciseOptions, fetchedData } from '../utils/ApiFetch'
import ExerciseCard from './ExerciseCard'
import Skeleton from '@mui/material/Skeleton'




const Exercise = ({ exercises, bodyPart, setExercises }) => {
  

  // "exercises" is send down as a prop from the "Home" component.
  // the "bodyPart" are coming from the "SearchExercise" component.
  const [currentPage, setcurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  console.log(isLoading)
  const exercisesPerPage = 9
  const indexOfLastExercise = currentPage * exercisesPerPage // this returns 9 which is 1 * 9 ( because the innitial state of the current page is 1)
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage // This returns 0 since 9-9 =0 (because the indexOfLastExercise is 9.)
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise) // This logic give an array of 9 items that allows it to be displayed on a single page.


  const paginate = (e, value) => {
    setcurrentPage(value) // the "setCurrentPage" is set equal to "value" because by default the paginat function comes with two parameters "e and value" for the pagination button to effectively work.
    window.scrollTo({ top: 1600, behavior: 'smooth'}) // this method makes it posible for the page to automatically scroll to 1600px when a pagination number is clicked.
  }

  useEffect(() =>{
    const fetchExercisesData = async () => {
      let exercisesData = []
      if(bodyPart === 'all'){
        exercisesData = await fetchedData( 'https://exercisedb.p.rapidapi.com/exercises', exerciseOptions )
      }else{
        exercisesData = await fetchedData( `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions )
        
      }
      setExercises(exercisesData) // this changes the setExercises from the "Home" component to the "exercisesData".
      setIsLoading(false)

      console.log(exercisesData)

    }
    

    
    fetchExercisesData()
  }, [bodyPart])

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
      
      { isLoading ? (
        <Stack direction='row' sx={{ gap: '60px'}}>
          <Skeleton variant='rectangle' sx={{ width: '350px', height:'445px'}}  animation='wave' />
          <Skeleton variant='rectangle' sx={{ width: '350px', height:'445px'}}  animation='wave' />
          <Skeleton variant='rectangle' sx={{ width: '350px', height:'445px'}}  animation='wave' />
        </Stack>
      ) : (
      <Stack direction="row" sx={{ gap: {lg: '100px', xs: '40px'}}} flexWrap="wrap" justifyContent='center'>
        {currentExercises.map((exercise, index) =>(

          <ExerciseCard key={index} exercise={exercise}/>

        ))}
      </Stack>)}

      <Stack alignItems="center" mt="100px">
        {exercises.length > 9 &&(
          <Pagination
            color='standard'
            shape='rounded'
            count={Math.ceil( exercises.length/exercisesPerPage )}
            page={currentPage} 
            onChange={paginate} // the "paginate" is a function that is being called any time a pagination function is clicked
            size='large'
          />
        )}
        
      </Stack>
    </Box>
  )
}

export default Exercise