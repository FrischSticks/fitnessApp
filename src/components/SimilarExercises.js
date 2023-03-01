import React from 'react'
import { Box, Typography } from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{mt: { lg: '100px', xs: '3px'}}}>
      <Typography variant='h4' mb={5}>Exercises Targeting the Same Muscle Group</Typography>
      <Box sx={{ position: 'relative', p: '2', width: '100%'}}>
        { targetMuscleExercises.length ? 
          <HorizontalScrollbar data={targetMuscleExercises}/>
          : <Loader />
        }
      </Box>

      <Typography variant='h4' mb={5} mt={25}>Exercises Using the Same Equipment</Typography>
      <Box sx={{ position: 'relative',  p: '2', width: '100%' }}>
        { equipmentExercises.length ? 
          <HorizontalScrollbar data={equipmentExercises}/>
          : <Loader />
        }
      </Box>
    </Box>
  )
}

export default SimilarExercises