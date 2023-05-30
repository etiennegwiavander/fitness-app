import React from 'react'
import { Typography, Box, Stack } from '@mui/material'

const ExerciseVideos = ({ exerciseVideos, name }) => {
  // the props are gotten from the ExerciseDetail component.

  //error: 'You should provide at least "query" or "next" parameter'
  // The above error was initially gotten because in the ExerciseDetail component we used use "q" instead of "query" in the youtube url/.
  console.log( exerciseVideos )

  if(!exerciseVideos.length) return "Loading..."

  return (
    <Box sx={{ marginTop: { lg: '200px', xs: '20px'}}} p='20px'>

      <Typography variant='h3' mb='33px'>
        Watch <span style={{ color: '#ff2625', textTransform: 'capitalize'}} >{name}</span> exercise videos
      </Typography>
      <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center"
        sx={{
          flexDirection: {lg: 'row'},
          gap: { lg: '110px', xs: '0'}
        }}
      >
        {exerciseVideos?.slice(0, 3).map((item, index) => (
          //.slice(0, 3) is to make sure we only get videos from index 0 to 3 ie 3 videos will be listed
          <a
            key={index}
            className='exercise-video'
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target='_blank'
            rel='noreferrer'
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title}/>
            <Box textAlign='center'>
              <Typography variant='h5' color='black'>
                {item.video.title}
              </Typography>
              <Typography variant='h6' color='black'>
                <span style={{ color:'darkgray'}}>Channel:</span> {item.video.channelName}
              </Typography>

            </Box>
            
          </a>
        ))}
      </Stack>
      
    </Box>


  )
}

export default ExerciseVideos