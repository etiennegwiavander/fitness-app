import React, { useState, useEffect } from 'react'
import { Typography, Button, Box, Stack, TextField } from '@mui/material'
import { exerciseOptions, fetchedData } from '../utils/ApiFetch'
import HorizontalScrollBar from './HorizontalScrollBar'


const SearchExercise = ({setBodyPart, bodyPart, setExercises}) => {

    const [search, setSearch] = useState( ' ' )
    const [bodyParts, setBodyParts] = useState([])

    const handleSearch = async (e) =>{
        // e.preventDefault() 
        if(search){
            const exercisesData = await fetchedData( 'https://exercisedb.p.rapidapi.com/exercises', exerciseOptions )

            const searchedExercises = exercisesData.filter(
                (exercise) => exercise.name.toLowerCase().includes(search)
                || exercise.target.toLowerCase().includes(search)
                || exercise.equipment.toLowerCase().includes(search)
                || exercise.bodyPart.toLowerCase().includes(search)
            )
            setSearch(" ")
            setExercises( searchedExercises)
        }
    }

    useEffect(() => {
      const exerciseByBodyParts = async () =>{
        const bodyPartsData = await fetchedData( 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)
        setBodyParts(['all', ...bodyPartsData])
        console.log(bodyParts)
      }
      exerciseByBodyParts()


    }, [ ])
    

  return (
    <Stack style={{
       alignItems:'center', 
        mt:'37px', 
        justifyContent:'center' ,
        p:'20px' , 
    }}
   
    >
        <Typography 
        fontWeight='bold' 
        mb='50px' 
        textAlign='center' 
        sx={{
            fontSize:{ lg: '44px', xs: '30px'}
        }}>
            Awesome Exercises You <br/> Should Know
        </Typography>
        <Box>
            <TextField 
                sx={{
                    input:{
                        fontWeight: 'bold', 
                        border:'none', 
                        borderRadius:'4px'
                    },
                    
                    width: { lg: '800px', xs: '350px'},
                    backgroundColor: 'white',
                    borderRadius: '40px',
                    border: 'none'

                }}
                height='76px'
                type='text'
                placeholder='Search Exercises'
                value= {search}
                onChange={(e)=>setSearch(e.target.value.toLowerCase())}
                
            />
            <Button className='search-btn'   justifyContent='center' onClick={handleSearch}
            sx={{
                 background:' #FF2625',
                 color:' white',
                 textTransform: 'none',
                 width: { lg: '175px', xs: '80px'},
                 fontSize: {lg: '17px', xs: '14px'},
                 height: '55px',
                 position: 'absolute',
                //  right: '0'
                }}>
            
             
                Search 
            </Button>
        </Box>
        <Box sx={{ position: 'relative', width: '100%', p: '29px'}}>
            <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        </Box>
        
    </Stack>
  )
}
  
export default SearchExercise