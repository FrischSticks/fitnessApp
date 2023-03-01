import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material'
import { textTransform } from '@mui/system'

const ExerciseCard = ({ exercise }) => {
  return (
    <Link to={`/exercise/${exercise.id}`} className='exerciseCard'>
         <Typography
            ml='21px' 
            color='#000' 
            fontWeight='bold' 
            mt='11px'
            pb='10px'
            textTransform='capitalize'
            fontSize='24px'
        >
            {exercise.name}
        </Typography>
        <img src={exercise.gifUrl} alt={exercise.name} loading='lazy'/>
        <Stack direction='row'>
            <Button sx={{
                ml:'21px',
                color: '#fff',
                background: '#ffa9a9',
                fontSize: '14px',
                borderRadius: '20px',
                textTransform: 'capitalize'
            }}>
                {exercise.bodyPart}
            </Button>
            <Button sx={{
                ml:'21px',
                color: '#fff',
                background: '#fcc757',
                fontSize: '14px',
                borderRadius: '20px',
                textTransform: 'capitalize'
            }}>
                {exercise.target}
            </Button>
            <Button sx={{
                ml:'21px',
                color: '#fff',
                background: '#6495ED',
                fontSize: '14px',
                borderRadius: '20px',
                textTransform: 'capitalize'
            }}>
                {exercise.equipment}
            </Button>
        </Stack>
    </Link>
  )
}

export default ExerciseCard