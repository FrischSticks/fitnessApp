import React from 'react';
import { Box, emphasize, Stack, Typography } from '@mui/material';

const ExerciseVideos = ({ exerciseVideos, name } ) => {
if(!exerciseVideos.length) return 'Loading Videos. . .';
console.log(exerciseVideos);

  return (
    <Box sx={{marginTop: {lg: '200px', xs: '20px'}}} p='20px'>
      <Typography variant='h4' mb='33px' textTransform='capitalize'>
        Watch {name} Videos
      </Typography>
      <Stack 
        justifyContent='flex-start' 
        flexWrap='wrap' 
        alignItems='center'
        sx={{
          flexDirection: { lg: 'row'},
          gap: { lg: '110px', xs: '0'}
        }}
      >
        {exerciseVideos?.slice(0,3).map((item, index) => (
          <a
            key={index}
            className='exerciseVideo'
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target='_blank'
            rel='noreferrer'
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.lengthText} />
            <Box>
              <Typography variant='h5' >
                {item.video.title}
              </Typography>
              <Typography >
                {item.video.channelName} - {item.video.lengthText}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos