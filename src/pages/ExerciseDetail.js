import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom' //  used to determine the id of the exercise we are currently on so that we can fetch additionaly data about that exercise.
import { Box } from '@mui/material'
import { exerciseOptions, fetchedData, youtubeOptions} from '../utils/ApiFetch'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({})
  const [exerciseVideos, setExerciseVideos] = useState([])
  const { id } = useParams() // this is used to give access to the id(number) of the page we are currently on.


  useEffect(() => {
    const fetchExercisesData = async () =>{
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com"
      const youtubeSearchUrl = "https://youtube-search-and-download.p.rapidapi.com" 

      const exerciseDetailData = await fetchedData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions)
      setExerciseDetail(exerciseDetailData)

      const exerciseVideoData = await fetchedData(`${youtubeSearchUrl}/search?query=${exerciseDetail.name}`, youtubeOptions)
      setExerciseVideos(exerciseVideoData.contents)
      
    }
    fetchExercisesData( )
  },[id]) // the dependency array is so that, when we only recall the useEffect function when the id changes.

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises />
     
    </Box>
  )
}

export default ExerciseDetail